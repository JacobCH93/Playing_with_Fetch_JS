(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fetchNotes.js
  var require_fetchNotes = __commonJS({
    "fetchNotes.js"(exports, module) {
      var fetchNotes2 = (title, content) => {
        fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ "title": `${title}`, "content": `${content}` })
        }).then((response) => response.json()).then((data) => {
          console.log("Success:", data);
        }).catch((error) => {
          console.error("Error:", error);
        });
      };
      module.exports = fetchNotes2;
    }
  });

  // index.js
  var fetchNotes = require_fetchNotes();
  var titleEL = document.querySelector("#title");
  var contentEL = document.querySelector("#content");
  var buttonEL = document.querySelector("#submit");
  buttonEL.addEventListener("click", () => {
    fetchNotes(titleEL.value, contentEL.value);
  });
})();
