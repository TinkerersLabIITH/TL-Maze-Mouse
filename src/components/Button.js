function ButtonPink(props) {
    return (
      <div className="pink-button">
        <div className="pink-button-inner">
          <div className="pink-button-rect" />
          <p style={{ fontSize: props.fontsize, width: "max-content" }}>
            {props.text}
          </p>
        </div>
      </div>
    );
  }
  
  export default ButtonPink;
  