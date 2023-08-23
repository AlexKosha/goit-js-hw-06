const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

const itemIngredient = ingredients.map((item) => {
  const createItem = document.createElement("li");
  createItem.textContent = item;
  return createItem;
});

// console.log(itemIngredient);

listIngredients.append(...itemIngredient);
