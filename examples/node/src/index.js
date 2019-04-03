const {
  html,
  css
} = require("literal.js");

const htmlOutput = html `
  <div>${"string"}</div>
`

const cssOutput = css `
  body {
    background-color: ${"red"};
  }
`;