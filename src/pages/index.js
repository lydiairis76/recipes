import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({data}) {
  return (
  <>
  <Layout>
  <div class="container">
  <header class="blog-header py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">
        <a class="text-muted" href="#">About</a>
      </div>
      <div class="col-4 text-center">
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <a class="text-muted" href="#" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
        </a>
        <a class="btn btn-sm" href="#">Sign up</a>
      </div>
    </div>
  </header>

  <div class="nav-scroller py-1 mb-2">
    <nav class="nav d-flex" />
  </div>

  <div class="jumbotron p-4 p-md-5">
    <div class="col-md-6 px-0">
    <img src="" />
      <h1 class="display-4">Clean Plate</h1>
      <h2 class="lead my-3">Recipes high in flavor and low in effort.</h2>
      <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
    </div>
  </div>


</div>
    <div class="container">
    <div class="row md-2">
{data.allContentfulRecipes.nodes.map((node, index) => (
  
  <div class="col-md-4">
  <div class="card mb-4 box-shadow">
    <img class="card-img-top" src={ node.image.file.url } alt={ node.name } />
    <div class="card-body">
      <p class="card-text">{node.name}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <a href={node.name} class="btn btn-sm">View</a>
        </div>
      </div>
    </div>
  </div>
  </div>
))}  
</div>
</div>
</Layout>
</>
  )
}

export const query = graphql`
query MyQuery {
  allContentfulRecipes {
    nodes {
      name
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
}
`