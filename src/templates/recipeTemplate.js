import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


export default function recipeTemplate({data}) {
    const recipe = data.contentfulRecipes

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