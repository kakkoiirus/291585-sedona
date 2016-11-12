var btnFind = document.querySelector(".btn-find");
var formFind = document.querySelector(".hotels-form");

btnFind.addEventListener("click", function(event) {
  event.preventDefault();
  formFind.classList.toggle("hotels-form-open");
});
