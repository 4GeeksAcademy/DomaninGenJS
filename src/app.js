/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "their", "her"];
  let adj = ["great", "big", "wonderful", "magic"];
  let noun = ["jogger", "racoon", "cat", "dog"];
  let dot = [".com", ".net", ".us", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    let iPronoun = pronoun[i];
    for (let j = 0; j < adj.length; j++) {
      let jAdj = adj[j];
      for (let k = 0; k < noun.length; k++) {
        let kNoun = noun[k];
        for (let l = 0; l < dot.length; l++) {
          let lDot = dot[l];
          console.log(iPronoun + jAdj + kNoun + lDot);
        }
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
