import * as React from 'react'
import type { Token } from '@stitches/react/types/theme'

const SolanaIcon: React.FC<React.SVGProps<SVGSVGElement & { color?: Token<any, string, "colors", ""> | string }>> = ({ color = '#000505',...props }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill={'none'} { ...props } xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect id="image 9" width="42" height="42" fill="url(#pattern0)" />
  <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlink:href="#image0_474_333" transform="scale(0.0119048)" />
    </pattern>
    <image id="image0_474_333" data-name="image.png" width="84" height="84" xlink:href="data:image/png;base64,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" />
  </defs>
</svg>
)

export default SolanaIcon
