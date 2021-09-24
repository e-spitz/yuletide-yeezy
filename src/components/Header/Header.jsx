import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className='header-div'>
        <p className='header-title'>yuletide yeezy</p>
        <img className='png' src={require('../../assets/Kanye-West.png').default}/>
        <p className='header-des'>...for the jolly & jovial Kanye fan</p>
      </div>
    </header>
  );
}
