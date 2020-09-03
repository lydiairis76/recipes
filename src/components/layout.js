import React from "react"
import "./layout.scss"

export default function Layout({children}) {
    return(
        <div class="container">
            {children}
        </div>
    )
}