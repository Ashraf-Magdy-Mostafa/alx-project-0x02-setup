import { type PostProps } from "@/interfaces"
function PostCard(props: PostProps) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{props.title}</h2>
            <p className="text-gray-600 mb-4">{props.body}</p>
            <p className="text-sm text-gray-500">Created By User ID: {props.userId}</p>
        </div>
    )
}

export default PostCard
