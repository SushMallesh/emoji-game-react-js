import './index.css'

const WinOrLoseCard = props => {
  const {isWonGame, userScore, totalScore, onPlayGameAgain} = props
  const onclickPlayAgain = () => {
    onPlayGameAgain(true)
  }

  const winLoseUrl = isWonGame
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const winMessage = isWonGame ? 'You Won' : 'You Lose'
  const scoreText = isWonGame ? 'Best Score' : 'Score'
  return (
    <div className="win-lose-container">
      <img className="win-lose-image" src={winLoseUrl} alt="win or lose" />
      <div className="score-card">
        <h1 className="message">{winMessage}</h1>
        <p className="score-text">{scoreText}</p> <br />
        <p className="score">
          {userScore}/{totalScore}
        </p>
        <button
          onClick={onclickPlayAgain}
          type="button"
          className="play-again-button"
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
