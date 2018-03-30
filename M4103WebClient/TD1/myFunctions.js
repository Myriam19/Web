function init(){
    defTitre4();
    inverseTexte();
    datemodif();
    majHorloge1();
}

function defTitre1(){
    document.title = document.getElementById("titre").innerText;
}

function defTitre2(){
    document.title = document.querySelector("h2").innerText;
}

function defTitre3(){
    h2Var = document.querySelectorAll("h2");
    if(h2Var.length == 0){
        document.title = "Meriam Zekri";
    }else{
        document.title = h2Var[h2Var.length-1].innerText;
    }
}

function defTitre4(){
    hVar = document.getElementsByClassName("firstOrLast");
    if(hVar.length == 0){
        document.title = "Meriam Zekri";
    }else if((hVar.length % 2) == 0){
        document.title = hVar[0].innerText;
    }else{
        document.title = hVar[hVar.length-1].innerText;
    }
}

function inverseTexte(){
    allP = document.querySelectorAll("p");
    p1 = allP[0];
    p2 = allP[1];

    tmp = p1.innerHTML;
    p1.innerHTML = p2.innerHTML;
    p2.innerHTML = tmp;
}

function datemodif(){
    var author = document.getElementsByName("author")[0].getAttribute("content");
    var date = new Date(document.lastModified);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateString = date.toLocaleDateString('fr-FR', options);
    document.getElementById("date_modif").innerText = "Dernière modification : le " + dateString+" par "+ author;
    //date.toString("MMMM yyyy");
}

function majHorloge1(){
    intervalId = window.setInterval(getTime, 1000);
}

function getTime(){
    var time = new Date();
    var timeString = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
    document.getElementById("horloge").innerText =timeString;
}

function majHorloge2(){
    timeoutID = window.setTimeout(getTime, 1000);
}

function majNbJours(){
    var dateFinale = Date.parse("19 Jul 2018 00:00:00 GMT")/86400000;
    var dateAuj = Date.now()/86400000;
    var dateDiff = (dateFinale-dateAuj).toFixed(0);
    document.getElementById("19Juillet").innerText = document.getElementById("19Juillet").innerText.replace("xxx",dateDiff);

    if(dateDiff == 1){
        document.getElementById("19Juillet").innerText = document.getElementById("19Juillet").innerText.replace("jours","jour");
    }
}