for (var i = 0; i < document.querySelectorAll(".key").length; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
            var btn = this.innerText;
            makesound(btn);

            buttonclick(btn);
            
        });
    

    document.addEventListener("keypress",function(event){
        makesound(event.key);
        buttonclick(event.key);
    })

    function makesound(key){
    switch (key) {
        case "a":
            var audio1 = new Audio("sounds/Deez Nuts Sound Effect.mp3");
            audio1.play();
            break;
        case "s":
            var audio2 = new Audio("sounds/uwu-By-Tuna.mp3");
            audio2.play();
            break;
        case "d":
            var audio3 = new Audio("sounds/steven-universe-garnet-_dont-be-racist_-By-Tuna.mp3");
            audio3.play();
            break;
        case "f":
            var audio4 = new Audio("sounds/nani!-By-Tuna.mp3");
            audio4.play();
            break;
        case "g":
            var audio5 = new Audio("sounds/amogus-By-Tuna.mp3");
            audio5.play();
            break;
        case "h":
            var audio6 = new Audio("sounds/1-By-Tuna.mp3");
            audio6.play();
            break;
        default:
            console.log("ERROR");



    }
}

    function buttonclick(clicked){
        var click = document.querySelector("."+clicked);
        click.classList.add("animation");
        setTimeout(function(){
            click.classList.remove("animation")
        },1000)
    }

}