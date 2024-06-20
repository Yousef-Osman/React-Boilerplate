import { BgColor } from "../models/enums/BgColor"

interface Props{
    children : string,
    bgColor: BgColor,
    onClick: () => void
}

const Button = ({children, bgColor, onClick} : Props) => {
  return (
    <button className={"btn " + bgColor} onClick={onClick}>{children}</button>
  )
}

export default Button