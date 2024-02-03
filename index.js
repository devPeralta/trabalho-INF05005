let posStatus = [9];
let posTag = [9];
let posAutomato = [9];
let botPlays = [5];
let rotateStatus = 0; 
var divMensagem = document.getElementById("automato");
var divRotate = document.getElementById("statRot");
let randPos;
let posBotTela;

function habilitaCliques(posTag){
    posTag[0] = da1;
    posTag[1] = la1;
    posTag[2] = db1;
    posTag[3] = la2;
    posTag[4] = c;
    posTag[5] = lb2;
    posTag[6] = db2;
    posTag[7] = lb1;
    posTag[8] = da2;

    return posTag;
}

function insereX2(quadradoX){
    switch (rotateStatus) {
        case 0:{
            insereAutomato(quadradoX,1);
        }
            break;
        case 1:{
            insereAutomato(rotateNum(rotateNum(rotateNum(quadradoX))),1);
        }
            break;
        case 2:
            insereAutomato(rotateNum(quadradoX),1);
            break;
        case 3:
            insereAutomato(rotateNum(rotateNum(rotateNum(quadradoX))),1);
            break;
        case 4:
            insereAutomato(rotateNum(quadradoX),1);
            break;
        case 5:
            insereAutomato(rotateNum(quadradoX),1);
            break;
        case 6:
            insereAutomato(rotateNum(quadradoX),1);
            break;
        case 7:
            insereAutomato(rotateNum(quadradoX),1);
            break;
        default:
            console.log("erro no insereX2");        
    }
}

function insereAutomato(quadradoX,who){   
    switch (quadradoX) {
        case 0:{
            if(who){
                document.getElementById("quadrado1").style.backgroundImage = "url('cross3.png')";
                document.getElementById("quadrado1").style.backgroundSize = "cover"; 
            }
            else{
                document.getElementById("quadrado1").style.backgroundImage = "url('circulo3.png')";
                document.getElementById("quadrado1").style.backgroundSize = "cover"; 
            }
        }
            break;
        case 1:{
            if(who){
                document.getElementById("quadrado2").style.backgroundImage = "url('cross3.png')";
                document.getElementById("quadrado2").style.backgroundSize = "cover"; 
            }
            else{
                document.getElementById("quadrado2").style.backgroundImage = "url('circulo3.png')";
                document.getElementById("quadrado2").style.backgroundSize = "cover"; 
            }
        }
            break;
        case 2:{
                if(who){
                    document.getElementById("quadrado3").style.backgroundImage = "url('cross3.png')";
                    document.getElementById("quadrado4").style.backgroundSize = "cover"; 
                }
                else{
                    document.getElementById("quadrado3").style.backgroundImage = "url('circulo3.png')";
                    document.getElementById("quadrado3").style.backgroundSize = "cover"; 
                }
            }
            break;
        case 3:{
            if(who){
                document.getElementById("quadrado4").style.backgroundImage = "url('cross3.png')";
                document.getElementById("quadrado4").style.backgroundSize = "cover"; 
            }
            else{
                document.getElementById("quadrado4").style.backgroundImage = "url('circulo3.png')";
                document.getElementById("quadrado4").style.backgroundSize = "cover"; 
            }
        }
            break;
        case 4:{
            if(who){
                document.getElementById("quadrado5").style.backgroundImage = "url('cross3.png')";
                document.getElementById("quadrado5").style.backgroundSize = "cover"; 
            }
            else{
                document.getElementById("quadrado5").style.backgroundImage = "url('circulo3.png')";
                document.getElementById("quadrado5").style.backgroundSize = "cover"; 
            }
        }
            break;
        case 5:{
            if(who){
                document.getElementById("quadrado6").style.backgroundImage = "url('cross3.png')";
                document.getElementById("quadrado6").style.backgroundSize = "cover"; 
            }
            else{
                document.getElementById("quadrado6").style.backgroundImage = "url('circulo3.png')";
                document.getElementById("quadrado6").style.backgroundSize = "cover"; 
            }
        }
            break;
        case 6:{
            if(who){
                document.getElementById("quadrado7").style.backgroundImage = "url('cross3.png')";
                document.getElementById("quadrado7").style.backgroundSize = "cover"; 
            }
            else{
                document.getElementById("quadrado7").style.backgroundImage = "url('circulo3.png')";
                document.getElementById("quadrado7").style.backgroundSize = "cover"; 
            }
        }
            break;
        case 7:{
            if(who){
                document.getElementById("quadrado8").style.backgroundImage = "url('cross3.png')";
                document.getElementById("quadrado8").style.backgroundSize = "cover"; 
            }
            else{
                document.getElementById("quadrado8").style.backgroundImage = "url('circulo3.png')";
                document.getElementById("quadrado8").style.backgroundSize = "cover"; 
            }
        }
            break;
        case 8:{
            if(who){
                document.getElementById("quadrado9").style.backgroundImage = "url('cross3.png')";
                document.getElementById("quadrado9").style.backgroundSize = "cover"; 
            }
            else{
                document.getElementById("quadrado9").style.backgroundImage = "url('circulo3.png')";
                document.getElementById("quadrado9").style.backgroundSize = "cover"; 
            }
        }
            break;
        default:
            console.log("erro no insereAutomato");

    }
}

