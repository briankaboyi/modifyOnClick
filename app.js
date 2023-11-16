const mainDiv = document.getElementById("main-div");
navbar = document.getElementById("nav");



// events//
navbar.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target.innerHTML);
  console.log(mainDiv.children[0]);
  hideElements();
  if (e.target.innerHTML === "one") {
    let contentBox = mainDiv.children[0];

    if (contentBox.classList.contains("hidden")) {
      contentBox.classList.remove("hidden");
    }
  } else if (e.target.innerHTML === "two") {
    let contentBox = mainDiv.children[1];
    contentBox.classList.remove("hidden");
  } else if (e.target.innerHTML === "three") {
    let contentBox = mainDiv.children[2];
    contentBox.classList.remove("hidden");
  }
});


// functions///////

function hideElements() {
  let itemArray = mainDiv.childNodes;
  itemArray.forEach((item) => {
    if (item.classList === undefined) {
      return;
    }
    console.log(item);
    if (item.classList.length !== 2) {
      item.classList.add("hidden");
    }
  });
}
