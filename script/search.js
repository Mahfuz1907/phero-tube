document.getElementById("search-input").addEventListener("keyup", (e) => {
  const input = e.target.value;
  console.log(input);
  loadVideos(input);
});

const showLoader = () => {
  document.getElementById("loader").classList.remove("hidden");
  document.getElementById("video").classList.add("hidden");
};

const hideLoader = () => {
  document.getElementById("loader").classList.add("hidden");
  document.getElementById("video").classList.remove("hidden");
};
