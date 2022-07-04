window.onload = () => {
 

}
gameItemImg = document.querySelectorAll('.game-list-item')
Array.from(gameItemImg).map(item => {
    item.querySelector('.game-list-item-img').style.height = item.querySelector('.game-list-item-md').offsetHeight + 'px'
    item.querySelector('.game-list-item-right').style.height = item.querySelector('.game-list-item-md').offsetHeight + 'px'
})