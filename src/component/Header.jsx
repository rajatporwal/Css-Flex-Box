import React from "react";

const Header = () => {
  return (
    <header class="header">
      <img src="img/logo.png" alt="trillo logo" class="logo" />

      <form action="#" class="search">
        <input type="text" class="search__input" placeholder="Search hotels" />
        <button class="search__button">
          <svg class="search__icon">
            <use xlinkHref="img/sprite.svg#icon-magnifying-glass" />
          </svg>
        </button>
      </form>

      <nav class="user-nav">
        <div class="user-nav__icon-box">
          <svg class="user-nav__icon">
            <use xlinkHref="img/sprite.svg#icon-bookmark" />
          </svg>
          <span class="user-nav__notification">7</span>
        </div>
        <div class="user-nav__icon-box">
          <svg class="user-nav__icon">
            <use xlinkHref="img/sprite.svg#icon-chat" />
          </svg>
          <span class="user-nav__notification">13</span>
        </div>
        <div class="user-nav__user">
          <img src="img/user.jpg" alt="User" class="user-nav__user-photo" />
          <span class="user-nav__user-name">Jonas</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
