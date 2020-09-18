import React from "react"
import Comment from "./comment.js"
import CommentForm from "./commentForm.js"
import Layout from "../components/layout"
export default function Comments({ comments, page }) {
    return (
     <Layout>
        <hr/>
        <h1>Tell Us What You Think</h1>   
        {/* comment form */}
        <CommentForm page={page} />
        <hr/>

        {/* comment list */}
        {comments.length === 0 && 
            <strong>Be the first to leave a comment!</strong>
        }
        {comments.length > 0 && 
            comments.map((c, index) => (
                <Comment comment={c} key={index} />
            ))
        }
     </Layout>
    )
}