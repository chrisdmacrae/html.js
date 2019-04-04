const {
  html,
  css,
  setup,
  teardown
} = require("literal.js");

setup();
const output = html `<div>${"content"}</div>`;
console.log(Object.keys(output));
teardown();