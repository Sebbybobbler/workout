/* eslint-disable react/prop-types */
import styles from "../../assets/css/Exercise.module.css";
import { useState } from "react";
function Exercise({ name, expand }) {
  const [weightValue, setWeightValue] = useState("");
  const [repValue, setRepValue] = useState("");
  const [setsValue, setSetsValue] = useState("");
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

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch(`http://localhost:3001/sessions/5`, {
      method: "POST",
      body: JSON.stringify({
        weight: weightValue,
        reps: repValue,
        sets: setsValue,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    handleClear();
  }

  return (
    <>
      <div className={styles.exerciseContainer}>
        <h3>{name}</h3>
        <icon onClick={handleClick} className={`${styles.exerciseExpandIcon} `}>
          {isActive === true ? "-" : "+"}
        </icon>
      </div>

      <div>
        <div
          className={`${
            isActive === true ? styles.exerciseGrid : styles.dropdownFalse
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
            <button onClick={handleSubmit}>Add Exercise</button>
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
