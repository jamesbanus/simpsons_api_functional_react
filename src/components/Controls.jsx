const Controls = (props) => {
  const { onSearchInput, onSortInput, onReset, search, sort } = props;

  return (
    <>
      <div className="filterContainer">
        <label htmlFor="character">Search by Character!</label>
        <input
          value={search}
          onInput={onSearchInput}
          type="text"
          name="character"
          id="characterSearch"
        />
        <label htmlFor="alphabet">Sort by alphabetical order!</label>
        <select
          onInput={onSortInput}
          name="alphabet"
          id="characterSort"
          value={sort}
        >
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
