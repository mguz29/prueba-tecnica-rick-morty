import { SVGProps } from "react"
const FilterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <path
      stroke="#8054C7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M19 13v-2m0 2a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m-6 8a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V11m6 6v10m6-2a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V11"
    />
  </svg>
)
export default FilterIcon

