let posStatus = [9];
let posTag = [9];
let botPlays = [5];
let rotateStatus = 0; // 0 = sem rotate / 1 = rotate right / 2 = rotate rotate / 3 = rotate left
var divMensagem = document.getElementById("automato");

const Rotate = {
    0: "normal",
    1: "right",
    2: "duplo",
    3: "left"
};

posTag[0] = da1;
posTag[1] = la1;
posTag[2] = db1;
posTag[3] = la2;
posTag[4] = c;
posTag[5] = lb2;
posTag[6] = db2;
posTag[7] = lb1;
posTag[8] = da2;

for (let i = 0; i < 9; i++) {
    posStatus[i] = 0;
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

    if (rotateStatus == 0) {
        rotateStatus = 3;
    }
    else if (rotateStatus == 1) {
        rotateStatus = 0;
    }
    else if (rotateStatus == 2) {
        rotateStatus = 1;
    }
    else if (rotateStatus == 3) {
        rotateStatus = 2;
    }

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

    if (rotateStatus == 0) {
        rotateStatus = 1;
    }
    else if (rotateStatus == 1) {
        rotateStatus = 2;
    }
    else if (rotateStatus == 2) {
        rotateStatus = 3;
    }
    else {
        rotateStatus = 0;
    }

    return vetR;
}

function rotateNum(x){
    switch(x){
        case 0:
            switch(rotateStatus){
                case 0:
                break;
                case 1:
                    x = 6;
                break;
                case 2:
                    x = 8;
                break;
                case 3:
                    x = 2;
                break;
                default:
                console.clear();
                console.log("Erro no rotateNum: input(" + x + ")");
            }
            break;
        case 1:
            switch(rotateStatus){
            case 0:
            break;
            case 1:
                x = 3;
            break;
            case 2:
                x = 7;
            break;
            case 3:
                x = 5;
            break;
            default:
            console.clear();
            console.log("Erro no rotateNum: input(" + x + ")");
        }
        break;
        case 2:
            switch(rotateStatus){
            case 0:
            break;
            case 1:
                x = 0;
            break;
            case 2:
                x = 6;
            break;
            case 3:
                x = 8;
            break;
            default:
            console.clear();
            console.log("Erro no rotateNum: input(" + x + ")");
        }
            break;
        case 3:
            switch(rotateStatus){
            case 0:
            break;
            case 1:
                x = 7;
            break;
            case 2:
                x = 5;
            break;
            case 3:
                x = 1;
            break;
            default:
            console.clear();
            console.log("Erro no rotateNum: input(" + x + ")");
        }
            break;
        case 4:{

        }
            break;
        case 5:
            switch(rotateStatus){
            case 0:
            break;
            case 1:
                x = 1;
            break;
            case 2:
                x = 3;
            break;
            case 3:
                x = 7;
            break;
            default:
            console.clear();
            console.log("Erro no rotateNum: input(" + x + ")");
        }
            break;
        case 6:
            switch(rotateStatus){
            case 0:
            break;
            case 1:
                x = 8;
            break;
            case 2:
                x = 2;
            break;
            case 3:
                x = 0;
            break;
            default:
            console.clear();
            console.log("Erro no rotateNum: input(" + x + ")");
        }
            break;
        case 7:
            switch(rotateStatus){
            case 0:
            break;
            case 1:
                x = 5;
            break;
            case 2:
                x = 1;
            break;
            case 3:
                x = 3;
            break;
            default:
            console.clear();
            console.log("Erro no rotateNum: input(" + x + ")");
        }
            break;
        case 8:
            switch(rotateStatus){
            case 0:
            break;
            case 1:
                x = 2;
            break;
            case 2:
                x = 0;
            break;
            case 3:
                x = 6;
            break;
            default:
            console.clear();
            console.log("Erro no rotateNum: input(" + x + ")");
        }
            break;
        default:
        console.clear();
        console.log("Erro no rotateX (x)");
    }

    return x;
}

