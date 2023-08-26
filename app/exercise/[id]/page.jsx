import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { IoIosFitness } from "react-icons/io";
import { BiTargetLock } from "react-icons/bi";
import { IoFitnessSharp } from "react-icons/io5";

const PageId = async ({params}) => {
  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${params.id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "45b5abfdb7msh53551f05a69d03cp19d973jsna70f3a59c932",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  let data;
  try{
    let res = await fetch(url,options).then(res => res.json());
    data = res;
  }catch(e){
    throw new Error("Something went wrong");
  }
  return (
    <div className={styles.exercise_by_id}>
      <div className={styles.id_exercise_container}>
        <div className={styles.container_left}>
          <Image
            src={data.gifUrl}
            width={500}
            height={500}
            alt="image"
            className={styles.img}
          />
        </div>
        <div className={styles.container_right}>
          <h1>{data.name}</h1>
          <div className={styles.exercise_type}>
            <div className={styles.type_container}>
              <IoIosFitness className={styles.type_icon} />
              <p>{data.equipment}</p>
            </div>
            <div className={styles.type_container}>
              <BiTargetLock className={styles.type_icon} />
              <p>{data.target}</p>
            </div>
            <div className={styles.type_container}>
              <IoFitnessSharp className={styles.type_icon} />
              <p>{data.bodyPart}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageId;
