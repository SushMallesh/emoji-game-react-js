import './index.css'

const NavBar = props => {
  const {score, topScore, isWon} = props
  return (
    <nav className="navbar-bg">
      <div className="nav-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="navbar-title">Emoji Game</h1>
      </div>

      {isWon && <p className="score-value">Score: {score}</p>}
      {isWon && <p className="score-value">Top Score: {topScore}</p>}
    </nav>
  )
}

export default NavBar
