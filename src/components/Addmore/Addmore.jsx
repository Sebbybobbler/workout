import styles from "../../assets/css/Addmore.module.css";
import { useState } from "react";

function Addmore() {
    const [dropDownVisible,setDropDownVisible]=useState(false);

    function handleClick(){
        setDropDownVisible(!dropDownVisible);
    }

  return (
    <div className={`${styles.addmoreContainer}${`${dropDownVisible ? "" : styles.hidden}`}`}>
        <div className={styles.addmorePlus} onClick={handleClick}>+</div>
    </div>
  )
}

export default Addmore;