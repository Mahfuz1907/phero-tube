function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
}

function displayVideos(videos) {
  const video = document.getElementById("video");
  video.innerHTML = "";

  if (videos.length === 0) {
    video.innerHTML = `<div
        class="col-span-full flex flex-col gap-3 justify-center items-center"
      >
        <img src="Icon.png" alt="" class="w-36 h-36" />
        <h1 class="text-3xl font-bold text-center">
          Oops!! Sorry, There is no <br />
          content here
        </h1>
      </div>`;
  }

  for (let eachVideo of videos) {
    let differentVideos = document.createElement("div");
    differentVideos.className = "flex flex-col gap-5 w-80 cursor-pointer";

    differentVideos.innerHTML = `<img
          src=${eachVideo.thumbnail}
          alt=""
          class="rounded-sm h-52"
        />
        <div class="flex flex-row gap-5">
          <img
            src=${eachVideo.authors[0].profile_picture}
            alt=""
            class="w-10 h-10 rounded-full"
          />
          <div class="flex flex-col gap-1">
            <h1 class="text-[#171717] text-base font-bold">${eachVideo.title}</h1>
            <div class="flex flex-row gap-3">
              <p class="text-[#171717B2] text-sm font-normal">
              ${eachVideo.authors[0].profile_name}
              </p>
              <img src="verified.png" />
            </div>
            <p class="text-[#171717B2] text-sm font-normal">${eachVideo.others.views} views</p>
          </div>
        </div>`;

    video.appendChild(differentVideos);
  }
}

//loadVideos();
