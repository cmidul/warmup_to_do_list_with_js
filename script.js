const note = document.getElementById("note");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", function fun1() {
    console.log(note.value);
  output.innerHTML = note.value;
});