function desabilitaCliques(posTag){
    posTag[0] = null;
    posTag[1] = null;
    posTag[2] = null;
    posTag[3] = null;
    posTag[4] = null;
    posTag[5] = null;
    posTag[6] = null;
    posTag[7] = null;
    posTag[8] = null;
}

for (let i = 0; i < 9; i++) {
    posStatus[i] = 0;
}

function insereCirculo(i, posClick, posStatus, posTag, clickDetect) {
    if (posClick == i && posStatus[i] == 0) {
        posTag[i].style.backgroundImage = "url('circulo.png')";
        posStatus[i] = 1;
        clickDetect = 1;
    }

    return { posStatus, clickDetect };
}

function boardStatus(rotateStatus,type){

    // 0 =  NORMAL  

    // 1 =  ROTATE RIGHT 

    // 2 =  ROTATE DUPLO 
    //      FLIP X + FLIP Y 
    //      FLIP Y + FLIP X

    // 3 =  ROTATE LEFT 

    // 4 =  FLIP X
    //      FLIP Y + ROTATE DUPLO 
    //      ROTATE DUPLO + FLIP Y

    // 5 =  FLIP Y
    //      FLIP X + ROTATE DUPLO
    //      ROTATE DUPLO + FLIP X

    // 6 =  FLIP X + ROTATE RIGHT
    //      FLIP Y + ROTATE LEFT
    //      ROTATE RIGHT + FLIP Y
    //      ROTATE LEFT + FLIP X

    // 7 =  FLIP Y + ROTATE RIGHT
    //      FLIP X + ROTATE LEFT
    //      ROTATE RIGHT + FLIP X
    //      ROTATE LEFT + FLIP Y

    switch (type) {
        case 1: // rotacao direita
            switch(rotateStatus){
                case 0: rotateStatus = 1;
                break;
                case 1: rotateStatus = 2;
                break;
                case 2: rotateStatus = 3;
                break;
                case 3: rotateStatus = 0;
                break;
                case 4: rotateStatus = 6;
                break;
                case 5: rotateStatus = 7;
                break;
                case 6: rotateStatus = 5;
                break;
                case 7: rotateStatus = 4;
                break;
            }
        break;
        case 2:
            switch(rotateStatus){
                case 0: rotateStatus = 2;
                break;
                case 1: rotateStatus = 3;
                break;
                case 2: rotateStatus = 0;
                break;
                case 3: rotateStatus = 1;
                break;
                case 4: rotateStatus = 5;
                break;
                case 5: rotateStatus = 4;
                break;
                case 6: rotateStatus = 7;
                break;
                case 7: rotateStatus = 6;
                break;
            }
        break;
        case 3: 
            switch(rotateStatus){
                case 0: rotateStatus = 3;
                break;
                case 1: rotateStatus = 0;
                break;
                case 2: rotateStatus = 1;
                break;
                case 3: rotateStatus = 2;
                break;
                case 4: rotateStatus = 7;
                break;
                case 5: rotateStatus = 6;
                break;
                case 6: rotateStatus = 4;
                break;
                case 7: rotateStatus = 5;
                break;
            }
            break;
        case 4:
            switch(rotateStatus){
                case 0: rotateStatus = 4;
                break;
                case 1: rotateStatus = 7;
                break;
                case 2: rotateStatus = 5;
                break;
                case 3: rotateStatus = 6;
                break;
                case 4: rotateStatus = 0;
                break;
                case 5: rotateStatus = 2;
                break;
                case 6: rotateStatus = 3;
                break;
                case 7: rotateStatus = 1;
                break;
            }
        break;
        case 5:
            switch(rotateStatus){
                case 0: rotateStatus = 5;
                break;
                case 1: rotateStatus = 6;
                break;
                case 2: rotateStatus = 4;
                break;
                case 3: rotateStatus = 7;
                break;
                case 4: rotateStatus = 2;
                break;
                case 5: rotateStatus = 0;
                break;
                case 6: rotateStatus = 1;
                break;
                case 7: rotateStatus = 3;
                break;
            }
        break;
        case 6:
            switch(rotateStatus){
                case 0: rotateStatus = 6;
                break;
                case 1: rotateStatus = 4;
                break;
                case 2: rotateStatus = 7;
                break;
                case 3: rotateStatus = 5;
                break;
                case 4: rotateStatus = 1;
                break;
                case 5: rotateStatus = 3;
                break;
                case 6: rotateStatus = 0;
                break;
                case 7: rotateStatus = 2;
                break;
            }
        break;
        case 7:
            switch(rotateStatus){
                case 0: rotateStatus = 7;
                break;
                case 1: rotateStatus = 5;
                break;
                case 2: rotateStatus = 6;
                break;
                case 3: rotateStatus = 4;
                break;
                case 4: rotateStatus = 3;
                break;
                case 5: rotateStatus = 1;
                break;
                case 6: rotateStatus = 2;
                break;
                case 7: rotateStatus = 0;
                break;
            }
        break;
        default:
        console.log("erro na funcao de atualizar status do tabuleiro");
    }
  
    return rotateStatus;
}

