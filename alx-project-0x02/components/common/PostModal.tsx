import { useState } from "react"

function PostModal() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    return (
        <div>
            <form>
                <label htmlFor="title"></label>
                <input type="text" placeholder="Title" name="title" onChange={(e) => setTitle(e.target.value)} required />
                <label htmlFor="content"></label>
                <input type="text" placeholder="Content" name="content" onChange={(e) => setContent(e.target.value)} required />
                <button type="submit" onClick={(e) => {
                    e.preventDefault()
                    console.log("Title:", title)
                    console.log("Content:", content)
                }}>Submit</button>
            </form>
        </div>
    )
}

export default PostModal
