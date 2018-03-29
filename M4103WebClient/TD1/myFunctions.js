

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

    tmp = p1.innerText;
    p1.innerText = p2.innerText;
    p2.innerText = tmp;
}