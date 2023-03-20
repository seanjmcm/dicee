

var observer = new PerformanceObserver(list => {
    list.getEntries().forEach(entry => {
    // Display each reported measurement on console       
    if (entry.type === "reload") {
        showD();
    }
    })
});

observer.observe({ type: "navigation", buffered: true });


function showD(){

    var imList = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

    var rand1 = Math.floor(Math.random()*6)
    var rand2 = Math.floor(Math.random()*6)

    path1 = imList[rand1];
    path2 = imList[rand2];

    document.querySelector(".img1").setAttribute("src",path1);

    document.querySelector(".img2").setAttribute("src",path2);

    if (rand1 == rand2){
        document.querySelector("h1").innerHTML= "Draw";}
        else if (rand1 > rand2){
            document.querySelector("h1").innerHTML= "🚩PLayer 1 Wins";}
            else if (rand2 > rand1){
                document.querySelector("h1").innerHTML= "Player 2 Wins🚩";}
    }