/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Define arrays
  const pronouns = ["the", "our", "their", "her"];
  const adjectives = ["great", "big", "wonderful", "magic"];
  const nouns = ["jogger", "racoon", "cat", "dog"];
  const extensions = [".com", ".net", ".us", ".io"];

  // Generate domain names
  for (const pronoun of pronouns) {
    for (const adjective of adjectives) {
      for (const noun of nouns) {
        for (const extension of extensions) {
          console.log(`${pronoun}${adjective}${noun}${extension}`);
        }
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
