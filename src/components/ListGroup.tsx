import { useState } from "react";
import Button from "./Button";
import { BgColor } from "../models/enums/BgColor";

const ListGroup = () => {
    const items = ['Item Number 1', 'Item Number 2', 'Item Number 3', 'Item Number 4', 'Item Number 5'];
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [buttonNumber, setbuttonNumber] = useState<Number>();

    function handleClick(input: number): void{
        setbuttonNumber(input);
    }

    return (
        <>
            <ul className="list-group mt-5 col-lg-4 col-md-6 col-10 cursor-pointer">
                {items.map((item, index) =>
                (
                    <li key={item}
                        className={index == selectedIndex ? "list-group-item active" : "list-group-item"}
                        onClick={() => setSelectedIndex(index)}>
                        {item}
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                <h4>Button number {buttonNumber?.toString()} is clicked</h4>
            </div>
            <div className="mt-4 d-flex gap-1">
                <Button onClick={() => handleClick(1)} bgColor={BgColor.Primary}>Primary</Button>
                <Button onClick={() => handleClick(2)} bgColor={BgColor.Success}>Success</Button>
                <Button onClick={() => handleClick(3)} bgColor={BgColor.Secondary}>Secondary</Button>
                <Button onClick={() => handleClick(4)} bgColor={BgColor.Info}>Info</Button>
                <Button onClick={() => handleClick(5)} bgColor={BgColor.Warning}>Warning</Button>
                <Button onClick={() => handleClick(6)} bgColor={BgColor.Danger}>Danger</Button>
                <Button onClick={() => handleClick(7)} bgColor={BgColor.Light}>Light</Button>
                <Button onClick={() => handleClick(8)} bgColor={BgColor.Dark}>Dark</Button>
            </div>
        </>
    )
}

export default ListGroup