import React from 'react';
import classes from './Layout.module.css';
import Header from './header';
import Navigation from './Navigation';
import { useState } from 'react';
const Layout = (props) => {
  const [darkmode, setdarkmode] = useState(false);

  const mode = darkmode ? classes.darkmode : classes.lightmode;

  const darkmodechange = () => {
    setdarkmode(!darkmode);
  };
  return (
    <div className={classes.box}>
      <div className={classes.main}>
        <Header />
        <div className={classes.container}>
          <span
            className={classes.sun}
            style={{ backgroundColor: darkmode ? 'white' : 'yellow' }}
          >
            L
          </span>
          <div className={classes.switchcheckbox}>
            <label className={classes.switch}>
              <input type="checkbox" onChange={darkmodechange} />
              <span className={classes.slider}></span>
            </label>
          </div>
          <span style={{ backgroundColor: darkmode ? 'black' : 'white' }}>
            D
          </span>
        </div>
        <Navigation />
      </div>

      <main className={mode}>{props.children}</main>
    </div>
  );
};

export default Layout;
