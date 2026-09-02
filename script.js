const input = document.querySelector("#note")
const submit = document.querySelector("#btn")
const dlt = document.querySelector("#dlt")


submit.addEventListener('click', function(){
  const msg = document.createElement("div")
  msg.innerHTML = `<div id="msg-card" class="flex flex-col justify-center gap-y-[10px] items-center border">
                    ${input.value}
                      <div class="flex justify-center items-center py-5 gap-[10px]">
                        <button id="dlt" class="size-[20px] hover:bg-red-400 bg-red-600"></button>
                        <button class="size-[20px] bg-green-600"></button>
                      </div>
                  </div>`

  if(input.value.trim() === ""){
    input.value = ""
    alert("Write something nigga")
  }
  else{
    input.value = ""
    const card = document.querySelector("#output")
    card.append(msg);
    console.log(msg)
  }
})


input.addEventListener("keydown", function (event) {
  if(event.code === "Enter"){
    const msg = document.createElement("div");
    msg.innerHTML = `<div id="msg-card" class="flex flex-col justify-center gap-y-[10px] items-center border">
                      ${input.value}
                        <div class="flex justify-center items-center py-5 gap-[10px]">
                          <button id="dlt" class="size-[20px] hover:bg-red-400 bg-red-600"></button>
                          <button class="size-[20px] bg-green-600"></button>
                        </div>
                    </div>`;

    if (input.value.trim() === "") {
      input.value = "";
      alert("Write something nigga");
    } else {
      input.value = "";
      const card = document.querySelector("#output");
      card.append(msg);
      console.log(msg);
    }
  }
});

dlt.addEventListener("click", function(){
  const card = document.querySelector("#msg-card")
  card.remove();
})


