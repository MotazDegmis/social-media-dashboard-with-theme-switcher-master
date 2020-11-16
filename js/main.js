const taggle = document.querySelector('.taggle');
const taggleIn = document.querySelector('.taggleIn');
const body = document.querySelector('.body');

let darkTheme = "off"


taggle.addEventListener("click", (e) => {
  darkThemeOnOff();
  
});



function darkThemeOnOff(){
  if (darkTheme === "off"){
    taggleIn.style.transform ="translateX(-25px)";
    body.classList.add("darkTheme");
    darkTheme = "on";
  }else{
    taggleIn.style.transform ="translateX(0px)";
    body.classList.remove("darkTheme");
    darkTheme = "off";
  }
}