function rotateL(vet) {

    let vetL = vet.slice();

    vetL[6] = vet[0];
    vetL[3] = vet[1];
    vetL[0] = vet[2];
    vetL[7] = vet[3];
    vetL[4] = vet[4];
    vetL[1] = vet[5];
    vetL[8] = vet[6];
    vetL[5] = vet[7];
    vetL[2] = vet[8];

    return vetL;
}

function rotateR(vet) {

    let vetR = vet.slice();

    vetR[0] = vet[6];
    vetR[1] = vet[3];
    vetR[2] = vet[0];
    vetR[3] = vet[7];
    vetR[4] = vet[4];
    vetR[5] = vet[1];
    vetR[6] = vet[8];
    vetR[7] = vet[5];
    vetR[8] = vet[2];

    return vetR;
}

function flipX(vet){
    let vetL = vet.slice();

    vetL[6] = vet[0];
    vetL[0] = vet[6];
    vetL[1] = vet[7];
    vetL[7] = vet[1];
    vetL[2] = vet[8];
    vetL[8] = vet[2];
    vetL[3] = vet[3];
    vetL[4] = vet[4];
    vetL[5] = vet[5];

    return vetL;
}

function flipY(vet){
    let vetL = vet.slice();

    vetL[6] = vet[8];
    vetL[8] = vet[6];
    vetL[3] = vet[5];
    vetL[5] = vet[3];
    vetL[0] = vet[2];
    vetL[2] = vet[0];
    vetL[1] = vet[1];
    vetL[4] = vet[4];
    vetL[7] = vet[7];

    return vetL;
}

