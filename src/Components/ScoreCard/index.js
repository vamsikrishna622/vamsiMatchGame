import './index.css'

const ScoreCard = props => {
  const {score, onResetTimer} = props
  const resetGame = () => {
    onResetTimer()
  }

  return (
    <div className="game-end-app-container">
      <div className="game-end-container">
        <div className="game-end-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="trophy-img"
          />
          <p className="text">YOUR SCORE</p>
          <p className="score">{score}</p>
          <button
            type="button"
            className="play-again-button"
            onClick={resetGame}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
              className="reset"
            />
            <p>PLAY AGAIN</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ScoreCard
