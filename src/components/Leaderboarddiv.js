function Leaderboarddiv(props) {
  return (
    <div className="leaderboard-div">
        <h4>{props.pos}</h4>
      <div className="lb-name">
        <h3>{props.name}</h3>
        <p>{Math.round(props.time)}</p>
      </div>
    </div>
  );
}

export default Leaderboarddiv;
