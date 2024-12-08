const button = document.getElementById("move-two");
const sectionTwo = document.getElementById("two");

button.addEventListener("click", () => {
  sectionTwo.scrollIntoView({ behavior: "instant", block: "end" });
});

