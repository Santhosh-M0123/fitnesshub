"use client"
import styles from "./loading.module.css";
import {Bars} from "react-loader-spinner";

export default function Loading() {
    return <div className={styles.loaders}>
        <Bars
    height="100"
    width="100"
    color="rgb(55, 37, 218)"
    ariaLabel="bars-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
    </div>
}