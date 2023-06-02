const Name = (props) => {
  const { liked, character, onLikeToggle, id } = props;

  return (
    <div>
      <h1>{character}</h1>
      <button onClick={() => onLikeToggle(id)}>
        {liked ? "Liked" : "Not liked"}
      </button>
    </div>
  );
};

export default Name;
