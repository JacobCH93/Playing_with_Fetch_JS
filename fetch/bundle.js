(() => {
  // index.js
  var urlInput = document.querySelector("#urlName");
  var button = document.querySelector("#urlSubmit");
  button.addEventListener("click", () => {
    console.log(urlInput.value);
  });
})();
