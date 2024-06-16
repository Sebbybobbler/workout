import styles from "./Exercise.module.css";
import { useState } from "react";
function Exercise({ name, expand }) {
    const [isActive, setActive] = useState(expand);
    function handleClick() {
        setActive(!isActive);
        expand = isActive;
    }

    return (
        <>
            <div className={styles.exerciseContainer}>
                <h3>{name}</h3>
                <icon
                    onClick={handleClick}
                    className={`${styles.exerciseExpandIcon} `}
                >
                    {isActive === true ? "-" : "+"}
                </icon>
            </div>

            <div>
                <div
                    className={`${
                        isActive === true
                            ? styles.exerciseGrid
                            : styles.dropdownFalse
                    }`}
                >
                    <div className={styles.weight}>Weight (Kg)</div>
                    <div className={styles.weightInput}>
                        <input type="number" step="0.25"></input>
                    </div>
                    <div className={styles.reps}>Reps</div>
                    <div className={styles.repsInput}>
                        <input type="number" step="0.25"></input>
                    </div>
                    <div className={styles.sets}>Sets</div>
                    <div className={styles.setsInput}>
                        <input type="number" step="0.25"></input>
                    </div>
                    <div className={styles.submitExercise}>
                        <button>Add Exercise</button>
                    </div>
                    <div className={styles.clearExercise}>
                        <button>Clear</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Exercise;
