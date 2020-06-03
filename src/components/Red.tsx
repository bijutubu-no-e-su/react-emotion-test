/** @jsx jsx */
import  React, {FC} from 'react';
import { jsx, css } from '@emotion/core';

const style = css ({
  backgroundColor: '#000',
  color: 'red',
  fontsize: '32px',
  '&:hover': {
    color: 'green',
  },
});

const ComponentEmotionRed: FC = () => (
  <div css={style}>red </div>
);

export default ComponentEmotionRed;
