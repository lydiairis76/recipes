import React, { useState } from "react"
import { firestore } from "../../firebase.js"
import Layout from "../components/layout"

export default function CommentForm({page}) {

    const [visitor, setVisitor] = useState("")
    const [message, setMessage] = useState("")

    const handleCommentSubmission = async e => {
        e.preventDefault()

        let comment = {
            Visitor: visitor,
            Message: message,
            Page: page,
            Created: new Date()
        }

        setVisitor("")
        setMessage("")

        firestore.collection(`comments`).add(comment).catch(err => {
            console.error('Error adding comment: ', err)
        })
    }

    return (
        <Layout>
            <h2>Leave your comment</h2>

            <form onSubmit={ e => handleCommentSubmission(e) }>
                <label htmlFor="visitor">Your Name</label>
                <input type="text" name="visitor" value={visitor} required onChange={e => setVisitor(e.target.value)} />

                <label htmlFor="message">Your Comments</label>
                <textarea name="message" value={message} required onChange={e => setMessage(e.target.value)}></textarea>

                <button className="btn">Submit</button>
            </form>
        </Layout>
    )
}