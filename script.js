
// document.addEventListener('DOMContentLoaded', function() 
// {
//     const ajax = new XMLHttpRequest();
//     const buttonGetData = document.getElementById('btn');
   
//     const list = document.getElementById('lists');
//     const url = "test.json";
//     buttonGetData.addEventListener('click', function(){
//         ajax.onload = function()
//         {
//             if ( ajax.status == 200)
//                 {
//                     const datas = JSON.parse(ajax.responseText)
//                     // list.textContent = "";
//                     for(const data of datas)
//                         {
//                             const lists = document.createElement('li');
//                             lists.textContent = data;
//                             list.append(lists);
//                         }
//                 }
//             else{

//                 console.log(ajax.statusText);
//             }    
//         }
//         ajax.open("GET", url);
//         ajax.send();
        
//     })
// })



function submitForm(){
    const email = document.getElementById('email');
    const nameInput = document.getElementById('nama');
    const number = document.getElementById('hp');
    const event = document.getElementById('selectedEvent');


    const buttonSubmit = document.getElementById('btn');
    var error = [];
    if(nameInput.value.length < 3)
        {
            error.push('Name must be at least 3 characters long')
        }    
    if ( !email.value.includes('@'))
        {
            error.push('Email must contain @')
        }
    if ( !number.value.match(/^08\d{8,14}$/)) 
        {
            error.push('Phone number must start with 08 and between 10 & 14 digits')
        }   
      if(!event.value)
        {
            error.push('Select an event to continue');
        }  

        if ( error.length > 0){
                alert(error.join('\n'));
               
            }
            else{
                
              

                alert('Form submitted');
            }
  
}