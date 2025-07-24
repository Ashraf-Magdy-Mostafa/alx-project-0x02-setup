import Header from "@/components/layout/Header"

function posts() {
    return (
        <>
            <Header />
            <div>
                <h1 className='text-4xl font-bold text-center mt-[calc(50vh-50px)]  p-4'>Posts Page</h1>
                <p className='text-lg text-center mt-2 p-4'>This is the posts page.</p>

            </div>
        </>
    )
}

export default posts
