//Toggles nav bar in and out of the viewport
export const displayMenu =(toggleId, navId)=>{
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if(toggle && nav){
    console.log("I'm working");

    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show');
    })
  }
}
