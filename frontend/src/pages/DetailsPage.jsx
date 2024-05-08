import React, {useState, useEffect, useRef} from 'react'
import { SlLocationPin } from "react-icons/sl";
import { FaPhoneVolume } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import 'animate.css';
import {Link} from 'react-router-dom'

// custom imports
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Swipper from '../components/Swipper'

// import images for testing
import img1 from '../assets/f1.jpg'
import img2 from '../assets/f2.jpg'
import img3 from '../assets/f3.jpg'
import img4 from '../assets/f4.jpg'
import colors from '../config/colors'
import Button from '../components/Button';
import Modal from '../components/Modal';

const imagesArray = [img1, img2, img3, img4]

const DetailsPage = ({}) => {
  const [contactShown, setContactShown] = useState(false)
  const [reviewBoxShown, setReviewBoxShown] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const reviewInputRef = useRef(null)
  const reportInputRef = useRef(null)

  const number = '0548285798'

  useEffect(() => {
    if (reviewBoxShown && reviewInputRef.current) {
      reviewInputRef.current.focus();
    }
  }, [reviewBoxShown]);

  useEffect(() => {
    if (isModalOpen && reportInputRef.current) {
      reportInputRef.current.focus();
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      
      <main className='p-5 md:py-10' role='main'>
        <div className="container-wrapper flex min-h-screen flex-col md:flex-row gap-2">
          <div className="flex-[2] p-2">
            <div className="img-wrapper h-[22rem] md:h-[35rem] w-full md:w-[90%] mx-auto p-2 shadow-md">
              <Swipper
                imgArray={imagesArray}
                imgAlt='product'
              />
            </div>
            <div className="mx-auto p-3 w-max bg-green-400">
              <p className='text-2xl text-white font-semibold'>{imagesArray.length} Images</p>
            </div>
            {/* details box */}
            <div className="w-full p-2 bg-green-100 rounded-lg shadow-sm">
              {/* date wrapper */}
              <div className="w-full flex items-center justify-between">
                <p className='text-sm'>Posted on: 12/12/2021</p>
                <p className='text-sm flex items-center gap-1'><SlLocationPin /> Lagos</p>
              </div>
              {/* end of date wrapper */}
                {/* item details */}
                <div className="w-full bg-white px-2 py-5 my-2 rounded-lg shadow-sm flex flex-col md:flex-row items-center gap-10">
                  <div className="flex flex-col gap-2">
                    {/* single detail box */}
                    <div className="">
                      <h3 className="">BRAND</h3>
                      <p className="">Apple</p>
                    </div>
                    {/* end of single detail box */}
                    {/* single detail box */}
                    <div className="">
                      <h3 className="">CONDITION</h3>
                      <p className="">Used</p>
                    </div>
                    {/* end of single detail box */}
                    {/* single detail box */}
                    <div className="">
                      <h3 className="">MODEL</h3>
                      <p className="">iPhone 7 Plus</p>
                    </div>
                    {/* end of single detail box */}
                  </div>
                  <div className="flex flex-col gap-2">
                    {/* single detail box */}
                    <div className="">
                      <h3 className="">BRAND</h3>
                      <p className="">Apple</p>
                    </div>
                    {/* end of single detail box */}
                    {/* single detail box */}
                    <div className="">
                      <h3 className="">CONDITION</h3>
                      <p className="">Used</p>
                    </div>
                    {/* end of single detail box */}
                    {/* single detail box */}
                    <div className="">
                      <h3 className="">MODEL</h3>
                      <p className="">iPhone 7 Plus</p>
                    </div>
                    {/* end of single detail box */}
                  </div>
                </div>
                {/* end of item details */}
                {/* poster details */}
                <div className="bg-white p-2">
                  <div className="flex gap-2 mb-4">
                    {/* profile image */}
                    <figure className="w-14 h-14 rounded-full overflow-hidden shadow-md bg-slate-400">
                      <img src={img1} alt="poster profile" draggable="false" loading='lazy' className='w-full h-full' />
                    </figure>
                    {/* end of profile image */}
                    {/* person details */}
                    <div className="">
                      <h3>John Doe</h3>
                      <p className='text-sm'>Member since: 12/12/2021</p>
                    </div>
                    {/* end of person details */}
                  </div>

                  {contactShown ? (
                    <a href={`tel:${number}`} className='text-white px-3 py-1 mt-2 flex items-center gap-1 rounded-sm w-max' style={{
                      background: colors.curiousBlue
                    }}>
                      {number}
                    </a>
                  ) : (
                    <button
                      className='text-white px-3 py-1 mt-2 flex items-center gap-1 rounded-sm'
                      style={{
                        background: colors.shamrock
                      }}
                      onClick={() => setContactShown(true)}
                    >
                      <FaPhoneVolume /> Show contact
                    </button>
                  )}
                  <a
                      href={`https://wa.me/${number}`}
                      target='_blank'
                      rel='noreferrer'
                      className='text-white px-3 py-1 mt-2 flex items-center gap-1 rounded-sm w-max'
                      style={{
                        background: colors.shamrock
                      }}
                    >
                      <SiWhatsapp /> Whatsapp seller
                    </a>
                </div>
                {/* end of poster details */}
                {/* all reviews list */}
                <div className="w-full bg-white p-2 my-2 rounded-lg shadow-sm">
                  <h2 className='text-xl md:2xl font-semibold text-center uppercase'>Reviews</h2>
                  <marquee 
                    behavior="scroll"
                    scrollamount="6"
                    height="200"
                    className='w-full flex items-center gap-2'
                  >
                    <ul className='flex items-center gap-4 w-full'>
                        <li className='w-[12rem] md:w-72 text-center bg-green-200 shadow-sm p-2 rounded-md'>
                          <div className="bg-white p-1">
                            <p className='text-lg text-wrap italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p>
                            <p className='text-sm font-bold text-green-700'>By: John Doe</p>
                          </div>
                        </li>
                        <li className='w-[12rem] md:w-72 text-center bg-green-200 shadow-sm p-2 rounded-md'>
                          <div className="bg-white p-1">
                            <p className='text-lg text-wrap italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p>
                            <p className='text-sm font-bold text-green-700'>By: John Doe</p>
                          </div>
                        </li>
                        <li className='w-[12rem] md:w-72 text-center bg-green-200 shadow-sm p-2 rounded-md'>
                          <div className="bg-white p-1">
                            <p className='text-lg text-wrap italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p>
                            <p className='text-sm font-bold text-green-700'>By: John Doe</p>
                          </div>
                        </li>
                      </ul>
                    </marquee>
                </div>
                {/* end of all reviews list */}
            </div>
            {/* end of details box */}
          </div>
          <div className="bg-green-100 flex-1 p-2 rounded-md shadow-sm max-h-[160vh]">
            <h2 className='text-2xl font-semibold animate__animated animate__rubberBand'>Product name</h2>
            <p className='text-2xl md:text-4xl mt-2 font-bold text-blue-700 animate__animated animate__shakeY animate__delay-1s'>GHC 50</p>
            <p className='text-lg my-2'>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, magni. Laudantium voluptatum nam obcaecati quos neque libero placeat corrupti aut aliquam totam in ipsam, impedit cumque facilis corporis doloremque a.</p>
            <button 
              className='text-white px-3 py-1 mt-2 animate__animated animate__lightSpeedInRight animate__delay-2s' 
              style={{
                background: colors.cinnabar
              }}
              onClick={() => console.log('removed from saved ads')}
            >Unsave</button>
            {/* safety tips */}
            <div className="w-full bg-white my-4 rounded-md shadow-sm">
              <h2 className='text-2xl font-semibold text-center capitalize text-blue-500'>Safety Tips</h2>
              <ul className='list-disc list-inside p-2'>
                <li>Meet seller at a safe public place</li>
                <li>Check the item before you buy</li>
                <li>Pay only after collecting the item</li>
                <li>Don't buy an item without verifying the seller</li>
                <li>Don't pay beforehand if they won't let you move in immediately</li>
              </ul>
            </div>
            {/* end of safety tips */}
            {/* review */}
            <Button
              label={reviewBoxShown ? 'Close review' : 'Write a review'}
              color1={reviewBoxShown ? colors.cinnabar : colors.shamrock}
              color2={reviewBoxShown ? colors.buttercup : colors.curiousBlue}
              onClick={() => setReviewBoxShown(!reviewBoxShown)}
            />
              {/* review box */}
              {reviewBoxShown && <div 
                className="w-full py-2"
              >
                <textarea 
                  placeholder='I like your product...' 
                  className='w-full p-2 my-2 rounded-md shadow-sm h-28'
                  aria-label='write your review in this review box'
                  maxLength={200}
                  id='review-input'
                  ref={reviewInputRef}
                />
                <Button
                  label='send'
                  color1={colors.shamrock}
                  color2={colors.curiousBlue}
                  onClick={() => console.log('submit review')}
                  style={{
                    marginLeft: 'auto',
                    display: 'block',
                    marginRight: "auto"
                  }}
                />
              </div>}
              {/* end of review box */}
            {/* end of review */}
            {/* report */}
            <Button
              label='Report this ad'
              color1={colors.cinnabar}
              color2={colors.buttercup}
              onClick={() => setIsModalOpen(true)}
              style={{
                marginLeft: 'auto',
                marginTop: '2rem',
                marginRight: 10,
              }}
            />
          </div>
        </div>

              {/* similar ads */}
            <div className="w-full bg-white p-2 my-2 rounded-lg shadow-sm">
              <h2 className='text-2xl font-semibold text-center capitalize text-blue-500 my-5'>Similar Ads</h2>
              <div 
                className="w-full flex flex-wrap gap-4 justify-center items-center"
              >
                {/* start */}
                <Link 
                  to='/details?id=2'
                  className="w-[12rem] md:w-[15rem] bg-green-100 p-2 rounded-md shadow-sm"
                >
                  <figure className="w-full h-36 rounded-md overflow-hidden shadow-md bg-slate-200">
                    <img src={img1} alt="product" draggable="false" loading='lazy' className='w-full h-full object-contain' />
                  </figure>
                  <h3 className='text-lg font-semibold text-center'>Product name</h3>
                  <p className='text-lg font-bold text-blue-700 text-center'>GHC 50</p>
                </Link>
                {/* end */}
                {/* start */}
                <Link 
                  to='/details?id=2'
                  className="w-[12rem] md:w-[15rem] bg-green-100 p-2 rounded-md shadow-sm"
                >
                  <figure className="w-full h-36 rounded-md overflow-hidden shadow-md bg-slate-200">
                    <img src={img1} alt="product" draggable="false" loading='lazy' className='w-full h-full object-contain' />
                  </figure>
                  <h3 className='text-lg font-semibold text-center'>Product name</h3>
                  <p className='text-lg font-bold text-blue-700 text-center'>GHC 50</p>
                </Link>
                {/* end */}
                {/* start */}
                <Link 
                  to='/details?id=2'
                  className="w-[12rem] md:w-[15rem] bg-green-100 p-2 rounded-md shadow-sm"
                >
                  <figure className="w-full h-36 rounded-md overflow-hidden shadow-md bg-slate-200">
                    <img src={img1} alt="product" draggable="false" loading='lazy' className='w-full h-full object-contain' />
                  </figure>
                  <h3 className='text-lg font-semibold text-center'>Product name</h3>
                  <p className='text-lg font-bold text-blue-700 text-center'>GHC 50</p>
                </Link>
                {/* end */}
                {/* start */}
                <Link 
                  to='/details?id=2'
                  className="w-[12rem] md:w-[15rem] bg-green-100 p-2 rounded-md shadow-sm"
                >
                  <figure className="w-full h-36 rounded-md overflow-hidden shadow-md bg-slate-200">
                    <img src={img1} alt="product" draggable="false" loading='lazy' className='w-full h-full object-contain' />
                  </figure>
                  <h3 className='text-lg font-semibold text-center'>Product name</h3>
                  <p className='text-lg font-bold text-blue-700 text-center'>GHC 50</p>
                </Link>
                {/* end */}
                {/* start */}
                <Link 
                  to='/details?id=2'
                  className="w-[12rem] md:w-[15rem] bg-green-100 p-2 rounded-md shadow-sm"
                >
                  <figure className="w-full h-36 rounded-md overflow-hidden shadow-md bg-slate-200">
                    <img src={img1} alt="product" draggable="false" loading='lazy' className='w-full h-full object-contain' />
                  </figure>
                  <h3 className='text-lg font-semibold text-center'>Product name</h3>
                  <p className='text-lg font-bold text-blue-700 text-center'>GHC 50</p>
                </Link>
                {/* end */}
                {/* start */}
                <Link 
                  to='/details?id=2'
                  className="w-[12rem] md:w-[15rem] bg-green-100 p-2 rounded-md shadow-sm"
                >
                  <figure className="w-full h-36 rounded-md overflow-hidden shadow-md bg-slate-200">
                    <img src={img1} alt="product" draggable="false" loading='lazy' className='w-full h-full object-contain' />
                  </figure>
                  <h3 className='text-lg font-semibold text-center'>Product name</h3>
                  <p className='text-lg font-bold text-blue-700 text-center'>GHC 50</p>
                </Link>
                {/* end */}
                {/* start */}
                <Link 
                  to='/details?id=2'
                  className="w-[12rem] md:w-[15rem] bg-green-100 p-2 rounded-md shadow-sm"
                >
                  <figure className="w-full h-36 rounded-md overflow-hidden shadow-md bg-slate-200">
                    <img src={img1} alt="product" draggable="false" loading='lazy' className='w-full h-full object-contain' />
                  </figure>
                  <h3 className='text-lg font-semibold text-center'>Product name</h3>
                  <p className='text-lg font-bold text-blue-700 text-center'>GHC 50</p>
                </Link>
                {/* end */}
                {/* start */}
                <Link 
                  to='/details?id=2'
                  className="w-[12rem] md:w-[15rem] bg-green-100 p-2 rounded-md shadow-sm"
                >
                  <figure className="w-full h-36 rounded-md overflow-hidden shadow-md bg-slate-200">
                    <img src={img1} alt="product" draggable="false" loading='lazy' className='w-full h-full object-contain' />
                  </figure>
                  <h3 className='text-lg font-semibold text-center'>Product name</h3>
                  <p className='text-lg font-bold text-blue-700 text-center'>GHC 50</p>
                </Link>
                {/* end */}
                {/* start */}
                <Link 
                  to='/details?id=2'
                  className="w-[12rem] md:w-[15rem] bg-green-100 p-2 rounded-md shadow-sm"
                >
                  <figure className="w-full h-36 rounded-md overflow-hidden shadow-md bg-slate-200">
                    <img src={img1} alt="product" draggable="false" loading='lazy' className='w-full h-full object-contain' />
                  </figure>
                  <h3 className='text-lg font-semibold text-center'>Product name</h3>
                  <p className='text-lg font-bold text-blue-700 text-center'>GHC 50</p>
                </Link>
                {/* end */}
              </div>
            </div>
            {/* end of similar ads */}

        {/* ======================modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title='Report this ad'
        >
          <div className="w-full p-2">
            <textarea
              placeholder='I am reporting this ad because...'
              className='w-full p-2 my-2 rounded-md shadow-sm h-28'
              aria-label='write your report in this report box'
              maxLength={200}
              ref={reportInputRef}
            />
            <Button
              label='send'
              color1={colors.shamrock}
              color2={colors.curiousBlue}
              onClick={() => console.log('submit report')}
              style={{
                marginLeft: 'auto',
                display: 'block',
                marginRight: "auto"
              }}
            />
          </div>
        </Modal>
        {/* end of modal */}
      </main>

      <Footer />
    </>
  )
}

export default DetailsPage