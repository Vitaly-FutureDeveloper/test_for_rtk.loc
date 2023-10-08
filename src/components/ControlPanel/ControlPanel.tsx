import React, {useEffect} from "react";
import styles from "./ControlPanel.module.css";
import {getQuantityBalls} from "../../redux/quantity-balls/quantity-balls-selectors";
import {useDispatch, useSelector} from "react-redux";
import {setBallsQuantityTC} from "../../redux/quantity-balls/quantity-balls-reducer";


const ControlPanel: React.FC = () => {

  const dispatch = useDispatch();

  const quantityBalls = useSelector(getQuantityBalls);

  useEffect(() => {
    console.log(quantityBalls)
  }, [quantityBalls])


  const setSelected = (evt: unknown): void => {
    // @ts-ignore
    dispatch(setBallsQuantityTC(+evt.target.value));
  };


  return (
    <div className={styles.panel} onChange={setSelected}>
      <label>
        <span>Шариков: </span>
        <select name="quantity" value={quantityBalls}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
        </select>
      </label>
    </div>
  )
};

export default React.memo(ControlPanel);