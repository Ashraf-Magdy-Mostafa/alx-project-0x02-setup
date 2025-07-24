import Header from "@/components/layout/Header"
import { useEffect, useState } from "react"
import { type PostProps } from '@/interfaces'
import PostCard from "@/components/common/PostCard"
function posts() {
    const [posts, setPosts] = useState<PostProps[]>([])
    useEffect(() => {
        // Fetch posts from the API
        const fetchPosts = async () => {
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/posts')
                const posts = await data.json()
                setPosts(posts.slice(0, 10))

            }
            catch (error) {
                console.error("Error fetching posts:", error)
            }

        }
        fetchPosts()
    }, [])

    return (
        <>
            <Header />
            <main className="max-w-6xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-6">Latest Posts</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        posts.map((post) => (
                            <PostCard
                                key={post.id}
                                title={post.title}
                                body={post.body}
                                userId={post.userId}
                            />
                        ))
                    }
                </div>
            </main>
        </>
    )
}

export default posts
