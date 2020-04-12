import React from "react";

const SideBar = () => {
  return (
    <nav class="sidebar">
      <ul class="side-nav">
        <li class="side-nav__item side-nav__item--active">
          <a href="#" class="side-nav__link">
            <svg class="side-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-home" />
            </svg>
            <span>Hotel</span>
          </a>
        </li>
        <li class="side-nav__item">
          <a href="#" class="side-nav__link">
            <svg class="side-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-aircraft-take-off" />
            </svg>
            <span>Flight</span>
          </a>
        </li>
        <li class="side-nav__item">
          <a href="#" class="side-nav__link">
            <svg class="side-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-key" />
            </svg>
            <span>Car rental</span>
          </a>
        </li>
        <li class="side-nav__item">
          <a href="#" class="side-nav__link">
            <svg class="side-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-map" />
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>

      <div class="legal">&copy; 2017 by trillo. All rights reserved.</div>
    </nav>
  );
};

export default SideBar;
