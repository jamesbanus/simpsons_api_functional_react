const Controls = (props) => {
  const { onSearchInput, onSortInput, onReset } = props;

  return (
    <>
      <div className="filterContainer">
        <label htmlFor="character">Search by Character!</label>
        <input
          onInput={onSearchInput}
          type="text"
          name="character"
          id="characterSearch"
        />
        <label htmlFor="alphabet">Sort by alphabetical order!</label>
        <select onInput={onSortInput} name="alphabet" id="characterSort">
          <option value=""></option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
        </select>
        <button onClick={onReset}>Reset!</button>
      </div>
    </>
  );
};

export default Controls;
