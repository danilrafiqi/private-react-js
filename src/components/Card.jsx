import "./Card.style.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">{props.title}</div>
      {props.content}
    </div>
  );
};

export default Card;
