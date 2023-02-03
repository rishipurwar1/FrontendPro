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

export const PLAYGROUND_INPUTS = [
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
    label: "Playground Link",
    placeholder: "Playground Link",
    name: "playgroundLink",
    required: true,
    disabled: true,
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
      code: '<!DOCTYPE html>\n<html>\n\n<head>\n  <title>FrontendPro Sandbox</title>\n  <meta charset="UTF-8" />\n  <!-- DO NOT import fonts here. Instead, use the \n  @import directive in the styles.css file. -->\n</head>\n\n<body>\n  <h1 id="app">Take your skills to the next level!🚀</h1>\n\n  <!-- DON\'T remove it -->\n  <script src="src/index.js"></script>\n</body>\n\n</html>',
    },
    "/src/styles.css": {
      code: "/* Use @import directive to import fonts here */\n\nbody {\n  font-family: sans-serif;\n}\n",
    },
    "/src/index.js": {
      code: '// DON\'T remove the below import\nimport "./styles.css";',
    },
  },
  demo: {
    "/index.html": {
      code: '<!DOCTYPE html>\n<html>\n\n<head>\n  <title>FrontendPro Sandbox</title>\n  <meta charset="UTF-8" />\n</head>\n\n<body>\n  <h1 id="app">Become a Pro in Frontend Dev with FrontendPro.dev! 🚀</h1>\n  <button>Increase Your Skill Level: <span id="level">0</span></button>\n  <script src="src/index.js"></script>\n</body>\n\n</html>',
    },
    "/src/styles.css": {
      code: "body {\n  font-family: sans-serif;\n  background-color: #1F2937;\n  color: white;\n  text-align: center;\n  color: white;\n  padding-top: 64px;\n}\n\nbutton {\n  background-color: #4F46E5;\n  transition: background-color 0.3s ease;\n  color: white;\n  padding: 12px;\n  border: none;\n  border-radius: 6px;\n  font-weight: semi-bold;\n  cursor: pointer;\n  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);\n}\n\nbutton:hover {\n  background-color: #4338CA;\n}\n",
    },
    "/src/index.js": {
      code: 'import "./styles.css";\n\nconst button = document.querySelector("button")\nconst level = document.querySelector("#level")\n  \nbutton.addEventListener("click" , () => {\n  level.innerText++\n})\n',
    },
  },
}
