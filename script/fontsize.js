window.onload = () => {
    
    const pTag = document.querySelectorAll('p')
    const h2Tag = document.querySelectorAll('h2')
    const spanTag = document.querySelectorAll('span')
        Array.from(pTag).map(item => {
            if(item.style.fontSize == 50){
    
                item.classList.add('fz-mb')
            } 
        })
        Array.from(h2Tag).map(item => {
            if(item.style.fontSize < 50){
    
                item.classList.add('fz-mb')
            }
        })
        Array.from(spanTag).map(item => {
            if(item.style.fontSize < 50){
    
                item.classList.add('fz-mb')
            }
            
        })
}
