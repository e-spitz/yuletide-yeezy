import './Login.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {

  const [noClicked, setNoClicked] = useState(false)

  const onClick = () => {
    setNoClicked(true)
    setTimeout(() => setNoClicked(false), 4000)
  }

  return (
    <div className="login-page">
      <h1 className='login-header'>tis the <span className='yeeson'>yeeson</span></h1>
          <p className='question'>Kanye wants to know...</p>
          <p className='question'><strong>ARE YOU 18 YEARS OF AGE OR OLDER?</strong></p>
          <Link to= '/yuletide-yeezy'>
              <button className='yes-no-btn yes'>yeez</button>
          </Link>
          <button className='yes-no-btn no' onClick={onClick}>neez</button>
          {noClicked && <h3 className='so-sorry'>So sorry! Yeezy says you aren't old enough to enter.</h3>}
    </div>
  );
}
