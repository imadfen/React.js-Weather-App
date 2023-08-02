import { SVGProps } from "react"
const RightArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#FFF"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
  </svg>
)
export default RightArrowIcon
