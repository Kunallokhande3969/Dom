var a = document.querySelector("h3");
var b = document.querySelector("button");
flag = 0;
b.addEventListener("click", function () {
  var n = Math.floor(Math.random() * 5);
  a.innerHTML = "Sending request";
  a.style.color = "blue";
  b.innerHTML = "adding freind";
  if (flag == 0) {
    setTimeout(function () {
      a.innerHTML = "friend";
      a.style.color = "green";
      b.innerHTML = "Remove freind";
      flag = 1;
    }, n * 1000);
  } else {
    a.innerHTML = " strainger";
    a.style.color = "black";
    b.innerHTML = "Add freind";
    flag = 0;
  }
});
