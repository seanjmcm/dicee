var count =0; 
var player1 ;
var player2 ;

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
            document.querySelector("h1").innerHTML= "🚩"+player1+ " Wins";}
            else if (rand2 > rand1){
                document.querySelector("h1").innerHTML= player2 + " Wins🚩";}
    }


var observer = new PerformanceObserver(list => {
    list.getEntries().forEach(entry => {
    // Display each reported measurement on console    
 
    if (entry.type === "reload") {
        player1=sessionStorage.getItem('p1')
        player2=sessionStorage.getItem('p2')
        showD(); //call pictures if reloaded
        
    }
    if (entry.type != "reload") {
        if (count === 0){
        player1 = prompt("Enter PLayer 1 Name");
        player2 = prompt("Enter PLayer 2 Name");
        sessionStorage.setItem("p1", player1);
        sessionStorage.setItem("p2", player2);
        count++;}
    }
    })
});

observer.observe({ type: "navigation", buffered: true });


