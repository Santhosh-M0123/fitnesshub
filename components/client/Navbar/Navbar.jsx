import React from 'react';
import Link from 'next/link';
import Button from '../Button/Button';
import Styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.brand}>
        <h3>FitnessHub</h3>
      </div>
      <div className={Styles.nav_links}>
        <Link href="/" className={Styles.nav_link}>Home</Link>
        <Link href="/exercise" className={Styles.nav_link}>Exercises</Link>
      </div>
      <div className={Styles.btn}>
        <Button btn_name="Subscribe Now"/>
      </div>
    </div>
  )
}

export default Navbar