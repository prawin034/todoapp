import classes from './allTask.module.css';

import { Fragment } from 'react';
const AllTask = (props) => {
  const currDate = props.items.date;

  // Converts date like object into Date Object
  const dt = new Date(currDate);

  // console.log(id);

  // if (typeof dt === 'object' && dt !== null && 'getFullYear' in dt) {
  //   // Print the full year
  //   console.log(dt.getFullYear());
  // } else {
  //   console.log('Invalid Date Object');
  // }

  const DELTEHANDLER = () => {
    const id = props.items.id;

    props.ondelete(id);
  };

  return (
    <Fragment>
      <div className={classes.gridview}>
        <div className={classes.container}>
          <div className={classes.containerh1}>{props.items.task}</div>
          <div className={classes.contentbox}>
            <p>{props.items.content}</p>
            <p>{dt.getFullYear()}</p>

            <button
              className={classes.button}
              onClick={DELTEHANDLER}
              type="button"
            >
              DELETE TASK
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AllTask;
