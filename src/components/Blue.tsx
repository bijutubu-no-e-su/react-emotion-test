/** @jsx jsx */
import  React, {FC} from 'react';
import { jsx, css } from '@emotion/core';

const style = css ({
  backgroundColor: '#000',
  color: 'blue',
  fontsize: '32px',
  '&:hover': {
    color: 'white',
  },
});

const ComponentEmotionBlue: FC = () => (
  <div css={style}>blue </div>
);

export default ComponentEmotionBlue;
