import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {

    const navigate = useNavigate();

    return (
        <div>
            <p><b>Welcome!</b></p>
            <div className="main-img">
                <img className='home-img' src='../src/assets/cuteChar.png'/>
            </div>
            <br></br>
            <div className='box'></div>
            <p className='loading' style={{paddingLeft: "10px"}}>Loading...</p>

            <button onClick={() => navigate("/cubeAnimation")}>Next</button>
        </div>
    )
}