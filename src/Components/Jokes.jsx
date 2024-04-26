import { useState } from "react";

const Jokes = () => {
  const [joke, setJoke] = useState("Welcome to Joke Generator By Abir");

  const handleClick = async () => {
    const res = await fetch(
      "https://v2.jokeapi.dev/joke/Any?type=twopart"
    ).then((response) => response.json());
    console.log(res);
    console.log(res.delivery);
    setJoke(res.delivery);
    // console.log(joke);
  };
  return (
    <div className="container mx-auto my-10 h-[70vh] bg-violet-200 rounded-lg shadow-xl">
      <div className="title text-center mt-10 pt-4">
        <h1 className="text-3xl lg:text-4xl text-violet-950 font-extrabold">
          Jokes Generator
        </h1>
      </div>
      <div className="joke text-center   h-full  w-1/2 mx-auto my-2">
        <p className="text-purple-900 shadow-lg  font-serif flex items-center justify-center text-xl md:text-lg h-1/2 overflow-scroll md:overflow-hidden  border-purple-950 bg-purple-400 rounded-md p-4">
          {joke}
        </p>
        <button
          onClick={handleClick}
          className="mx-auto shadow-md my-2 rounded-md text-2xl p-2 md:p-3 bg-purple-500 text-md font-semibold  text-pink-200 hover:bg-purple-600"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Jokes;
