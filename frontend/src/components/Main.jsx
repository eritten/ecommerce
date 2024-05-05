import React from 'react'

// custom imports
import Sidebar from './Sidebar'
import MobileCategoryBar from './MobileCategoryBar'
import Card from './Card'
import colors from '../config/colors'

function Main() {
  return (
    <main className='py-5 md:py-10 px-2'>
        <div className="container-wrapper">
            {/* flex container that divides the main into 2*/}
            <div className="flex flex-col md:flex-row">
                {/* categories */}
                <Sidebar />
                <MobileCategoryBar />
                {/* end of categories */}

                {/* main content */}
                <section role='region' className='min-h-screen md:w-[85%]'>
                    <div className="px-2 py-5">
                        <h2 className='text-center mb-5 text-2xl capitalize' style={{
                            color: colors.curiousBlue
                        }}>Trending ads</h2>
                        <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                            <li>
                                <Card
                                    name='Adidas shoes'
                                    price='$50'
                                    image='https://picsum.photos/id/1/200/300'
                                />
                            </li>
                            <li>
                                <Card
                                    name='Nike shoes'
                                    price='$60'
                                    image='https://picsum.photos/id/2/200/300'
                                />
                            </li>
                            <li>
                                <Card
                                    name='Puma shoes'
                                    price='$70'
                                    image='https://picsum.photos/id/3/200/300'
                                />
                            </li>
                            <li>
                                <Card
                                    name='Reebok shoes'
                                    price='$80'
                                    image='https://picsum.photos/id/4/200/300'
                                />
                            </li>
                            <li>
                                <Card
                                    name='Adidas shoes'
                                    price='$50'
                                    image='https://picsum.photos/id/5/200/300'
                                />
                            </li>
                            <li>
                                <Card
                                    name='Nike shoes'
                                    price='$60'
                                    image='https://picsum.photos/id/6/200/300'
                                />
                            </li>
                            <li>
                                <Card
                                    name='Puma shoes'
                                    price='$70'
                                    image='https://picsum.photos/id/7/200/300'
                                />
                            </li>
                            <li>
                                <Card
                                    name='Reebok shoes'
                                    price='$80'
                                    image='https://picsum.photos/id/8/200/300'
                                />
                            </li>
                            <li>
                                <Card
                                    name='Adidas shoes'
                                    price='$50'
                                    image='https://picsum.photos/id/9/200/300'
                                />
                            </li>
                            <li>
                                <Card
                                    name='Nike shoes'
                                    price='$60'
                                    image='https://picsum.photos/id/10/200/300'
                                />
                            </li>
                            <li>
                                <Card
                                    name='Puma shoes'
                                    price='$70'
                                    image='https://picsum.photos/id/11/200/300'
                                />
                            </li>
                            <li>
                                <Card
                                    name='Reebok shoes'
                                    price='$80'
                                    image='https://picsum.photos/id/12/200/300'
                                />
                            </li>
                            <li>
                                <Card
                                    name='Adidas shoes'
                                    price='$50'
                                    image='https://picsum.photos/id/13/200/300'
                                />
                            </li>
                            <li>
                                <Card
                                    name='Nike shoes'
                                    price='$60'
                                    image='https://picsum.photos/id/14/200/300'
                                />
                            </li>
                            <li>
                                <Card
                                    name='Puma shoes'
                                    price='$70'
                                    image='https://picsum.photos/id/15/200/300'
                                />
                            </li>
                            <li>
                                <Card
                                    name='Reebok shoes'
                                    price='$80'
                                    image='https://picsum.photos/id/16/200/300'
                                />
                            </li>
                        </ul>
                    </div>
                </section>
                {/* end of main content */}
            </div>
            {/* end of flex container that divides the main into 2*/}
        </div>
    </main>
  )
}

export default Main