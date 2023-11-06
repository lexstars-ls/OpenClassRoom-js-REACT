
const card = document.querySelectorAll('.card')

// pour chaque élément avec le param carte
card.forEach((planeCard)=>{
      // quand je click sur des éléments =>
 planeCard.addEventListener('click', ()=>{
    // je déf la variable qui va etre modifer quand je click sur un élément de mon doc
    const dispo = planeCard.querySelector('.availability') 
     // je modifie le display
   dispo.style.display ="block"
  
 })
})


