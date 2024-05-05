import React from 'react'
import IconButton from './IconButton'
import { FcPhoneAndroid } from "react-icons/fc";
import { FaComputer, FaShirt } from "react-icons/fa6";
import colors from '../config/colors';

function MobileCategoryBar({style, ...otherProps}) {
  return (
    <aside 
        role='navigation' 
        className='md:hidden sticky top-[58px] z-10 bg-white shadow-md h-36 overflow-y-auto w-full p-2'
        style={style}
        {...otherProps}
    >
        <h2 className='text-base text-center mb-2'>Categories</h2>

        <ul className='flex flex-wrap justify-center gap-5'>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Phones'
                    Icon={FcPhoneAndroid}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                        whitespace: 'wrap',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Computers'
                    Icon={FaComputer}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Clothes'
                    Icon={FaShirt}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Phones'
                    Icon={FcPhoneAndroid}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                        whitespace: 'wrap',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Computers'
                    Icon={FaComputer}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Clothes'
                    Icon={FaShirt}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Phones'
                    Icon={FcPhoneAndroid}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                        whitespace: 'wrap',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Computers'
                    Icon={FaComputer}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Clothes'
                    Icon={FaShirt}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Phones'
                    Icon={FcPhoneAndroid}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                        whitespace: 'wrap',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Computers'
                    Icon={FaComputer}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Clothes'
                    Icon={FaShirt}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Phones'
                    Icon={FcPhoneAndroid}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                        whitespace: 'wrap',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Computers'
                    Icon={FaComputer}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Clothes'
                    Icon={FaShirt}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Phones'
                    Icon={FcPhoneAndroid}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                        whitespace: 'wrap',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Computers'
                    Icon={FaComputer}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Clothes'
                    Icon={FaShirt}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Phones'
                    Icon={FcPhoneAndroid}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                        whitespace: 'wrap',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Computers'
                    Icon={FaComputer}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                    }}
                />
            </li>
            <li className='bg-gray-200 p-2 rounded-md'>
                <IconButton
                    label='Clothes'
                    Icon={FaShirt}
                    bgColor={colors.curiousBlue}
                    infoStyle={{
                        opacity: 1,
                        visibility: 'visible',
                        left: '50%',
                        top: '95%',
                        transform: 'translateX(-50%)',
                    }}
                />
            </li>
        </ul>
    </aside>
  )
}

export default MobileCategoryBar