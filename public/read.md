let canvas;
let catFact = null;
let URL = 'https://catfact.ninja/fact'
let randomUser = {
 dataUser: 'results'
}
function getData(){
    
}

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

    console.log(fetch(URL).then(response =>
        response.json()))
        fetch(URL)
        .then(response => response.json())
        .then(data => { catFact = data 
        console.log(catFact.fact)})
/*

   fetch('https://randomuser.me/api/')
   .then(raw => raw.json())
   .then(data => {
    console.log(data.results)
    const infoUser = data.results.map((char) =>{
        const info = {
            results: char.results
        };
        return randomUser
    })
    users = infoUser;
   // console.log(infoUser)
   })*/
}

function draw() {
    //background(0, 50);
    background(0);
    newCursor();
    if(catFact != null){
            textSize(20)
    textWrap(WORD)
    text(catFact.fact, 50, 50, 300)}
}

function mouseClicked(){
/*characters
*/
let facts = catFact.fact
facts.forEach(fcts => {
    fcts.mouseClicked()
});
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}