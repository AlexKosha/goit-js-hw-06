const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listGalleryEl = document.querySelector(".gallery");

const createGalleryEl = images.map(({ url, alt }) => {
  const itemEl = document.createElement("li");
  const imgEl = document.createElement("img");
  imgEl.src = url;
  imgEl.alt = alt;
  imgEl.style.width = "360px";
  imgEl.style.height = "200px";

  itemEl.appendChild(imgEl);

  return itemEl;
});
listGalleryEl.style.display = "flex";
listGalleryEl.style.gap = "10px";

listGalleryEl.append(...createGalleryEl);
