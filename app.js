
const buttons = document.querySelectorAll('.btn')
const storeItems = document.querySelectorAll('.store-item')
  //console.log(buttons)
  
    buttons.forEach((button) =>{
        button.addEventListener('click', e =>{
            e.preventDefault()
            
            const filter = e.target.dataset.filter

            if( filter === 'all'){
                storeItems.forEach( item => {
                    item.style.display = 'block '
                })
            }else{
                if(item.classList.contains(filter)){
                    item.style.display = 'block'
                }else{
                    item.style.display = 'none'
                }
            }
        })
    })
    
    const searchBox = document.querySelector('#search-item')
    

    searchBox.addEventListener('keyup', e =>{
        const searchFilter = e.target.value.toLowerCase().trim()
        
        storeItems.forEach((item) => {
            if (item.textContent.includes(searchFilter)){
                item.style.display = 'block'
            }else {
             item.style.display = 'none'
         }
        })
    })  

