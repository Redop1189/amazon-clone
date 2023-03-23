import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div>
        <div className='py-4 bg-gray-100'>
            <div className='py-4 flex flex-col content-center border-t border-b border-gray-300'>
                <p className='text-center text-sm mb-2'>See personalized recommendations</p>
                <button className='mx-auto w-60 h-8 button'>Sign in</button>
                <p className='flex text-xs mx-auto mt-2'>New customer?<p className='link pl-2'> Start here.</p></p>
            </div>
        </div>
        <div className='py-3 bg-amazon_blue-extraLight text-white flex content-center text-sm cursor-pointer'>
            <p className='mx-auto'>Back to Top</p>
        </div>

        <div className=' bg-amazon_blue-light text-white grid grid-flow-row-dense md:grid-flow-col grid-cols-4 py-10 px-6 md:px-30 lg:px-40 xl:px-80'>
            <div>
                <p className='text-sm font-bold'>Get to Know Us</p>
                <p className='text-sm link'>About Us</p>
                <p className='text-sm link'>Careers</p>
                <p className='text-sm link'>Press Releases</p>
                <p className='text-sm link'>Amazon Science</p>
            </div>
            <div>
                <p className='text-sm font-bold'>Connect with Us</p>
                <p className='text-sm link'>Facebook</p>
                <p className='text-sm link'>Twitter</p>
                <p className='text-sm link'>Instagram</p>
            </div>
            <div>
                <p className='text-sm font-bold'>Make Money with Us</p>
                <p className='text-sm link'>Sell on Amazon</p>
                <p className='text-sm link'>Protect and Build Your Brand</p>
                <p className='text-sm link'>Become an Affiliate</p>
                <p className='text-sm link'>Fulfilment by Amazon</p>
                <p className='text-sm link'>Amazon Pay on Merchants</p>
            </div>
            <div>
                <p className='text-sm font-bold'>Let Us Help You</p>
                <p className='text-sm link'>Your Account</p>
                <p className='text-sm link'>Returns Centre</p>
                <p className='text-sm link'>100% Purchase Protection</p>
                <p className='text-sm link'>Help</p>
            </div>
        </div>

        <div className='bg-amazon_blue-light flex justify-center py-8 border-t border-amazon_blue-border'>
            {/* <Image 
            src='https://links.papareact.com/f90'
            width={100}
            height={30}
            objectFit='contain'
            className='cursor-pointer'
            /> */}
            <img style={{ width: 125, height: 35, objectFit: 'contain' }} src="https://links.papareact.com/f90" alt="" />
        </div>

        <div className='bg-amazon_blue text-white text-xs pt-6 pb-8 flex flex-col items-center'>
            <ul className='flex pb-1'>
                <li className='pr-4 link'>Conditions of Use & Sale</li>
                <li className='pr-4 link'>Privacy Notice</li>
                <li className='pr-4 link'>Interest-Based Ads</li>
            </ul>
            <p className='pb-1'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
            <p>Amazon Clone Created By Prathamesh Pawar.</p>
        </div>

    </div>
  )
}

export default Footer