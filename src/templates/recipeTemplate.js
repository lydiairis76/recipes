import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function recipeTemplate({data}) {
    const recipe = data.contentfulRecipes
    return (
        <Layout>
            <h2>{recipe.name}</h2>
            <img src={recipe.image.file.url} alt={recipe.name} class="img-thumbnail" />
            <p>
                {recipe.description.description}
            </p>

        </Layout>
    )
}

export const query = graphql`
query recipeQuery($slug: String!) {
    contentfulRecipes(name: {eq: $slug}) {
      name,
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
  }
  `