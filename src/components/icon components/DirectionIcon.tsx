import { SVGProps } from "react"
const DirectionIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="#fff" {...props}>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
    </svg>
)
export default DirectionIcon
