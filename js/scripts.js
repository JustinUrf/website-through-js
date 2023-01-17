window.onload = function() {
  const pElement = document.createElement("p");
  const h1Element = document.createElement("h1");
  const h2Element = document.createElement("h2");
  const ulElement = document.createElement("ul");
  const liElement = document.createElement("li");
  const liElement2 = document.createElement("li");
  const aElement = document.createElement("a");
  aElement.href = "https://en.wikipedia.org/wiki/Multicoloured_tanager";
  const imgElement = document.createElement("img");
  imgElement.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
  imgElement.alt= "This is an image of a Multicolored Tanager bird from birdsoftheworld.org";
  imgElement.style="width:50%"
  const firstH1 = document.querySelector("h1");

  pElement.append("The HTML of this webpage was created with JavaScript.");
  firstH1.after(pElement);
  pElement.after(imgElement);
  h1Element.append("Facts about the Multicolored Tanager");
  imgElement.after(h1Element);
  h1Element.after(ulElement);
  liElement.append("It is endemic to the mountains of Colombia.")
  ulElement.after(liElement);
  liElement2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  ulElement.after(liElement2);
  h2Element.append("Source");
  liElement.after(h2Element);
  aElement.append("Wikipedia");
  h2Element.after(aElement);
}