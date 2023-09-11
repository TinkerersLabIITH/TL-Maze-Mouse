function Leaderboarddiv(props) {
    return (
        <div className="leaderboard-div">
            <h3>{props.name}</h3>
            <p>{props.time}</p>
        </div>
    )
}

export default Leaderboarddiv;