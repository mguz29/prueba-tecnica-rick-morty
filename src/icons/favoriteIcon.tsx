import { SVGProps } from "react";
const FavoriteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#D1D5DB"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.318 2.318a4.5 4.5 0 0 0 0 6.364L10 16.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L10 3.636 8.682 2.318a4.5 4.5 0 0 0-6.364 0Z"
      fill={props.color}
      strokeWidth={props.stroke}
    />
  </svg>
);
export default FavoriteIcon;
