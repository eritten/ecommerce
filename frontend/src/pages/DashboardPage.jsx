import React from 'react'

// custom imports
import DashboardNav from '../components/DashboardNav'
import Footer from '../components/Footer'
import DashboardSideBar from '../components/DashboardSideBar'

const DashboardPage = () => {
  return (
    <>
      <DashboardNav />

      <main role='main' className='py-10'>
        <div className="container-wrapper">
          <DashboardSideBar />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default DashboardPage