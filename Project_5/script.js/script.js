let heart = document.getElementsByClassName("fa-heart").parentElement;
let photo = document.querySelectorAll(".all-image div img")
// console.log(heart.length)
let styles=[]
for(let i =0 ;i<heart.length;i++){
    let style = getComputedStyle(heart[i].parentElement)
    styles[i] = style.color

}

console.log(styles)


function clickHeart(ele){
    let color =heart.findIndex(ele);
    if(styles[color] == 'rgb(0,0,0)'){
        styles[color].style.color = '#c72092';
    }
    else{
        styles[color].style.color = 'rgb(0,0,0)';
    }
}
let arr = Array.from(heart)
// for(let i =0;i<heart.length;i++){
//     arr[i].addEventListener('click', function(ele) {
//         clickHeart(ele);
//     })
// }

// console.log(arr[1].s)

arr.forEach(ele =>{
    ele.onclick =function(e) {
        clickHeart(e);
    }})

// console.log(heart[1].parentElement)
// heart[1].parentElement.addEventListener("click", function() {

//     clickHeart(this);
// })


// for(let i=0;i<photo.length;i++){
//     console.log(photo[i])
//     let s = getComputedStyle(photo[i])
//     console.log(s.getPropertyValue.src)
// }