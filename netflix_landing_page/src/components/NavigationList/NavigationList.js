import React from 'react';
import classes from './NavigationList.css';

export const navigationList = (props) => {

    const navItemsList = ['Browse','My List','Top Picks','Recent'];
    const navItems = navItemsList.map(navItem => {
        return (
            <li key={navItem} className={classes.NavigationItem}>
                <span>{navItem}</span>
            </li>
         );
    });

      return (
          <ul className={classes.NavigationItems}>
              {navItems}
          </ul>
      )
}

export default navigationList;