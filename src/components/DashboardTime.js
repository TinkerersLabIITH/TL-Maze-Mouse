// For use if needed

function DashboardTime(props) {
  return (
    <div className="pink-button">
      <div className="pink-button-inner">
        <div
          className="pink-button-rect"
          style={{ marginLeft: "45px", marginRight: "20px" }}
        />
        <p
          style={{
            fontSize: "1.3rem",
            width: "max-content",
            marginLeft: "45px",
            marginRight: "20px",
          }}
        >
          {props.time}
        </p>
        <div className="pink-btn-circle">
          <div className="pink-btn-c-i">{props.stage}</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardTime;
