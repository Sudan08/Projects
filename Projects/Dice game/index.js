function roll(){
var random_number1 = Math.floor(Math.random()*6)+1;

var random_img =random_number1+".png";

var random_src="diceimg/"+random_img;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",random_src);
animate(img1);


var random_number2 = Math.floor(Math.random()*6)+1;

var random_img2 =random_number2+".png";

var random_src2="diceimg/"+random_img2;

var img2 = document.querySelectorAll("img")[1];


img2.setAttribute("src",random_src2);
animate(img2);

if (random_number1 > random_number2 ) {
    const result = document.getElementsByClassName("result");
    result[0].innerText="Player 1 wins";
}
else if (random_number2 > random_number1 ){
    const result=document.getElementsByClassName("result");
    result[0].innerText="Player 2 wins";
}

else{
    const result=document.getElementsByClassName("result");
    result[0].innerText="Draw";
}
document.querySelector("button").innerText="Retry";
    function animate(img){
        var img = document.querySelector("."+img)
        img.classList.add("animate");
    }
}