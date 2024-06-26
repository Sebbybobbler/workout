import styles from "./App.module.css";
import Exercise from "./components/Exercise";

function App() {
  return (
    <>
      <header className={styles.header}>
        <h1>Workout</h1>
      </header>
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

export default App;
