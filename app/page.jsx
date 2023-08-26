import styles from "./page.module.css";
import Subheading from "@/components/client/SubHeading/Subheading";
import Cards from "@/components/client/cards/Cards";
import Viewall from "@/components/client/cards/Viewall";
import Image from "next/image";
export default async function Home() {
  const url = "https://exercisedb.p.rapidapi.com/exercises";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "45b5abfdb7msh53551f05a69d03cp19d973jsna70f3a59c932",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options).then((res) => 
    res.json()
  );
  let data = res.slice(0, 10);
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.home_content}>
          <Subheading heading="Meet a people and stay healthy" />
          <h2>
            "Unlock Your Health Potential with Zym:"<br></br>Where{" "}
            <span className={styles.span_unique}>Fitness</span> Meets Fun!
          </h2>
        </div>
      </main>
      <section className={styles.about}>
        <div className={styles.abt_left}>
          <div className={styles.abt_title}>
            <Subheading heading="Be Fit" />
            <h1>Say Fit Stay Fit</h1>
            <p>
              "Unlock Your Potential: Transform Your Body and Ignite<br></br> Your
              Passion for Fitness with Our Empowering Online Platform.<br></br> Embrace
              the Journey, Embody Change, and Elevate Your Life, One Workout at
              a Time!"
            </p>
          </div>
        </div>
        <div className={styles.abt_right}>
          <Image
            src="/assest/abt_4.jpg"
            alt="About image"
            width={200}
            height={200}
            className={styles.abt_img}
          />
          <Image
            src="/assest/abt_2.jpg"
            alt="About image"
            width={200}
            height={200}
            className={styles.abt_img}
          />
          <Image
            src="/assest/abt_3.jpg"
            alt="About image"
            width={200}
            height={200}
            className={styles.abt_img}
          />
          <Image
            src="/assest/abt.jpg"
            alt="About image"
            width={200}
            height={200}
            className={styles.abt_img}
          />
        </div>
      </section>
      <section className={styles.exercise_list}>
        <div className={styles.exercise_list_title}>
          <Subheading heading="Be healthy" />
          <h2>Daily Exercises</h2>
        </div>
        <div className={styles.exercise_list_card}>
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
          <Viewall />
        </div>
      </section>
    </div>
  );
}
