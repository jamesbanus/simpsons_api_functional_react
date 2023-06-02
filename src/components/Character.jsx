import Name from "./Name";
import Image from "./Image";
import Quote from "./Quote";
import Delete from "./Delete";

const Character = (props) => {
  const { character, quote, image, id, characterDirection, liked } = props.item;
  const { onLikeToggle, onDelete } = props;

  if (characterDirection === "Left") {
    return (
      <div className="characterContainer">
        <Image image={image} />
        <Name
          character={character}
          onLikeToggle={onLikeToggle}
          id={id}
          liked={liked}
        />
        <Quote quote={quote} />
        <Delete onDelete={onDelete} id={id} />
      </div>
    );
  } else {
    return (
      <div className="characterContainer">
        <Name
          character={character}
          onLikeToggle={onLikeToggle}
          id={id}
          liked={liked}
        />
        <Quote quote={quote} />
        <Image image={image} />
        <Delete onDelete={onDelete} id={id} />
      </div>
    );
  }
};

export default Character;
