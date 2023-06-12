import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";
import { validate } from "./validation";

const App = () => {
  const [simpsons, setSimpsons] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [errors, setErrors] = useState({});

  const getData = useCallback(async () => {
    console.log(errors, Date.now());
    if (errors || !search) return;
    console.log("get data ran", Date.now());
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=50&character=${search}`
      );

      data.forEach((element, index) => {
        element.id = index + Math.random();
      });

      setSimpsons(data);
    } catch (error) {
      // console.log(error);
    }
  }, [search, errors, sort]);

  // console.log(simpsons, search);

  useEffect(() => {
    getData();
  }, [getData]);

  const onLikeToggle = (id) => {
    const list = [...simpsons];

    const indexOf = list.findIndex((char) => {
      return char.id === id;
    });
    //invert if liked or not liked
    list[indexOf].liked = !list[indexOf].liked;
    setSimpsons(list);
  };

  const onDelete = (id) => {
    const list = [...simpsons];
    const indexOf = list.findIndex((char) => {
      return char.id === id;
    });
    list.splice(indexOf, 1);
    setSimpsons(list);
  };

  const onSearchInput = async (e) => {
    setSearch(e.target.value);

    // validate
    const res = await validate(e.target.value);
    setErrors(res);
  };

  const onSortInput = (e) => {
    setSort(e.target.value);
  };

  const onReset = () => {
    setSort("");
    setSearch("");
  };

  // Below is the return once data has loaded

  if (!simpsons) return <Loading />;

  //calculate the total
  let total = 0;
  simpsons.forEach((char) => {
    if (char.liked) {
      total++;
    }
  });

  //filter result

  let filteredList = [...simpsons];

  // sort by alphabetical
  if (sort == "Asc") {
    filteredList.sort((itemOne, itemTwo) => {
      if (itemOne.character > itemTwo.character) return 1;
      if (itemOne.character < itemTwo.character) return -1;
    });
  } else if (sort === "Desc") {
    filteredList.sort((itemOne, itemTwo) => {
      if (itemOne.character > itemTwo.character) return -1;
      if (itemOne.character < itemTwo.character) return 1;
    });
  }

  return (
    <>
      <div className="headerContainer">
        <h1>Total no of liked chars #{total}</h1>
      </div>
      <Simpsons
        simpsons={filteredList}
        onLikeToggle={onLikeToggle}
        onDelete={onDelete}
        onSearchInput={onSearchInput}
        onSortInput={onSortInput}
        onReset={onReset}
        search={search}
        sort={sort}
        errors={errors}
      />
    </>
  );
};

export default App;
