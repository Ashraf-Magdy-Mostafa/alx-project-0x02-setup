import { useState } from "react"
import { Post } from "@/interfaces"

function PostModal({ isOpen, onSubmit }: { isOpen: boolean, onSubmit: (post: Post) => void }) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    if (!isOpen) return null;
    return (
        <>
            <form className="bg-white p-6 rounded shadow-lg w-full max-w-md space-y-4"
            >
                <label className="block text-sm font-medium text-gray-700" htmlFor="title"></label>
                <input className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Title" name="title" onChange={(e) => setTitle(e.target.value)} required />
                <label className="block text-sm font-medium text-gray-700" htmlFor="content"></label>
                <input className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Content" name="content" onChange={(e) => setContent(e.target.value)} required />
                <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition" type="submit" onClick={(e) => {
                    e.preventDefault()
                    onSubmit({ title, content })

                }}>Submit</button>
            </form>
        </>
    )
}

export default PostModal
