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

const loadVideoDetails = (videoID) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoID}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayVideoDetails(data.video));
};

const displayVideoDetails = (video) => {
  console.log(video);
  document.getElementById("video_details").showModal();
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `<div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
  </div>
</div>`;
};
