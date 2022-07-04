const menu = document.querySelectorAll('.sidebar ul li')
Array.from(menu).map(item => {
    item.onclick = () => {
        Array.from(menu).map(i => {
            i.classList.remove('active')
            
        })
        item.classList.toggle('active')
    }
})
const mbMenu = document.querySelectorAll('.swiper3 .swiper-slide ul li')
console.log(mbMenu);
Array.from(mbMenu).map(item => {
    item.onclick = () => {
        Array.from(mbMenu).map(i => {
            i.classList.remove('active')
            
        })
        item.classList.toggle('active')
    }
})