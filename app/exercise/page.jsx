import React from "react";
import Cards from "@/components/client/cards/Cards";
import styles from "./page.module.css";

const Exercises = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "45b5abfdb7msh53551f05a69d03cp19d973jsna70f3a59c932",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  const res = await fetch(url,options).then((res) => {
    return res.json()
  });
  let data = res.slice(0, 100);
  return (
    <div className={styles.exercise_all}>
      <div className={styles.all_exercise_container}>
        {data.map((i, index) => {
          return (
            <Cards
              key={i.id}
              id={i.id}
              name={i.name}
              gif={i.gifUrl}
              bodypart={i.bodyPart}
              equipment={i.equipment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Exercises;
