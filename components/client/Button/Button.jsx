"use client";
import {toast} from "react-toastify";
import Style from "./Button.module.css";
const Button = (props) => {
  return (
    <div className={Style.button} onClick={() => toast.warn("Sorry this service is not available now!!")}>
        {props.btn_name}
    </div>
  )
}

export default Button