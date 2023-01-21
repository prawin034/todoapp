import UseHooks from '../../hooks/Usehooks';
import classes from './newTask.module.css';
import { useState, Fragment } from 'react';
import { Prompt, useHistory } from 'react-router-dom';

const NewTask = (props) => {
  const [formfocused, setformfocused] = useState(false);
  const history = useHistory();
  const formfocusedhandler = () => {
    setformfocused(true);
  };

  const focusmessage = 'ARE YOU SURE YOU WANT TO EXIT THE FORM PAGE';
  //TASK NAME HOOK
  const {
    value: Taskname,
    isvalid: enteredTaskIsValid,
    invalid: enteredTaskInvalid,
    valueNameHandler: taskNameHandler,
    blur: TaskBlur,
    globalreset: TaskReset,
  } = UseHooks((data) => data.trim() !== '');
  const {
    value: contentName,
    isvalid: enteredcontentIsValid,
    invalid: enteredcontentInvalid,
    valueNameHandler: contentNameHandler,
    blur: contentBlur,
    globalreset: contentReset,
  } = UseHooks((data) => data.trim() !== '');

  const {
    value: date,
    isvalid: entereddateIsValid,
    invalid: entereddateInvalid,
    valueNameHandler: dateHandler,
    blur: dateBlur,
    globalreset: dateReset,
  } = UseHooks((data) => data.trim() !== '');

  let formvalid = false;
  if (enteredTaskIsValid && enteredcontentIsValid && entereddateIsValid) {
    formvalid = true;
  }

  const submitformhandler = (event) => {
    event.preventDefault();

    history.push('/allTasks');

    if (!enteredTaskIsValid && !enteredcontentIsValid && !entereddateIsValid) {
      return;
    }

    const data = {
      task: Taskname,
      content: contentName,
      date: date,
    };

    console.log(data);

    props.onsendData(data);

    TaskReset();
    contentReset();
    dateReset();
  };

  const taskinvalidclass = enteredTaskInvalid
    ? 'form-control invalid'
    : 'form-control ';

  const contentinvalidclass = enteredcontentInvalid
    ? 'form-control invalid'
    : 'form-control ';

  const dateinvalidclass = entereddateInvalid
    ? 'form-control invalid'
    : 'form-control ';

  return (
    <Fragment>
      <Prompt when={formfocused} message={focusmessage} />
      <form
        onFocus={formfocusedhandler}
        onSubmit={submitformhandler}
        className={classes.card}
      >
        <div className={taskinvalidclass}>
          <label htmlFor="name">TASKNAME</label>
          <input
            onChange={taskNameHandler}
            value={Taskname}
            onBlur={TaskBlur}
            type="text"
            id="name"
          />
          {enteredTaskInvalid && (
            <p className={classes.error}>TASK MUST NOT BE EMPTY</p>
          )}
        </div>
        <div className={contentinvalidclass}>
          <label htmlFor="text">CONTENT</label>
          <input
            onChange={contentNameHandler}
            value={contentName}
            onBlur={contentBlur}
            type="text"
            id="text"
          />
          {enteredcontentInvalid && (
            <p className={classes.error}>CONTENT MUST NOT BE EMPTY</p>
          )}
        </div>
        <div className={dateinvalidclass}>
          <label htmlFor="password">DATE</label>
          <input
            onChange={dateHandler}
            onBlur={dateBlur}
            value={date}
            type="date"
            min="2018-01-01"
            max="2026-10-30"
            id="password"
          />
          {entereddateInvalid && (
            <p className={classes.error}>PLEASE ENTER DATE</p>
          )}
        </div>
        <div className={classes.btn}>
          <button
            disabled={!formvalid}
            className={classes.button}
            type="submit"
            onClick={() => setformfocused(false)}
          >
            {props.loading ? 'Sending...' : 'Add Task'}
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default NewTask;
