import styles from "./Exercise.module.css";
import { useState } from "react";
function Exercise({ name, expand }) {
    const [weightValue, setWeightValue] = useState(null);
    const [repValue, setRepValue] = useState(null);
    const [setsValue, setSetsValue] = useState(null);
    const [isActive, setActive] = useState(expand);
    function handleClick() {
        setActive(!isActive);
        expand = isActive;
    }

    function handleChangeWeight(e) {
        setWeightValue(e.target.value);
    }
    function handleChangeReps(e) {
        setRepValue(e.target.value);
    }
    function handleChangeSets(e) {
        setSetsValue(e.target.value);
    }

    function handleClear() {
        setWeightValue("");
        setRepValue("");
        setSetsValue("");
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
                        <input
                            type="number"
                            step="0.25"
                            value={weightValue}
                            onChange={handleChangeWeight}
                        ></input>
                    </div>
                    <div className={styles.reps}>Reps</div>
                    <div className={styles.repsInput}>
                        <input
                            type="number"
                            step="0.25"
                            value={repValue}
                            onChange={handleChangeReps}
                        ></input>
                    </div>
                    <div className={styles.sets}>Sets</div>
                    <div className={styles.setsInput}>
                        <input
                            type="number"
                            step="0.25"
                            value={setsValue}
                            onChange={handleChangeSets}
                        ></input>
                    </div>
                    <div className={styles.submitExercise}>
                        <button>Add Exercise</button>
                    </div>
                    <div className={styles.clearExercise}>
                        <button onClick={handleClear}>Clear</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Exercise;
