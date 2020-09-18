import React from "react"
import Layout from "../components/layout"

export default function Comment({comment}) {
    const timestamp = new Date(comment.Created.toDate())
    const tsMonth = timestamp.getMonth() + 1
    const tsDay = timestamp.getDate()
    const tsYear = timestamp.getFullYear()
    return (
        <Layout>
            <p>
                <img class="icon" src={"https://api.adorable.io/avatars/75/abott@adorable.png"+ comment.Visitor + ".png"} alt={comment.Visitor} />
                <strong> {comment.Visitor} says:</strong>
            </p>
            <p>
                <em>{comment.Message}</em>
            </p>
            <p>
                <small>{tsMonth}/{tsDay}/{tsYear}</small>
                <hr/>
            </p>
        </Layout>
    )
}