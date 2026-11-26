console.log("BennettONE website loaded!");

const externalLinks = document.querySelectorAll('a[target="_blank"]');

externalLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    console.log("Opening link: " + link.href);
  });
});

function toggleTip() {
  const note = document.getElementById("wifiNote");
  const btn = document.getElementById("tipBtn");

  if (note.style.display === "none") {
    note.style.display = "block";
    btn.innerText = "Hide Connection Tip";
  } else {
    note.style.display = "none";
    btn.innerText = "Show Connection Tip";
  }
}
