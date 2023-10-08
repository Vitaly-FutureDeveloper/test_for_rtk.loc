import React from "react";
import styles from "./ControlPanel.module.css";


const ControlPanel: React.FC = () => {
  return (
    <div className={styles.panel}>
      <label>
        <span>Шариков: </span>
        <select name="quantity">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
      </label>
    </div>
  )
};

export default React.memo(ControlPanel);