import Card from "@/components/common/Card";
import Head from "next/head"
import PostModal from "@/components/common/PostModal";
import Button from "@/components/common/Button";
function Home() {
  return (
    <>
      <Head>
        <title>Home | MyApp</title>
      </Head>
      <section className="max-w-5xl mx-auto flex justify-end mt-4 p-6">
        <Button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer self-center"
          text="+ Create Post"
          onClick={() => alert("Button clicked!")}
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

    </>
  );
}

export default Home