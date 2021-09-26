import { NavLink } from "react-router-dom";
import "./Error.css";

export const Error = () => {
  return (
    <div className="error-404">
      <NavLink className="error-go-back" to="/yuletide-yeezy">
        <img
          className='error-img'
          src={require('../../assets/404.jpg').default}
          alt="404-kanye-img"
        />
      </NavLink>
    </div>
  );
}
