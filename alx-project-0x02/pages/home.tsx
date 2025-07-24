import Card from "@/components/common/Card";
import Head from "next/head"
import PostModal from "@/components/common/PostModal";
import Button from "@/components/common/Button";
import { useState } from "react";
import { Post } from "@/interfaces";
function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const submitHandler = (newPost: Post) => {
    setPosts((prev) => [...prev, newPost]);
    console.log("New Post:", newPost);
    setIsModalOpen(false);
    console.log(posts)

  }
  return (
    <>
      <Head>
        <title>Home | MyApp</title>
      </Head>
      <section className="max-w-5xl mx-auto flex justify-end mt-4 p-6">
        <Button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer self-center"
          text="+ Create Post"
          onClick={() => setIsModalOpen(true)}
          disabled={false}
          type="submit" />
      </section>
      <main className="max-w-5xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Welcome to MyApp"
          content="This is a modern Next.js app using TypeScript and Tailwind CSS."
        />
        <Card
          title="Modular Design"
          content="Our components are reusable, typed, and follow the single-responsibility principle."
        />
        <Card
          title="API Integration"
          content="We fetch data from external sources to display dynamic content."
        />

      </main>
      {/* <PostModal isOpen={isModalOpen} /> */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm   flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <PostModal isOpen={isModalOpen} onSubmit={submitHandler} />
            <Button
              text="Close"
              className="w-full py-2 px-4 mt-4 bg-red-600 text-white  rounded hover:bg-red-700  transition cursor-pointer"
              onClick={() => setIsModalOpen(false)

              }
            />
          </div>
        </div>
      )}

    </>
  );
}

export default Home