import Character from "./Character";
import Controls from "./Controls";

const Simpsons = (props) => {
  const {
    simpsons,
    onLikeToggle,
    onDelete,
    onSearchInput,
    onSortInput,
    onReset,
  } = props;

  return (
    <>
      <Controls
        onSearchInput={onSearchInput}
        onSortInput={onSortInput}
        onReset={onReset}
      />

      {simpsons.map((item) => {
        return (
          <Character
            item={item}
            key={item.id}
            onDelete={onDelete}
            onLikeToggle={onLikeToggle}
          />
        );
      })}
    </>
  );
};

export default Simpsons;
