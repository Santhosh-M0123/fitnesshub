import React from 'react'
import {AiOutlineDoubleRight} from "react-icons/ai"
import styles from "./Cards.module.css";
import Link from 'next/link';

const Viewall = () => {
  return (
    <div className={styles.viewall}>
        <Link href="/exercise" style={{textDecoration: "none", color : "black"}}>
        <div className={styles.link}>
        <AiOutlineDoubleRight className={styles.icon}/>
        <p>View all exercises</p>
        </div>
        </Link>
    </div>
  )
}

export default Viewall