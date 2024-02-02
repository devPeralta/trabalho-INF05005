
let posStatus = [9];
let posTag = [9];
let matrizGame = [9];
let rotateStatus = 0; // 0 = sem rotate / 1 = rotate right / 2 = rotate rotate / 3 = rotate left

posTag[0] = da1;
posTag[1] = la1;
posTag[2] = db1;
posTag[3] = la2;
posTag[4] = c;
posTag[5] = lb2;
posTag[6] = db2;
posTag[7] = lb1;
posTag[8] = da2;

for(let i=0;i<9;i++){
    posStatus[i] = 0;
}

function rotateL(vet){

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

    if(rotateStatus == 0){
        rotateStatus = 3;
        console.log("normal -> esq");
    }
    else if(rotateStatus == 1){
        rotateStatus = 0;
        console.log("dir -> normal");
    }
    else if(rotateStatus == 2){
        rotateStatus = 1;
        console.log("duplo -> dir");
    }
    else if(rotateStatus == 3){
        rotateStatus = 2;
        console.log("esq -> duplo");
    }
    
    return vetL;
}

function rotateR(vet){

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

    if(rotateStatus == 0){
        rotateStatus = 1;
        console.log("normal -> dir");
    }
    else if(rotateStatus == 1){
        rotateStatus = 2;
        console.log("dir -> duplo");
    }
    else if(rotateStatus == 2){
        rotateStatus = 3;
        console.log("duplo -> esq");
    }
    else{
        rotateStatus = 0;
        console.log("esq -> normal");
    }

    return vetR;
}



function turnCount(){
    let counter=0;

    for (let i = 0; i < 9; i++) {
        if(posStatus[i] == 1){
            counter++;
        }
    }

    return counter;
}

function playBot(){
    let posBotTela = Math.floor(Math.random() * 9);

    if(turnCount()==0){
        if(posBotTela == 0 || posBotTela == 1 || posBotTela == 4){
            posTag[posBotTela].style.backgroundImage = "url('cross2.png')";
            posStatus[posBotTela] = 1;
        }
        else if(posBotTela == 2 || posBotTela == 5){
            posTag[posBotTela].style.backgroundImage = "url('cross2.png')";
            posStatus[posBotTela] = 1;
            posStatus = rotateL(posStatus,rotateStatus);
            console.log(posStatus);
        }
        else if(posBotTela == 6 || posBotTela == 3){
            posTag[posBotTela].style.backgroundImage = "url('cross2.png')";
            posStatus[posBotTela] = 1;
            posStatus = rotateR(posStatus,rotateStatus);
            console.log(posStatus);
        }
        else{
            posTag[posBotTela].style.backgroundImage = "url('cross2.png')";
            posStatus[posBotTela] = 1;
            posStatus = rotateR(rotateR(posStatus,rotateStatus),rotateStatus); 
            console.log(posStatus);
        }

        console.log("rotate status: "+rotateStatus);
    }
    else if(turnCount() == 2){
        
    }
}

function clicked(posClick){

    let clickDetect = 0;

    for (let i = 0; i < 9; i++) {
        if (rotateStatus == 0) {
            if (posClick == i && posStatus[i] == 0) {
                posTag[i].style.backgroundImage = "url('circulo.png')";
                posStatus[i] = 1;
                clickDetect = 1;
                console.log("rot0 = " + posStatus);
            }
        }
        else if(rotateStatus == 1){
            posStatus = rotateL(posStatus,rotateStatus); 
            if (posClick == i && posStatus[i] == 0) {
                posTag[i].style.backgroundImage = "url('circulo.png')";
                posStatus[i] = 1;
                clickDetect = 1;
            }
            posStatus = rotateR(posStatus,rotateStatus); 
            console.log("rot1 = " + posStatus);
        }
        else if(rotateStatus == 2){
            posStatus = rotateL(rotateL(posStatus,rotateStatus),rotateStatus); 
            if (posClick == i && posStatus[i] == 0) {
                posTag[i].style.backgroundImage = "url('circulo.png')";
                posStatus[i] = 1;
                clickDetect = 1;
            }
            posStatus = rotateL(rotateL(posStatus,rotateStatus),rotateStatus);
            console.log("rot2 = " + posStatus);
        }
        else if(rotateStatus == 3){ 
            posStatus = rotateR(posStatus,rotateStatus);
            if (posClick == i && posStatus[i] == 0) {
                posTag[i].style.backgroundImage = "url('circulo.png')";
                posStatus[i] = 1;
                clickDetect = 1;
            }
            posStatus = rotateL(posStatus,rotateStatus);
            console.log("rot3 = " + posStatus);
        }

        if (clickDetect == 1) {
            console.log(posStatus)
            playBot();
        }
    }
}
playBot();