import CuteCharacter from "./CuteChar";
import "./HeartAnimation.css";

export default function HeartAnimation () {
    return (
        <div className="heartAnimation">
            <CuteCharacter/>
            <h2>Nice</h2>
            <button>Show Text</button>
        </div>
    )
}