import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "ð": "Smiling",
  "ðģ": "disbelief",
  "ð": "sad",
  "ðĨĄ": "takeout box",
  "âĪïļ": "love",
  "ð": "annoyance",
  "ðĪŠ": "Zany Face",
  "ðī": "Sleeping Face",
  "ðŋ": "Evil Eye",
  "ðĶ": "lion",
  "ðĨ": "kiwi Fruits",
  "ð": "Birthday Cake",
  "ð": "Volcano",
  "ð": "Sunrise"
};

var emojiWeknow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setmeaning] = useState(" ");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    console.log(userInput + " " + meaning);

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setmeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1
        style={{
          color: "purple",
          fontFamily: "cursive"
        }}
      >
        Emoji-Pedia
      </h1>
      <input
        onChange={emojiInputHandler}
        placeholder={"search your emoji ......"}
        style={{
          padding: "0.7rem 10rem 0.7rem 0.5rem",
          fontSize: "2rem",
          borderRadius: "0.5rem",
          borderColor: "blue",
          backgroundColor: "khaki"
        }}
      />
      <h2>{meaning}</h2>
      <h2>Emoji We Know</h2>
      {emojiWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.7rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
