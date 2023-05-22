import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => (
  <header className="container flex items-center justify-between mx-auto mt-4 pb-6 border-b-2">
    <div className="flex items-center gap-4">
      <a href="/">
        <img width={50} src={logo} alt="logo" />
      </a>
      <span className="text-3xl font-semibold">space travelers&apos; hub</span>

    </div>
    <nav className="flex gap-4 text-blue-400">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/missions">Missions</NavLink>
      <span className="w-[1px] h-[24px] bg-gray-400" />
      <NavLink to="/myprofile">My profile</NavLink>
    </nav>
  </header>
);

export default Navbar;
