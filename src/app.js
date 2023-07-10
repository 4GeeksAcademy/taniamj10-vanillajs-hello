/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

for (let pronoun1 = 0; pronoun1 < pronoun.length; pronoun1++) {
  for (let adj1 = 0; adj1 < adj.length; adj1++) {
    for (let noun1 = 0; noun1 < noun.length; noun1++) {
      console.log(pronoun[pronoun1] + adj[adj1] + noun[noun1] + ".com");
    }
  }
}
