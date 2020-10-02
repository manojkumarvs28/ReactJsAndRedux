import React from 'react';
import './NavigationList.css';

export const navigationList = (props) => {

    const navItemsList = ['Browse','My List','Top Picks','Recent'];
    const navItems = navItemsList.map(navItem => {
        return (
            <li key={navItem}>
                <span>{navItem}</span>
            </li>
         );
    });

      return (
          <ul className="NavigationItems">
              {navItems}
          </ul>
      )
}

export default navigationList;