const toggleBtn = document.querySelector("#toggle-btn");
const body = document.body;
let isDarkMode = false;
toggleBtn.addEventListener('click',()=>{
  if(!isDarkMode){
    toggleBtn.textContent = "Toggle to  Light Mode";
    isDarkMode = true;
  }else{
    toggleBtn.textContent = "Toggle to  Dark Mode";
    isDarkMode = false;
  }
    body.classList.toggle('dark-mode');
})
