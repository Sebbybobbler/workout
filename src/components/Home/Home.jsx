import styles from "../../assets/css/Home.module.css";
import Exercise from "../Exercise/Exercise";

function Home() {
  return (
    <>
      <div className={styles.exercisesContainer}>
        <Exercise name="DB Bench Press" expand={false} />
        <Exercise name="Back Squat" expand={false} />
        <Exercise name="Military Press" expand={false} />
        <Exercise name="Romanian Deadlift" expand={false} />
        <Exercise name="Preacher Curl" expand={false} />
        <Exercise name="Lat Pulldown" expand={false} />
        <Exercise name="Zottman Curls" expand={false} />
        <Exercise name="Lat DB Raises" expand={false} />
      </div>
    </>
  );
}

export default Home;
