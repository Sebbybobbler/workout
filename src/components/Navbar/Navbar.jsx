import { NavLink } from "react-router-dom";
import styles from "../../assets/css/Navbar.module.css";
function Navbar() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <ul>
          <li>
            <NavLink className={styles.navlink} to="/">Workout</NavLink>
          </li>
          <li>
            <NavLink className={styles.navlink} to="sessions">History</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
