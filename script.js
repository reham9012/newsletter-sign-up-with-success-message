const form=document.querySelector("form")//form
const container=document.querySelector(".container")//car1
const successMessage=document.querySelector(".success-message")//car2
let email=document.querySelector("#email")
let errorElement=document.querySelector(".error")
let formValid=false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
   
      if(!email.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){ 
       
         errorElement.style.display='block'
   
         email.style.borderColor='red';
         email.style.color='red';
         email.style.backgroundColor=' rgb(253, 227, 227)'
         formValid=false;
         }else{
      
           errorElement.style.display='none'
           email.style.borderColor='black'
           email.style.color='black';
         
           formValid=true;
      } 
      if(formValid==true){
        container.classList.add("d-none");
        successMessage.classList.remove("d-none");
      }
   

  
});
