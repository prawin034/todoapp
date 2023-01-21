import React from 'react';
import classes from './Filter.module.css';
const FilterTask = (props) => {
  const filterchangeHandler = (event) => {
    const year = event.target.value;
    props.onfilterchange(year);
  };
  return (
    <div className={classes.Filtercomponent}>
      <div>
        <label className={classes.filterlabel}>FILTER BY YEAR</label>
      </div>
      <div className={classes.Filter_dropdown}>
        <select value={props.selected} onChange={filterchangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
};

export default FilterTask;
