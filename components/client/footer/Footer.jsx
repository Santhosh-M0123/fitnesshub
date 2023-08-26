import React from 'react'
import styles from "./Footer.module.css";
import Subheading from '../SubHeading/Subheading';
import Button from '../Button/Button';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_container}>
            <div className={styles.footer_title}>
                <Subheading heading="Be in update with us"/>
                <h1>Subscribe to Newsletter</h1>
            </div>
            <div className={styles.footer_input}>
                <input type="email" name="email" id="email" placeholder='Enter your Email' />
                {/* <div className={styles.btn_group}>
                    Join
                </div> */}
                <Button btn_name="Join now"/>
            </div>
        </div>
        <div className={styles.developer_name}>
            <p>Developed by Santhosh &#128062;</p>
        </div>
    </div>
  )
}

export default Footer