
//blocco di codice che da posizione e rotazione randomica alla prima immagine
//funzione che sparge tutti gli elementi della classe "rotate1"
function randomizePictures(){
    var myArray = document.getElementsByClassName("rotate1");

    for(var i=0; i<myArray.length; i++){
        var posX = getRndInteger(0, 80);
        var posY = getRndInteger(0, 50);
        var rot = getRndInteger(-90, 90);

        myArray[i].style.transform = "rotate"(+ rot + "deg" );
        myArray[i].style.top = posY + "%";
        myArray[i].style.left = posX + "%";
    }
}

//altro metodo per spargere la prima immagine della classe fornita
//sparge solo il primo elemento della classe indicata
function RandomOnePicture(nomeClasse){
    var myArray = document.getElementsByClassName(nomeClasse);

    for(var i=0; i<myArray.length; i++){
        var posX = getRndInteger(-100, 500);
        var posY = getRndInteger(-100, 500);
        var rot = getRndInteger(-30, 30);

        myArray[0].style.transform = "rotate("+rot+"deg)";
        myArray[0].style.top = posY + "px";
        myArray[0].style.left = posX + "px";
    }
}


function RandomPhoto(){
    RandomOnePicture("rotate1");
}

//funzione da w3schools
//genera n random in un range
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function ResetPhoto(){
    var myArray = document.getElementsByClassName("rotate1");
    for(var i=0; i<myArray.length; i++){
        myArray[i].style.transform = "rotate(0deg)";
        myArray[i].style.top = "0%";
        myArray[i].style.left =  "0%";
    }
}

        ////////\
       //JSON//\\\               :p   :D :( :)
      ////////\\\\\
   /* \\\\\\\\/////  
       \\\\\\\\///  
        \\\\\\\\/ */


async function ImmaginiJSON(){
    const response = await fetch('Pfile.json');
    const polaroid = await response.json();
    console.log(polaroid)

    console.log(polaroid.immagini.length);

    for(var i=0; i<polaroid.immagini.length; i++){
        console.log(polaroid.immagini[i].didascalia);

        const div = document.createElement("div");
        document.getElementById("album").appendChild(div); 
        div.classList.add("divFoto");
        div.classList.add("rotate1");

        const img = document.createElement("img");
        img.src = polaroid.immagini[i].url;
        div.appendChild(img);

        const p = document.createElement("p");
        p.innerText = polaroid.immagini[i].didascalia;
        div.appendChild(p);
        p.classList.add("didascalia");
    }

    RandomPhoto();
}

ImmaginiJSON();