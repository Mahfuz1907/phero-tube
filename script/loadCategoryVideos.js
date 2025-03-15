const loadCategoryVideos = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const clickedButton = document.getElementById(`category-${id}`);
      removeActiveClass();
      clickedButton.classList.add("active");
      displayVideos(data.category);
    });
};

function removeActiveClass() {
  const activeButton = document.getElementsByClassName("active");
  for (let btn of activeButton) {
    btn.classList.remove("active");
  }
}

function handleClick() {
  loadVideos();
  removeActiveClass();
}
