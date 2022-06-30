const images = [
'./images/eso1907a.jpg',
'./images/1_mk1-6aYaf_Bes1E3Imhc0A.jpeg',
'./images/eso1436a.jpg'
];
let root = document.getElementById("root");
let allDiv = document.getElementsByTagName("div");


function gamesJs(){
    for (let  i = 0; i < images.length; i++) {
        root.innerHTML += '<div> <img src="'+images[i]+'"></div>';
    }
}
gamesJs();
gamesJs();
let flag = true;
let arr = [];
for(let i = 0; i < allDiv.length; i++) {
allDiv[i].addEventListener('click', function(){
    console.log(this)
    if(flag){
    this.firstElementChild.style.opacity = '1';
    if(arr.length == 0){
        arr[0] = this;
    }else if(arr.length == 1){
        arr[1] = this;
    }if(arr.length == 2){
         flag = false;
         setTimeout(checkChild, 200);
    }
    }else{
        return;
    }
})
}
function checkChild(){
    if(arr[0].firstElementChild.getAttribute('src') == arr[1].firstElementChild.getAttribute('src')){
        alert('ok')
    }else{
        arr[0].firstElementChild.style.opacity = 0;
        arr[1].firstElementChild.style.opacity = 0;

    }
    arr = [];
    flag = true;
}