let submit=document.querySelector("form")
const p1=document.querySelectorAll("p")[1]
const p2=document.querySelectorAll("p")[2]
submit.addEventListener('submit',(event)=>{
    event.preventDefault()
    let input=document.getElementById('inputElement')
    p1.innerHTML="Loading ..."
    p2.innerHTML=""
    fetch("/weather?address="+input.value+"").then(response=>{
        response.json().then(data=>{
            if(data.error){
               return p1.innerHTML=data.error
            }
            p1.innerHTML=data.location
            p2.innerHTML=data.forecast
        })
    })
})
