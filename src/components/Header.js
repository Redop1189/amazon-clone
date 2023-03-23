import React from 'react'
import Image from 'next/image'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
        {/* Top nav */}
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            <div className='relative mt-2 flex items-center flex-grow sm:flex-grow-0 mr-3'>
                {/* <Image
                    src="https://links.papareact.com/f90"
                    width={125}
                    height={35}
                    objectFit='contain'
                    className='cursor-pointer'
                /> */}
                <img style={{ width: 125, height: 35, objectFit: 'contain' }} src="https://links.papareact.com/f90" alt="" />
                <p className='text-white absolute left-28 top-0'>.in</p>
            </div>

            <div className='hidden lg:inline text-white items-center text-xs mx-6 whitespace-nowrap'>
              <div className='link flex'>
                <LocationMarkerIcon className='h-5 mt-4' />
                <div className='pl-1'>  
                <p>Deliver to</p>
                <p className='font-bold md:text-sm'>Select your address</p>
                </div>
              </div>
            </div>

            {/* Search  */}
            <div className='hidden sm:flex items-center h-10 rounded-md cursor-pointer flex-grow bg-yellow-400 hover:bg-yellow-500'>
              <p className='link p-3 pr-6 text-center text-xs bg-gray-200 rounded-l-md'>All</p>
              <input className='p-2 h-full w-6 flex-grow flex-shrink focus:outline-none px-4' placeholder="Search Amazon.in" type="text" />
              <SearchIcon className='h-12 p-4' />
            </div>

            {/* Right  */}
            <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
              <div className='hidden md:inline link'>
                <p className='font-bold md:text-sm mt-3'>EN</p>
              </div>
              <div className='link'>
                <p>Hello, sign in</p>
                <p className='font-bold md:text-sm'>Account & Lists</p>
              </div>
              <div className='link'>
                <p>Returns</p>
                <p className='font-bold md:text-sm'>& Orders</p>
              </div>
              <div className='relative link flex items-center'>
                <span className='absolute top-0 right-0 md:right-6 h-4 w-4 bg-yellow-400 rounded-full text-center text-amazon_blue font-bold'>0</span>
                <ShoppingCartIcon className='h-10' />
                <p className='hidden md:inline font-bold md:text-sm mt-2'>Cart</p>
              </div>
            </div>

        </div>

        {/* Bottom nav  */}
        <div className='flex items-center space-x-4 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
          <p className='link flex items-center'>
            <MenuIcon className='h-6 mr-1' />
            All
          </p>
          <p className='link'>Prime Video</p>
          <p className='link'>Best Sellers</p>
          <p className='link'>Mobiles</p>
          <p className='link hidden lg:inline-flex'>Customer Service</p>
          <p className='link hidden lg:inline-flex'>Today's Deals</p>
          <p className='link hidden lg:inline-flex'>Electronics</p>
          <p className='link hidden lg:inline-flex'>Prime</p>
          <p className='link hidden lg:inline-flex'>Amazon Pay</p>
          <p className='link hidden lg:inline-flex'>New Releases</p>
          <p className='link hidden lg:inline-flex'>Fashion</p>
          <p className='link hidden xl:inline-flex'>Home & Kitchen</p>
          <p className='link hidden xl:inline-flex'>Beauty & Personal Care</p>
          <p className='link hidden xl:inline-flex'>Computers</p>
        </div>
    </header>
  )
}

export default Header