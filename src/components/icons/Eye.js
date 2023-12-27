import React from 'react';
import {ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';

const Eye = () => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2 9.5C2 9.5 4.90909 4 10 4C15.0909 4 18 9.5 18 9.5C18 9.5 15.0909 15 10 15C4.90909 15 2 9.5 2 9.5Z"
        stroke="#242424"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 12C11.1046 12 12 10.8807 12 9.5C12 8.11929 11.1046 7 10 7C8.89543 7 8 8.11929 8 9.5C8 10.8807 8.89543 12 10 12Z"
        stroke="#242424"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Eye;
