const input = document.querySelector("#note")
const submit = document.querySelector("#btn")



submit.addEventListener('click', function(){
  const msg = document.createElement("div")
  msg.innerHTML = `<div class="msg-card flex flex-col justify-center gap-y-[10px] items-center border">
                    ${input.value}
                      <div class="flex justify-center items-center py-5 gap-[10px]">
                        <button class="dlt size-[20px] hover:bg-red-400 bg-red-600"></button>
                        <button class="size-[20px] bg-green-600"></button>
                      </div>
                  </div>`


  const dlt = msg.querySelector(".dlt");
  dlt.addEventListener("click", function () {
    msg.remove();
  });

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
});


input.addEventListener("keydown", function (e) {
  if(e.code === "Enter"){
    const msg = document.createElement("div");
    msg.innerHTML = `<div class="msg-card flex flex-col justify-center gap-y-[10px] items-center border bg-white">
                      ${input.value}
                        <div class="flex justify-center items-center py-5 gap-[10px]">
                          <button class="dlt size-[20px] hover:bg-red-400 bg-red-600"></button>
                          <button class="size-[20px] bg-green-600"></button>
                        </div>
                    </div>`;

    const dlt = msg.querySelector(".dlt");
    dlt.addEventListener("click", function () {
      msg.remove();
    });

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




