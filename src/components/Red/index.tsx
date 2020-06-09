/** @jsx jsx */
import React, { FC } from 'react';
import { jsx, css } from '@emotion/core';
import { bodyStyle, headerStyle, listStyle } from 'components/styles/common';

const Red: FC = () => (
  <body css={bodyStyle}>
    <header css={headerStyle} className="header">
      <div className="logo item">
        <span className="logo__sample">Portfolio</span>
        <span className="logo__site">Site</span>
      </div>
      <nav className="header__nav">
        <ul className="header__ul" css={listStyle}>
          <li className="header__li item">
            <a href="#profile">profile</a>
          </li>
          <li className="header__li item">
            <a href="#skill">skill</a>
          </li>
          <li className="header__li item">
            <a href="https://github.com/bijutubu-no-e-su">github</a>
          </li>
          <li className="header__li item">
            <a href="https://qiita.com/bijutubu_no_e-su">qiita</a>
          </li>
          <li className="header__li item">
            <a className="btn filled" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button className="mobile-menu__btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  </body>
);

export default Red;
