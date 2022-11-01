import "./MyButton.css";

function MyButton(props) {

  return (
    <button style={{ backgroundColor: props.color }} className="btn">
      {props.children}
    </button>
  );
}

export default MyButton;