import './index.css'

const Header = props => {
  const {score, seconds} = props

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <ul className="nav-menu">
          <li className="score-list-container">
            <p className="score-text">
              Score: <span className="span">{score}</span>
            </p>
          </li>
          <li className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-icon"
            />
            <p className="time">{seconds} sec</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Header
