import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { firestore } from "../../firebase.js"
import Layout from "../components/layout"
import Comments from "../components/comments.js"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


export default function RecipeTemplate({data}) {
    const recipe = data.contentfulRecipes
    const [comments, setComments] = useState([])
    

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
}



useEffect(() => {
  firestore.collection(`comments`).orderBy(`Created`, `desc`).onSnapshot(snapshot => {
    const posts = snapshot.docs
      .filter(doc => doc.data().Page === recipe.name)
      .map(doc => {
        return { id: doc.id, ...doc.data() }
      })
    setComments(posts)
  })
}, [recipe] )


    return (
        <Layout>
          <div class="container">
          <div class="title">
            <h2>{recipe.name}</h2>
          </div>
            <img src={recipe.image.file.url} alt={recipe.name} class="img-thumbnail" />
            <p>
                {documentToReactComponents(recipe.richTextDescription.json, options)}
            </p>
            <Comments comments={comments} page={recipe.name} />
          </div>
          
        </Layout>
    )
}

export const query = graphql`
query recipeQuery($slug: String!) {
    contentfulRecipes(name: {eq: $slug}) {
          name
          image {
            file {
              url
            }
          }
          richTextDescription {
            json
          }
        }
      }
  `