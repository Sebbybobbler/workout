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
                <Exercise name="Military Press" expand={false} />
                <Exercise name="Military Press" expand={false} />
                <Exercise name="Military Press" expand={false} />
                <Exercise name="Military Press" expand={false} />
                <Exercise name="Military Press" expand={false} />
            </div>
        </>
    );
}

export default App;
