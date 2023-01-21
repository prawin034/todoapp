import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/allTasks">
            ALL TASKS
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/newTask">
            ADD TASKS
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/deleteAll">
            DELETE ALL
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/logout">
            LOGOUT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
