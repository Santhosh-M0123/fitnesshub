import React from 'react'
import styles from "./Subheading.module.css"

const Subheading = (props) => {
  return (
    <div className={styles.sub_heading}>
        <p></p>
        <span>{props.heading}</span>
    </div>
  )
}

export default Subheading