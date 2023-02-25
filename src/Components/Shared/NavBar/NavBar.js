import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/musculo.png';

const NavBar = () => {
    const menuItems = <React.Fragment>
        <li><Link to='/' className='text-white'>Home</Link></li>
        <li><Link to='/login' className='text-white'>Login</Link></li>
        <li><Link className='text-white'>Blog</Link></li>
    </React.Fragment>
    return (
        <div className="navbar" style={{ background: '#7b7b7b' }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img src={img} alt="" className='w-16' />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn">Get started</Link>
            </div>
        </div>
    );
};

export default NavBar;