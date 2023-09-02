// const listCategories = document.querySelector("#categories");

// const listItemEl = Array.from(listCategories.children);
// console.log("Number of categories:", listItemEl.length);
const listItemEl = document.querySelectorAll(".item");
console.log("Number of categories:", listItemEl.length);

listItemEl.forEach((item) => {
  const title = item.firstElementChild.textContent;

  const listEl = item.lastElementChild;
  const subItemCount = listEl.children.length;

  console.log(`Category: ${title}`);

  console.log(`Elements: ${subItemCount}`);
});
