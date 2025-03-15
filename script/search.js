document.getElementById("search-input").addEventListener("keyup", (e) => {
  const input = e.target.value;
  console.log(input);
  loadVideos(input);
});
