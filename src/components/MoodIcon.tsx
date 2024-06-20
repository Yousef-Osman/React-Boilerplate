import { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

interface Props {
    onClick : () => void
}

const MoodIcon = ({onClick}: Props) => {
    const [isLightMood, setlightMood] = useState<boolean>(true);

    const toggleMood = () => {
        setlightMood(!isLightMood);
        onClick();
    }

    if (isLightMood)
        return (<MdOutlineLightMode onClick={toggleMood}/>);
    else
        return (<MdDarkMode onClick={toggleMood} />);
}

export default MoodIcon