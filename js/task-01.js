const listCategories = document.querySelector("#categories");

const listItemEl = listCategories.querySelectorAll(".item");
console.log("Number of categories:", listItemEl.length);

listItemEl.forEach((item) => {
  const title = item.querySelector("h2").textContent;

  const subItemCount = item.querySelectorAll("li").length;

  console.log(`Category: ${title}`);

  console.log(`Elements: ${subItemCount}`);
});
