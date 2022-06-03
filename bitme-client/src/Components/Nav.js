import React from 'react';
import { Link } from 'react-router-dom';
import {FiMenu} from 'react-icons/fi'
import {CgClose} from 'react-icons/cg'
const Nav = () => {
    return (
    <div class="navbar py-5 px-0 lg:px-20 text-white">
    <div class="navbar-start">
      <Link to='/' class="btn btn-ghost normal-case text-xl">
      <img src="https://i.ibb.co/jLGStSq/image.png" alt="" />
      </Link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li><Link to='/trade' className='hover:text-neutral focus:bg-transparent'>Trade</Link></li>
        <li><Link to='/NFT' className='hover:text-neutral focus:bg-transparent'>NFT</Link></li>
        <li><Link to='/Earn' className='hover:text-neutral focus:bg-transparent'>Earn</Link></li>
        <li><Link to='/Win' className='hover:text-neutral focus:bg-transparent'>Win</Link></li>
        <li><Link to='/Info' className='hover:text-neutral focus:bg-transparent'>Info</Link></li>
      </ul>
    </div>
    <div class="navbar-end">
        <div className='hidden md:block'>
            <Link to='/info' class="btn rounded-full border-0 text-white font-bold bg-gradient-to-r from-[#1d85ff] to-[#1daeff] hover:from-[#1daeff] hover:to-[#1d85ff]">
                Connect Wallet
            </Link>
        </div>


      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost lg:hidden swap swap-rotate hover:bg-transparent">
            {/* <!-- this hidden checkbox controls the state --> */}
            <input type="checkbox" />
            {/* <!-- hamburger icon --> */}
            <FiMenu className="swap-off fill-current"  size={40}/>
            {/* <!-- close icon --> */}
            {/* <CgClose  className="swap-on fill-current" size={40} /> */}
            <FiMenu  className="swap-on fill-current" size={40} />
        </label>
        <ul tabindex="0" class=" menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
          <li><a>Trade</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </div>
  </div>
    );
};

export default Nav;