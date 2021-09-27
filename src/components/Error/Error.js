import { NavLink } from "react-router-dom";
import { Header } from '../Header/Header'

import "./Error.css";

export const Error = () => {
  return (
    <>
      <Header />
      <div className="error-404">
        <NavLink className="error-go-back" to="/yuletide-yeezy">
          <img
            className='error-img'
            src={require('../../assets/404.jpg').default}
            alt="404-kanye-img"
          />
        </NavLink>
      </div>
    </>
  );
}