function rotateNum(x){
    switch(x){
        case 0: // pos0
            switch(rotateStatus){
                case 0: x = 0;
                break;
                case 1: x = 2;
                break;
                case 2: x = 8;
                break;
                case 3: x = 6;
                break;
                case 4: x = 6;
                break;
                case 5: x = 2;
                break;
                case 6: x = 0;
                break;
                case 7: x = 8;
                break;
            }
        break;
        case 1: // pos1
            switch(rotateStatus){
                case 0: x = 1;
                break;
                case 1: x = 5;
                break;
                case 2: x = 7;
                break;
                case 3: x = 3;
                break;
                case 4: x = 7;
                break;
                case 5: x = 1;
                break;
                case 6: x = 3;
                break;
                case 7: x = 5;
                break;
            }
        break;
        case 2: // pos2
            switch(rotateStatus){
                case 0: x = 2;
                break;
                case 1: x = 8;
                break;
                case 2: x = 6;
                break;
                case 3: x = 0;
                break;
                case 4: x = 8;
                break;
                case 5: x = 0;
                break;
                case 6: x = 6;
                break;
                case 7: x = 2;
                break;
            }
            break;
        case 3:
            switch(rotateStatus){
                case 0: x = 3;
                break;
                case 1: x = 1;
                break;
                case 2: x = 5;
                break;
                case 3: x = 7;
                break;
                case 4: x = 3;
                break;
                case 5: x = 5;
                break;
                case 6: x = 1;
                break;
                case 7: x = 7;
                break;
            }
            break;
        case 4:
            switch(rotateStatus){
                case 0: x = 4;
                break;
                case 1: x = 4;
                break;
                case 2: x = 4;
                break;
                case 3: x = 4;
                break;
                case 4: x = 4;
                break;
                case 5: x = 4;
                break;
                case 6: x = 4;
                break;
                case 7: x = 4;
                break;
            }
            break;
        case 5:
            switch(rotateStatus){
                case 0: x = 5;
                break;
                case 1: x = 7;
                break;
                case 2: x = 3;
                break;
                case 3: x = 1;
                break;
                case 4: x = 5;
                break;
                case 5: x = 3;
                break;
                case 6: x = 7;
                break;
                case 7: x = 1;
                break;
            }
            break;
        case 6:
            switch(rotateStatus){
                case 0: x = 6;
                break;
                case 1: x = 0;
                break;
                case 2: x = 2;
                break;
                case 3: x = 8;
                break;
                case 4: x = 0;
                break;
                case 5: x = 8;
                break;
                case 6: x = 2;
                break;
                case 7: x = 6;
                break;
            }
            break;
        case 7:
            switch(rotateStatus){
                case 0: x = 7;
                break;
                case 1: x = 3;
                break;
                case 2: x = 1;
                break;
                case 3: x = 5;
                break;
                case 4: x = 1;
                break;
                case 5: x = 7;
                break;
                case 6: x = 5;
                break;
                case 7: x = 3;
                break;
            }
            break;
        case 8:
            switch(rotateStatus){
                case 0: x = 8;
                break;
                case 1: x = 6;
                break;
                case 2: x = 0;
                break;
                case 3: x = 2;
                break;
                case 4: x = 2;
                break;
                case 5: x = 6;
                break;
                case 6: x = 8;
                break;
                case 7: x = 6;
                break;
            }
        break;
        default:
    }

    return x;
}

function matrizJogo(){
    
    let matrizJogo;

    for(let i=0;i<9;i++){
        if ((posTag[i].style.backgroundImage == "url('circulo.png')") || (posTag[i].style.backgroundImage == "url('cross2.png')")){
            matrizJogo[i] = 1;
        }
    }

    return matrizJogo;
}

function insereX(posTela) {

    posTela = rotateNum(posTela);

    posTag[posTela].style.backgroundImage = "url('cross2.png')";

    console.log(posStatus);
}

function turnCount() {
    let counter = 0;

    for (let i = 0; i < 9; i++) {
        if (posStatus[i] == 1) {
            counter++;
        }
    }

    return counter;
}

