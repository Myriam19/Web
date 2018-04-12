var bodyyyy;

function init(){
    defTitre4();
    inverseTexte();
    datemodif();
    majHorloge1();
    majGrafH();
    derouler(-1);
    sauvegarde();
}
function sauvegarde(){
    bodyyyy = document.querySelector("body").innerHTML;
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
    timeoutID = window.setTimeout(majHorloge2, 1000);
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

function displayTime(){
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    var hourFirst = Math.trunc(hours/10);
    var minuteFirst = Math.trunc(minutes/10);
    var secondFirst = Math.trunc(seconds/10);

    var hourSecond = hours-(hourFirst*10);
    var minuteSecond = minutes-(minuteFirst*10);
    var secondSecond = seconds-(secondFirst*10);

    var images = document.querySelectorAll("img");

    images[0].setAttribute("src", "images/"+hourFirst+".gif");
    images[1].setAttribute("src", "images/"+hourSecond+".gif");
    images[2].setAttribute("src", "images/"+minuteFirst+".gif");
    images[3].setAttribute("src", "images/"+minuteSecond+".gif");
    images[4].setAttribute("src", "images/"+secondFirst+".gif");
    images[5].setAttribute("src", "images/"+secondSecond+".gif");
}

function majGrafH(){
    intervalId = window.setInterval(displayTime, 1000);
}

function changeColor(){
    var input = document.querySelector("input");
    if(input.value != "" && isNaN(input.value)){
        input.setAttribute("class","rouge");
    }else if(input.value == ""){
        input.setAttribute("class","blanc");
    }else{
        input.setAttribute("class","vert");
    }
}

function derouler(i){
    var menu = document.getElementById("menu");
    var lis = menu.children;

    //Initialisation
    for(var j=0; j<lis.length; j++){
        var listStyle = lis[j].getAttribute("style");
        if(listStyle == null){
            lis[j].setAttribute("style","list-style-image: url('images/plus.gif');");
        }
    }

    if(i!=-1){
        listStyle = lis[i].getAttribute("style");
        if(listStyle.valueOf() == "list-style-image: url('images/plus.gif');"){
            lis[i].setAttribute("style","list-style-image: url('images/minus.gif');");
            ul = lis[i].firstElementChild;
            ul.setAttribute("style","display: block;");
        }else{
            lis[i].setAttribute("style","list-style-image: url('images/plus.gif');");
            ul = lis[i].firstElementChild;
            ul.setAttribute("style","display: none;");
        }
    }
}
function recherche(string){

    document.body.innerHTML = bodyyyy;

    var strings = string.split(" ");

    for(i=0; i<strings.length; i++){
        if(strings[i] != null && strings[i]!="") {
            regExp = new RegExp('(' + strings[i] + ')', 'gi');
            document.body.innerHTML = document.body.innerHTML.replace(regExp, "<span class='rech'>" + strings[i] + "</span>");
        }
    }

}