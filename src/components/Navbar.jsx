import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@/components/styles/Navbar.module.css';

function Navbar() {
  return (
    <section id='header' className={styles.nav_container}>
      <img src='img/logo-ALTA.png' alt='logo-alta' className='md:mx-32 w-28' />
      <nav className={styles.nav_items}>
        <Link to='/' className='hover:text-primary-500'>
          Home
        </Link>
        <Link to='/about' className='hover:text-primary-500'>
          About
        </Link>
        <a href='/news ' className='hover:text-primary-500'>
          News
        </a>
        <Link id='contact' to='/contact_us' className='hover:text-primary-500'>
          Contact
        </Link>
      </nav>
    </section>
  );
}

export default Navbar;
