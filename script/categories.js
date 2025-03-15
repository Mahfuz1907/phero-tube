function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

function displayCategories(categories) {
  const category = document.getElementById("category");

  for (let cat of categories) {
    let different_cat = document.createElement("button");
    different_cat.onclick = function () {
      loadCategoryVideos(cat.category_id);
    };
    different_cat.className =
      "bg-[#25252526] hover:bg-[#FF1F3D] text-[#252525B2] hover:text-white text-base font-medium px-5 py-2 rounded-md cursor-pointer";
    different_cat.id = `category-${cat.category_id}`;
    different_cat.innerText = cat.category;
    category.appendChild(different_cat);
  }

  //loadCategoryVideos(categories);
}

loadCategories();
