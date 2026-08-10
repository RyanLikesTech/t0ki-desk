const textarea = document.querySelector(".notepad textarea");
const saveButton = document.querySelector(".notepad button");

saveButton.addEventListener("click", function() {
  localStorage.setItem("studyNote", textarea.value);
  alert("Note saved!");
});
