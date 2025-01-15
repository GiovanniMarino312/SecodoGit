async function effettuaGet(url) {
    const response = await fetch(url, {mode:"no cors"} );
    console.log(response);   
}


function Conferma(){
  var Nome = document.getElementById("fname2").value;
  var Cognome = document.getElementById("lname2").innerText;
  var url = "https://webhook.site/#!/view/3b19a10e-4950-494b-860f-2e4a083a68c0" ;
  console.log(Nome + " " + Cognome);
  //alert(Nome + " " + Cognome);//
  var fullurl = url + "?Nome=" + Nome + "&Cognome" + Cognome;
  console.log(fullurl);
  effettuaGet(fullurl);
}