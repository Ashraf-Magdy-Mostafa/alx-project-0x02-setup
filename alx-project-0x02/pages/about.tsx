import Button from "@/components/common/Button"
import Header from "@/components/layout/Header"
function About() {
    return (
        <>
            <Header />
            <div className='p-4'>
                <h1 className='text-4xl font-bold text-center mt-[calc(50vh-50px)]  p-4'>About Us</h1>
                <p className='text-lg text-center mt-2 p-4'>This is the about page.</p>
                <Button className="bg-blue-500 mx-auto mt-8 block" size="medium" shape="rounded-md" text="Go Back" onClick={() => window.history.back()} />
            </div>
        </>
    )
}

export default About
