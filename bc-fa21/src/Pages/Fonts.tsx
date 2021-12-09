import { Global } from '@emotion/react';
import React from 'react';

const Fonts: React.FC = () => (
  <Global
    styles={`
          @font-face {
              font-family: 'P052';
              src: url('/fonts/P052-Bold.ttf');
              font-weight: 700;
              font-style: normal;
              font-display: block;
          }
          @font-face {
              font-family: 'P052';
              src: url('/fonts/P052-BoldItalic.ttf');
              font-weight: 500;
              font-style: normal;
              font-display: block;
          }
          @font-face {
              font-family: 'P052';
              src: url('/fonts/P052-Italic.ttf');
              font-weight: 700;
              font-style: normal;
              font-display: block;
          }
      `}
  />
);

export default Fonts;