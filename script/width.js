const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')

if(sidebar){
    const w = container.offsetWidth ;
    container.style.width = `${w}px`
}