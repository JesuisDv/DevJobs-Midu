// const botonApply = document.querySelectorAll(".button-apply-job")

// botonApply.forEach(boton => {
//     boton.addEventListener("click", ()=>{
//         boton.textContent= "Aplicado"
//         boton.style.backgroundColor = "green"
//         boton.style.cursor = "not-allowed"
//         boton.disabled = true
//     })
// })

const jobsListigSection = document.querySelector(".jobs-listings");

jobsListigSection?.addEventListener("click", function(event){ //el ? es optional chaning que comprueba si una variable es null o undefinen
    console.log(event.target)//Event.target devuelve el elemtno al que se le da click
    const element = event.target

    if(element.classList.contains("button-apply-job")){
        element.textContent= "Aplicado"
        element.style.backgroundColor = "green"
        element.style.cursor = "not-allowed"
        element.disabled = true
    }
})