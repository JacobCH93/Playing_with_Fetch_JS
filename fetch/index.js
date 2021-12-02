const urlInput = document.querySelector("#urlName");
const button = document.querySelector("#urlSubmit");

button.addEventListener("click", () => {
  console.log(urlInput.value);
});
