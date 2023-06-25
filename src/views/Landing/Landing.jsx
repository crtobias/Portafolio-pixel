import { Link } from "react-router-dom";
import "./landing.css"


const Landing = () => {
    return(
        <div>
            <Link to={"/home"}>
            <div className="landing-container">

                <h2 className="landing-bienvenido">bienvenido</h2>
            
            </div>
            </Link>
        </div>
    )
}


export default Landing