const input = document.querySelector("#note")
const submit = document.querySelector("#btn")


submit.addEventListener('click', function(){
  const msg = document.createElement("div")
  msg.textContent = input.value
  input.value = ""
  const card = document.querySelector("#output")
  card.append(msg);
  console.log(msg)
})