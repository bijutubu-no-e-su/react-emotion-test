import { css } from '@emotion/core';

export const bodyStyle = css`
  overflow-x: hidden;
  font-family: 'Kameron', serif;
  font-family: 'Noto Sans JP', sans-serif;
  background-color: 'black';
`;

export const headerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: rgba(192, 192, 192, 0.7);
  & .logo {
    position: relative;
    justify-content: center;
    font-size: 38px;
  }
  &__inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    @extend .content-width;

    margin: 0;
  }
`;

export const listStyle = css`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    padding: 0;
    margin-left: 20px;
  }
`;
