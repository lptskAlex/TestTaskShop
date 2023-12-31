import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const ArrowLeft = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M5 12l6-6m-6 6 6 6"
    />
  </Svg>
);
