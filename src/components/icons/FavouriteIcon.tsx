import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
export const FavouriteIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 32 32"
    {...props}>
    <Path d="M.256 12.16q.544 2.08 2.08 3.616L16 29.92l13.664-14.144q1.536-1.536 2.08-3.616t0-4.128-2.08-3.584-3.584-2.08-4.16 0-3.584 2.08L16 7.264l-2.336-2.816q-1.536-1.536-3.584-2.08t-4.128 0-3.616 2.08-2.08 3.584 0 4.128z" />
  </Svg>
);
