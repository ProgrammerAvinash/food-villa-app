import Card from "./Card";
import "./CardHolder.css";

const CardHolder = () => {
  return (
    <div className="cardContainer">
      <Card name="Avinash" />
      <Card name="Ravi" />
    </div>
  );
};

export default CardHolder;
