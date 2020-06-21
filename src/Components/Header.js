import React, { useEffect } from 'react';

export const Header = () => {

    const toggleBurgerMenu = () => {
        document.querySelector('.burger').classList.toggle('change');
        let menu = document.querySelector('.menu');

        // toggle menu on mobile
        menu.classList.contains('showMenu') ?
            menu.classList.replace('showMenu', 'hideMenu') :
                menu.classList.replace('hideMenu', 'showMenu')

        }
    /* useEffect(()=>{
        setTimeout(() => {
            document.querySelector('.menu').style.opacity = 1;
        }, 1500);
    }, []) */
    
    return (
      <div id="header">
        <div className="burger" onClick={toggleBurgerMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <div className="menu hideMenu">
          <div className="menuItem">
            <a href="#homePage">Home</a>
          </div>
          <div className="menuItem">
            <a href="#about">About</a>
          </div>
          <div className="menuItem">
            <a href="#portfolio">Portfolio</a>
          </div>
          <div className="menuItem">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    );
}
