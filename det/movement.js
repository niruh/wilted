const button = document.getElementById("move-two");
const sectionTwo = document.getElementById("two");

function movePage() {
button.addEventListener("click", () => {
  sectionTwo.scrollIntoView({ behavior: "instant", block: "end" });
});
}
