import Card from "@/components/common/Card";
import Head from "next/head"

function Home() {
    return (
        <>
            <Head>
                <title>Home | MyApp</title>
            </Head>

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
