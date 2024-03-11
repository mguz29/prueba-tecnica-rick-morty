import * as React from "react";
import { SVGProps } from "react";
const ArrowBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#8054C7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m10 19-7-7m0 0 7-7m-7 7h18"
    />
  </svg>
);
export default ArrowBack;
