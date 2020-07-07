/** @format */
// KeyboardJS is global .. ugly but really i refuse to convert it from es module to common at this point const palette = require( "../components/palette" );

const {resizeLeft, resizeRight, traverseFwd, traverseBck} = require("../components/palette/commands/terminal");


keyboardJS.bind(
  "ctrl + tab",
  e => !e.shifKey
    ? traverseFwd()
    : traverseBck()
);

keyboardJS.bind("alt + left", e => {
  console.log("alt-l");

  if (e.shiftKey == true) {
    resizeLeft();
    console.log("resize left");
  }
});

keyboardJS.bind("alt + right", e => {
  console.log("alt-r");

  if (e.shiftKey == true) {
    resizeRight();
    console.log("resize right");
  }
});
