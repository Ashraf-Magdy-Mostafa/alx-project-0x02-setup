import Header from "@/components/layout/Header"
import { useEffect, useState } from "react"
import { type PostProps } from '@/interfaces'
import PostCard from "@/components/common/PostCard"
import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps<{ posts: PostProps[] }> = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    const partialData: PostProps[] = await data.slice(0, 10) //[{},{}]
    return {
        props: {
            posts: partialData
        }
    }
}

export default function posts({ posts }: { posts: PostProps[] }) {
    // const [posts, setPosts] = useState<PostProps[]>([])


    return (
        <>
            <Header />
            <main className="max-w-6xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-6">Latest Posts</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        posts.map((posts) => (
                            <PostCard
                                key={posts.id}
                                title={posts.title}
                                body={posts.body}
                                userId={posts.userId}
                            />
                        ))
                    }
                </div>
            </main>
        </>
    )
}