function insereX(posTela) {

    posTela = rotateNum(posTela);

    posTag[posTela].style.backgroundImage = "url('cross2.png')";
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

function playBot() {
    //TURNO 1 ##################################################################
    if (turnCount() == 0) {
        //let posBotTela = Math.floor(Math.random() * 9);
        let posBotTela = 4;
        if (posBotTela == 0 || posBotTela == 1 || posBotTela == 4) {    //sem rotate player
            insereX(posBotTela);
            posStatus[posBotTela] = 1;
        }
        else if (posBotTela == 2 || posBotTela == 5) {                  //rotate left player
            insereX(posBotTela);
            posStatus[posBotTela] = 1;
            posStatus = rotateL(posStatus, rotateStatus);
        }
        else if (posBotTela == 6 || posBotTela == 3) {                  //rotate right player
            insereX(posBotTela);
            posStatus[posBotTela] = 1;
            posStatus = rotateR(posStatus, rotateStatus);
        }
        else{                                                          //rotate duplo player
            insereX(posBotTela);
            posStatus[posBotTela] = 1;
            posStatus = rotateR(rotateR(posStatus, rotateStatus), rotateStatus);
        }

        posBotTela = rotateNum(rotateNum(rotateNum(posBotTela)));
        botPlays[0] = posBotTela;
        console.log("Primeira jogada do bot = " + botPlays[0]);
    }
    //TURNO 3 ##################################################################
    else if (turnCount() == 2) {
    //Q5
        if(botPlays[0] == 4){
            //nao houve rotate
            if (posStatus[0] == 1 && posStatus[4] == 1) {
                insereX(2);
                posStatus[2] = 1;
            }
            //houve rotate right
            else if (posStatus[2] == 1 && posStatus[4] == 1) {
                posStatus = rotateL(posStatus, rotateStatus);
                insereX(2);
                posStatus[2] = 1;
            }
            //houve rotate left
            else if (posStatus[6] == 1 && posStatus[4] == 1) {
                posStatus = rotateR(posStatus, rotateStatus);
                insereX(2);
                posStatus[2] = 1;
            }
            //houve rotate duplo
            else if (posStatus[8] == 1 && posStatus[4] == 1) {
                posStatus = rotateR(rotateR(posStatus, rotateStatus), rotateStatus);
                insereX(2);
                posStatus[2] = 1;
            }
            else{
                divMensagem.innerHTML = "PERDEU";
                // TO DO
            }
        }
    //Q21
        else if(botPlays[0] == 0){
            if (posStatus[0] == 1 && posStatus[4] == 1) {
                insereX(8);
                posStatus[8] = 1;
            }
            else{
                divMensagem.innerHTML = "PERDEU";
                // TO DO
            }
        }
    //Q14 ou Q15
        else if(botPlays[0] == 1){
            if (posStatus[1] == 1 && posStatus[4] == 1 || (posStatus[1] == 1 && posStatus[7] == 1))  {
                insereX(0);
                posStatus[0] = 1;
            }
            else if ((posStatus[1] == 1 && posStatus[3] == 1) || (posStatus[1] == 1 && posStatus[5] == 1)) {
                divMensagem.innerHTML = "PERDEU";
                // TO DO
            }
            else{
                insereX(4);
                posStatus[4] = 1;
            }
        }
    }
    //TURNO 3 ##################################################################
    else if(turnCount() == 4){
        
    }
}

function clicked(posClick) {

    let clickDetect = 0;

    for (let i = 0; i < 9; i++) {
        switch (rotateStatus) {


            case 0: {
                if (posClick == i && posStatus[i] == 0) {
                    posTag[i].style.backgroundImage = "url('circulo.png')";
                    posStatus[i] = 1;
                    clickDetect = 1;
                    console.log("rot0 = " + posStatus);
                }
            }
                break;
            case 1: {
                posStatus = rotateL(posStatus, rotateStatus);
                if (posClick == i && posStatus[i] == 0) {
                    posTag[i].style.backgroundImage = "url('circulo.png')";
                    posStatus[i] = 1;
                    clickDetect = 1;
                }
                posStatus = rotateR(posStatus, rotateStatus);
                console.log("rot1 = " + posStatus);
            }
                break;
            case 2: {
                posStatus = rotateL(rotateL(posStatus, rotateStatus), rotateStatus);
                if (posClick == i && posStatus[i] == 0) {
                    posTag[i].style.backgroundImage = "url('circulo.png')";
                    posStatus[i] = 1;
                    clickDetect = 1;
                }
                posStatus = rotateL(rotateL(posStatus, rotateStatus), rotateStatus);
                console.log("rot2 = " + posStatus);
            }
                break;
            case 3: {
                posStatus = rotateR(posStatus, rotateStatus);
                if (posClick == i && posStatus[i] == 0) {
                    posTag[i].style.backgroundImage = "url('circulo.png')";
                    posStatus[i] = 1;
                    clickDetect = 1;
                }
                posStatus = rotateL(posStatus, rotateStatus);
                console.log("rot3 = " + posStatus);
            }
            break;
            default:
                console.log(ërro);

        }
        if (clickDetect == 1) {
            console.log(posStatus)
            playBot();
        }
    }
}
playBot();