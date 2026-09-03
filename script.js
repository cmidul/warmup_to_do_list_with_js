const input = document.querySelector("#note")
const submit = document.querySelector("#btn")



submit.addEventListener('click', function(){
  const msg = document.createElement("div")
  msg.innerHTML = `<div class="msg-card flex flex-col justify-center gap-y-[10px] items-center border">
                    <span class="note-text">${input.value}</span>
                      <div class="flex justify-center items-center py-5 gap-[10px]">
                        <button class="dlt w-[60px] h-[20px] rounded-md hover:bg-red-400 bg-red-600 text-[12px] text-white font-semibold">Remove</button>
                        <button class="edit w-[60px] h-[20px] rounded-md hover:bg-green-400 bg-green-600 text-[12px] text-white font-semibold">Edit</button>
                      </div>
                  </div>`;


  const dlt = msg.querySelector(".dlt");
  dlt.addEventListener("click", function (e) {
    e.stopPropagation();
    msg.remove();
  });

  const edit = msg.querySelector(".edit");
  edit.addEventListener("click", function(e){
    e.stopPropagation();
    let newtext = msg.querySelector(".note-text");
    input.value = newtext.textContent.trim();
    submit.addEventListener("click", function(){
      msg.textContent = input.value;
    })
  });

  const chk = msg.querySelector(".msg-card");
  chk.addEventListener("click", function(){
    const cmplt = msg.querySelector(".msg-card");
    const color = window.getComputedStyle(cmplt).backgroundColor;
    if (color === "rgb(0, 128, 0)") {
      cmplt.style.backgroundColor = 'white';
    } else {
      cmplt.style.backgroundColor = 'green';
    }
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





