import React, { Fragment, useEffect, useState } from 'react';
import FilterTask from '../FILTER/FilterTask';
import { useHistory } from 'react-router-dom';
import AllTask from './allTask';
import classes from './AllTaskfile.module.css';

const AllTaskfile = (props) => {
  const [item, setitem] = useState([]);
  const history = useHistory();
  const [filter, setfilter] = useState('2023');

  useEffect(() => {
    fetch('https://todo-app-887f0-default-rtdb.firebaseio.com/SEND.json')
      .then((res) => res.json())
      .then((data) => {
        const loadedTasks = [];

        for (const key in data) {
          loadedTasks.push({
            id: key,
            task: data[key].task,
            content: data[key].content,
            date: data[key].date,
          });
        }

        setitem(loadedTasks);
      });
  }, [item]);

  const route = () => {
    history.push('/newTask');
  };

  const filterchange = (filtervalue) => {
    setfilter(filtervalue);
  };

  const filterbyYear = item.filter((year) => {
    const currDate = year.date;
    const dt = new Date(currDate);
    return dt.getFullYear().toString() === filter;
  });

  let tasklist = (
    <div className={classes.addtask}>
      <h2 className={classes.h2}>NO DATA FOUND ADD SOME TASK..!</h2>;
      <button className={classes.button} onClick={route}>
        ADD TASK
      </button>
    </div>
  );

  //delete task

  if (item.length > 0) {
    tasklist = (
      <ul>
        {filterbyYear.length > 0 &&
          filterbyYear.map((item) => <AllTask items={item} key={item.id} />)}
      </ul>
    );
  }

  return (
    <Fragment>
      <FilterTask selected={filter} onfilterchange={filterchange} />
      {filterbyYear.length === 0 && (
        <div className={classes.addtask}>
          <h2 className={classes.h2}>NO TASKS FOUND IN THIS YEAR</h2>;
          <button className={classes.button} onClick={route}>
            ADD TASK
          </button>
        </div>
      )}
      <div className={classes.box}>{tasklist}</div>
    </Fragment>
  );
};

export default AllTaskfile;
