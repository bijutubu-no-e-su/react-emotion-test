/** @jsx jsx */
import  React, {FC} from 'react';
import { jsx, css } from '@emotion/core';

const style = css ({
  backgroundColor: '#000',
  color: 'green',
  fontsize: '32px',
  '&:hover': {
    color: 'black',
  },
});

const ComponentEmotionGreen: FC = () => (
  <div css={style}>green </div>
);

export default ComponentEmotionGreen;
