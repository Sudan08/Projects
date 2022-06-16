$("p").hide();

$(".background").hide();
$("button").on("click", nextsequence);




function random() {
    return Math.floor(Math.random() * 9) + 1;
}

function nextsequence(random_number) {
    var array = [];
    for (let i=1;i<=5;i++){
    $("h1").text("Level " + i);
    random_number = random();
    var box = ".box" + random_number;
    setTimeout(function () {
        $(box).addClass("background");
    }, 100);
    setTimeout(function () {
        $(box).removeClass("background");
    }, 1000);
    i = i + 1

    array.push(random_number);
    console.log(array);
    $(".griditem").on("click", function () {
        cli(random_number);
    });
}



};



function cli(random_number) {
    var arr

}