function clicked(posClick) {

    let clickDetect = 0;

    for (let i = 0; i < 9; i++) {
        switch (rotateStatus) {
            case 0: {
                ({ posStatus, clickDetect } = insereCirculo(i, posClick, posStatus, posTag, clickDetect));
            }
                break;
            case 1: {
                posStatus = rotateR(posStatus);
                ({ posStatus, clickDetect } = insereCirculo(i, posClick, posStatus, posTag, clickDetect));
                posStatus = rotateL(posStatus);
            }
                break;
            case 2: {
                posStatus = rotateR(posStatus);
                posStatus = rotateR(posStatus);
                ({ posStatus, clickDetect } = insereCirculo(i, posClick, posStatus, posTag, clickDetect));
                posStatus = rotateR(posStatus);
                posStatus = rotateR(posStatus);
            }
                break;
            case 3: {
                posStatus = rotateL(posStatus);
                ({ posStatus, clickDetect } = insereCirculo(i, posClick, posStatus, posTag, clickDetect));
                posStatus = rotateR(posStatus);
            }
            break;
            case 4:{
                posStatus = flipX(posStatus);
                ({ posStatus, clickDetect } = insereCirculo(i, posClick, posStatus, posTag, clickDetect));
                posStatus = flipX(posStatus);
            }
            break;
            case 5:{
                posStatus = flipY(posStatus);
                ({ posStatus, clickDetect } = insereCirculo(i, posClick, posStatus, posTag, clickDetect));
                posStatus = flipY(posStatus);
            }
            break;
            case 6:{
                posStatus = flipX(posStatus);
                posStatus = rotateR(posStatus);
                ({ posStatus, clickDetect } = insereCirculo(i, posClick, posStatus, posTag, clickDetect));
                posStatus = flipX(posStatus);
                posStatus = rotateR(posStatus);
            }
            break;
            case 7:{
                posStatus = flipY(posStatus);
                posStatus = rotateR(posStatus);
                ({ posStatus, clickDetect } = insereCirculo(i, posClick, posStatus, posTag, clickDetect));
                posStatus = flipY(posStatus);
                posStatus = rotateR(posStatus);
            }
            default:
                console.log("erro no reconhecimento do clique");
        }
        if (clickDetect == 1) {
            playBot();
            divMensagem.innerHTML = "R"+ rotateStatus + ":" + posStatus+ ":BP"+ botPlays[0];
        }
    }
}

function playBot(){
    // TURNO 1 ///////////////////////////////////////////////////////
    if(turnCount() == 0){
        posBotTela = Math.floor(Math.random() * 9);
        //posBotTela = 8;
        if(posBotTela == 0 || posBotTela == 1 || posBotTela == 4){  //sem rotacao
            insereX(posBotTela);
            posStatus[posBotTela] = 1;
            insereX2(posBotTela);
            botPlays[0] = posBotTela;
        }
        else if(posBotTela == 2 || posBotTela == 5){                // rotacao direita
            insereX(posBotTela);
            posStatus[posBotTela] = 1;
            posStatus = rotateL(posStatus);
            rotateStatus = boardStatus(rotateStatus,1);
            insereX2(posBotTela);
            botPlays[0] = rotateNum(rotateNum(rotateNum(posBotTela)));
        }
        else if(posBotTela == 3 || posBotTela == 6){                // rotacao esquerda
            insereX(posBotTela);
            posStatus[posBotTela] = 1;
            posStatus = rotateR(posStatus);
            rotateStatus = boardStatus(rotateStatus,3);
            insereX2(posBotTela);
            botPlays[0] = rotateNum(rotateNum(rotateNum(posBotTela)));
            }
        else{                                                       //rotacao dupla
            insereX(posBotTela);
            posStatus[posBotTela] = 1;
            posStatus = rotateR(posStatus);
            posStatus = rotateR(posStatus);
            rotateStatus = boardStatus(rotateStatus,2);
            insereX2(posBotTela);
            botPlays[0] = rotateNum(posBotTela);
        }
        divMensagem.innerHTML = "R"+ rotateStatus + ":" + posStatus+ ":BP"+ botPlays[0];
    }
    //// TURNO 3 ///////////////////////////////////////////////////////
    else if(turnCount == 2){
        
        divMensagem.innerHTML = "R"+ rotateStatus + ":" + posStatus+ ":BP"+ botPlays[0];
    }
}

habilitaCliques(posTag);
playBot();