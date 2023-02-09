import "./card.css";

const Card = ({ name }) => {
  return (
    <div className="cardContainer">
      <div className="cardItems">
        <h1> {name} </h1>
        <p>lorem bsdahf ajuhw dsgfj sdajhl fawdjh sdfjksd xhjsdajkfudjfcja </p>
      </div>
    </div>
  );
};
export default Card;
