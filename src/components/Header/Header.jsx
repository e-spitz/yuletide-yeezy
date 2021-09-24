import './Header.css'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <NavLink className='header-link' to='/'>
      <header className="header">
        <div className='header-div'>
          <p className='header-title'>yuletide yeezy</p>
          <p className='header-des'>...for the jolly & jovial Kanye fan</p>
        </div>
      </header>
    </NavLink>
  );
}
