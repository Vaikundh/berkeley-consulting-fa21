import React from 'react'

import { Global } from '@emotion/react'

const styles = `
/* lato-300 - latin-ext_latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  src: url('./fontFiles/lato-v20-latin-ext_latin-300.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fontFiles/lato-v20-latin-ext_latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fontFiles/lato-v20-latin-ext_latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fontFiles/lato-v20-latin-ext_latin-300.woff') format('woff'), /* Modern Browsers */
       url('./fontFiles/lato-v20-latin-ext_latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fontFiles/lato-v20-latin-ext_latin-300.svg#Lato') format('svg'); /* Legacy iOS */
}
/* lato-regular - latin-ext_latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: url('./fontFiles/lato-v20-latin-ext_latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fontFiles/lato-v20-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fontFiles/lato-v20-latin-ext_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fontFiles/lato-v20-latin-ext_latin-regular.woff') format('woff'), /* Modern Browsers */
       url('./fontFiles/lato-v20-latin-ext_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fontFiles/lato-v20-latin-ext_latin-regular.svg#Lato') format('svg'); /* Legacy iOS */
}
/* lato-italic - latin-ext_latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  src: url('./fontFiles/lato-v20-latin-ext_latin-italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fontFiles/lato-v20-latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fontFiles/lato-v20-latin-ext_latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fontFiles/lato-v20-latin-ext_latin-italic.woff') format('woff'), /* Modern Browsers */
       url('./fontFiles/lato-v20-latin-ext_latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fontFiles/lato-v20-latin-ext_latin-italic.svg#Lato') format('svg'); /* Legacy iOS */
}
/* lato-700 - latin-ext_latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: url('./fontFiles/lato-v20-latin-ext_latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fontFiles/lato-v20-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fontFiles/lato-v20-latin-ext_latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fontFiles/lato-v20-latin-ext_latin-700.woff') format('woff'), /* Modern Browsers */
       url('./fontFiles/lato-v20-latin-ext_latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fontFiles/lato-v20-latin-ext_latin-700.svg#Lato') format('svg'); /* Legacy iOS */
}
/* lato-700italic - latin-ext_latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 700;
  src: url('./fontFiles/lato-v20-latin-ext_latin-700italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fontFiles/lato-v20-latin-ext_latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fontFiles/lato-v20-latin-ext_latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fontFiles/lato-v20-latin-ext_latin-700italic.woff') format('woff'), /* Modern Browsers */
       url('./fontFiles/lato-v20-latin-ext_latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fontFiles/lato-v20-latin-ext_latin-700italic.svg#Lato') format('svg'); /* Legacy iOS */
}
/* lato-900 - latin-ext_latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 900;
  src: url('./fontFiles/lato-v20-latin-ext_latin-900.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fontFiles/lato-v20-latin-ext_latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fontFiles/lato-v20-latin-ext_latin-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fontFiles/lato-v20-latin-ext_latin-900.woff') format('woff'), /* Modern Browsers */
       url('./fontFiles/lato-v20-latin-ext_latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fontFiles/lato-v20-latin-ext_latin-900.svg#Lato') format('svg'); /* Legacy iOS */
}
/* lato-900italic - latin-ext_latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 900;
  src: url('./fontFiles/lato-v20-latin-ext_latin-900italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fontFiles/lato-v20-latin-ext_latin-900italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fontFiles/lato-v20-latin-ext_latin-900italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fontFiles/lato-v20-latin-ext_latin-900italic.woff') format('woff'), /* Modern Browsers */
       url('./fontFiles/lato-v20-latin-ext_latin-900italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fontFiles/lato-v20-latin-ext_latin-900italic.svg#Lato') format('svg'); /* Legacy iOS */
}

/* dosis-regular - latin-ext_latin */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 400;
  src: url('./fontFiles/dosis-v22-latin-ext_latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fontFiles/dosis-v22-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fontFiles/dosis-v22-latin-ext_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fontFiles/dosis-v22-latin-ext_latin-regular.woff') format('woff'), /* Modern Browsers */
       url('./fontFiles/dosis-v22-latin-ext_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fontFiles/dosis-v22-latin-ext_latin-regular.svg#Dosis') format('svg'); /* Legacy iOS */
}
/* dosis-500 - latin-ext_latin */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 500;
  src: url('./fontFiles/dosis-v22-latin-ext_latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fontFiles/dosis-v22-latin-ext_latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fontFiles/dosis-v22-latin-ext_latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fontFiles/dosis-v22-latin-ext_latin-500.woff') format('woff'), /* Modern Browsers */
       url('./fontFiles/dosis-v22-latin-ext_latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fontFiles/dosis-v22-latin-ext_latin-500.svg#Dosis') format('svg'); /* Legacy iOS */
}
/* dosis-600 - latin-ext_latin */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 600;
  src: url('./fontFiles/dosis-v22-latin-ext_latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fontFiles/dosis-v22-latin-ext_latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fontFiles/dosis-v22-latin-ext_latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fontFiles/dosis-v22-latin-ext_latin-600.woff') format('woff'), /* Modern Browsers */
       url('./fontFiles/dosis-v22-latin-ext_latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fontFiles/dosis-v22-latin-ext_latin-600.svg#Dosis') format('svg'); /* Legacy iOS */
}
/* dosis-700 - latin-ext_latin */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 700;
  src: url('./fontFiles/dosis-v22-latin-ext_latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fontFiles/dosis-v22-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fontFiles/dosis-v22-latin-ext_latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fontFiles/dosis-v22-latin-ext_latin-700.woff') format('woff'), /* Modern Browsers */
       url('./fontFiles/dosis-v22-latin-ext_latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fontFiles/dosis-v22-latin-ext_latin-700.svg#Dosis') format('svg'); /* Legacy iOS */
}
/* dosis-800 - latin-ext_latin */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 800;
  src: url('./fontFiles/dosis-v22-latin-ext_latin-800.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fontFiles/dosis-v22-latin-ext_latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fontFiles/dosis-v22-latin-ext_latin-800.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fontFiles/dosis-v22-latin-ext_latin-800.woff') format('woff'), /* Modern Browsers */
       url('./fontFiles/dosis-v22-latin-ext_latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fontFiles/dosis-v22-latin-ext_latin-800.svg#Dosis') format('svg'); /* Legacy iOS */
}
`
// eslint-disable-next-line
const Fonts = () => <Global styles={styles} />

export default Fonts
