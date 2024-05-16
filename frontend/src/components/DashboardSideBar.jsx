import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCog, } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

// custom imports
import colors from '../config/colors'
import Accordion from './Accordion'
import AccordionSection from './AccordionSection'
import Button from './Button'
import Modal from './Modal'
import { useToken } from '../context/TokenProvider'

const DashboardSideBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {logout} = useToken()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        setIsModalOpen(false)
        navigate('/')
    }

  return (
    <>
        <aside className='rounded-md shadow-sm w-1/2 p-2' style={{
            background: colors.shamrock
        }}>
            <div className="">
                {/* user details box */}
                <div className="w-full bg-white p-1 rounded-md shadow-md" tabIndex="0">
                    <div className="w-full flex items-center gap-2 py-1">
                        <FontAwesomeIcon icon={faUser} className='text-blue-500' />
                        <h4 className='uppercase text-lg font-bold'>Jone doe</h4>
                    </div>
                    <h4 className='text-sm tracking-wide text-blue-500'>nuz@sorzime.af</h4>
                    <div className="">
                        <p>created 12/12/1222</p>
                        <p>ads: 2</p>
                    </div>
                </div>
                {/* end of user details box */}
                {/* user actions */}
                <div className="w-full bg-white p-1 mt-4 rounded-md shadow-md">
                    <Accordion>
                        <AccordionSection
                            header={
                                <div className='flex items-center gap-2 cursor-pointer' tabIndex="0">
                                    <FontAwesomeIcon icon={faCog} className='text-blue-500' />
                                    <h4 className='uppercase text-lg font-bold'>Settings</h4>
                                </div>
                            }
                            body={
                                <ul className='p-[2px]'>
                                    <li className='text-sm hover:bg-blue-100 focus-visible:bg-blue-100 p-[2px] rounded-sm mb-[2px]'>
                                        <Link className='block w-full'>Change email</Link>
                                    </li>
                                    <li className='text-sm hover:bg-blue-100 focus-visible:bg-blue-100 p-[2px] rounded-sm mb-[2px]'>
                                        <Link className='block w-full'>Change password</Link>
                                    </li>
                                    <li className='text-sm hover:bg-blue-100 focus-visible:bg-blue-100 p-[2px] rounded-sm'>
                                        <Link className='block w-full'>Change username</Link>
                                    </li>
                                </ul>
                            }
                        />
                    </Accordion>
                </div>
                {/* end of user actions */}
                <Button
                    label="Logout"
                    color1={colors.cinnabar}
                    color2={colors.buttercup} 
                    style={{
                        width: '100%',
                        marginTop: '1rem',
                        borderRadius: '0.5rem'
                    }}
                    onClick={() => setIsModalOpen(true)}
                />
            </div>
        </aside>

        {/* modal for logout */}
        <Modal
            title="Logout"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
        >
            <p>Are you sure you want to logout?</p>
            <div className='flex items-center justify-center gap-4 mt-4'>
                <Button
                    label="Yes"
                    color1={colors.buttercup}
                    color2={colors.cinnabar} 
                    style={{
                        width: '100px',
                        borderRadius: '0.5rem'
                    }}
                    onClick={handleLogout}
                />
                <Button
                    label="No"
                    color1={colors.curiousBlue}
                    color2={colors.shamrock} 
                    style={{
                        width: '100px',
                        borderRadius: '0.5rem'
                    }}
                    onClick={() => setIsModalOpen(false)}
                />
            </div>
        </Modal>
    </>
  )
}

export default DashboardSideBar