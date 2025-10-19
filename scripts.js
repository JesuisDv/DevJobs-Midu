// const botonApply = document.querySelectorAll(".button-apply-job")

// botonApply.forEach(boton => {
//     boton.addEventListener("click", ()=>{
//         boton.textContent= "Aplicado"
//         boton.style.backgroundColor = "green"
//         boton.style.cursor = "not-allowed"
//         boton.disabled = true
//     })
// })

//const SearchInput = document.querySelector('#empleos-search-input')

// SearchInput.addEventListener('input', function(){
//     console.log(SearchInput.value)
// })


const jobsListigSection = document.querySelector(".jobs-listings");

jobsListigSection?.addEventListener("click", function(event){ //el ? es optional chaning que comprueba si una variable es null o undefinen
    console.log(event.target)//Event.target devuelve el elemtno al que se le da click
    const element = event.target

    if(element.classList.contains("button-apply-job")){
        element.textContent= "Aplicado"
        element.classList.add( 'is-applied')
        element.disabled = true
    }
})

const filter = document.querySelector('#filter-location')
const mensaje = document.querySelector('#filter-selected-value')
const jobs = document.querySelectorAll('.job-listing-card') 

filter.addEventListener('change', function(){
    const selectedValue = filter.value

    if(selectedValue){
        mensaje.textContent  = `Haz seleccionado ${selectedValue}`
    }else{
        mensaje.textContent = ''
    }

    jobs.forEach(job => {
        // const modalidad = job.dataset.modalidad
        const modalidad = job.getAttribute('data-modalidad') //otra manera de otener el data
        
        if(selectedValue === '' || selectedValue === modalidad){
            job.style.display = 'flex' //muestra
        }else{
            job.style.display = 'none' //oculta
        }
    })

})

// 
