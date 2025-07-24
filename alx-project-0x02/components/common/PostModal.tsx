import { useState } from "react"
import { PostProps } from "@/interfaces"

function PostModal({ isOpen, onSubmit }: { isOpen: boolean, onSubmit: (post: PostProps) => void }) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    if (!isOpen) return null;
    return (
        <>
            <form className="bg-white p-6 rounded shadow-sm w-full max-w-md space-y-4"
            >
                <label className="block m-1 text-sm font-medium text-gray-500" htmlFor="title">Title</label>
                <input className="w-full px-4 mb-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" id="title" type="text" placeholder="Title" name="title" onChange={(e) => setTitle(e.target.value)} required />
                <label className="block m-1 text-sm font-medium text-gray-500" htmlFor="content">Content </label>
                <input className="w-full px-4 mb-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" id="content" type="text" placeholder="Content" name="content" onChange={(e) => setContent(e.target.value)} required />
                <button className="w-full py-2 px-4 mb-[-10] mt-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700  transition cursor-pointer" type="submit" onClick={(e) => {
                    e.preventDefault()
                    onSubmit({ title, body: content })

                }}>Submit</button>
            </form>
        </>
    )
}

export default PostModal
