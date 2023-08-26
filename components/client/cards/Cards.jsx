import React from 'react'
import styles from "./Cards.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Cards = (props) => {
  return (
    <Link href={"/exercise/" + props.id} style={{textDecoration : "none", color : "black"}}>
    <div className={styles.card}>
        <div className="image_container">
            <Image src={props.gif} alt='Workout Image' width={250} height={250}/>
        </div>
        <div className={styles.details_container}>
            <div className={styles.body_part}>
                <p>{props.bodypart}</p>
                <p>{props.equipment}</p>
            </div>
            <div className={styles.exercise_title}>
                <h2>{props.name}</h2>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default Cards