import React from 'react'
import Header from '@/components/layout/Header'
import Head from 'next/head'

function index() {
  return (
    <>

      <Header />
      <div>
        <h1 className='text-4xl font-bold text-center mt-[calc(50vh-50px)]  p-4'>Welcome to My Website</h1>
        <p className='text-lg text-center mt-2 p-4'>This is the homepage.</p>

      </div>
    </>
  )
}

export default index
