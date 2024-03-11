import * as React from "react";
import { SVGProps } from "react";
const SearchICon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#9CA3AF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.167 15.833a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333Z"
    />
    <path
      stroke="#9CA3AF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="m17.5 17.5-3.625-3.625"
    />
  </svg>
);
export default SearchICon;
