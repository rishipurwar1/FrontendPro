export const INPUTS = [
  {
    label: "Challenge Title",
    placeholder: "Challenge title",
    name: "title",
    required: true,
  },
  {
    label: "Skills",
    placeholder: "Add upto 3 skills",
    name: "skills",
    required: true,
    type: "search",
  },
  {
    label: "Github Repository",
    placeholder: "Github repository",
    name: "githubUrl",
    required: true,
  },
  {
    label: "Live Website",
    placeholder: "Live website",
    name: "liveWebsiteUrl",
    required: true,
  },
  {
    label: "Ask For Feedback",
    placeholder: "Ask for feedback",
    name: "feedback",
  },
]

export const FILES = {
  vanilla: {
    "/index.html": {
      code: '<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Parcel Sandbox</title>\n  <meta charset="UTF-8" />\n</head>\n\n<body>\n  <div id="app">Thanks for choosing CodingSpace</div>\n\n  <script src="src/index.js">\n  </script>\n</body>\n\n</html>',
    },
    "/src/styles.css": {
      code: "body {\n  font-family: sans-serif;\n}\n",
    },
    "/src/index.js": {
      code: 'import "./styles.css";',
    },
  },
}
