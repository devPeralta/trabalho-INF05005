let posStatus = [9];
let posTag = [9];
let posAutomato = [];
let botPlays = [5];
let rotateStatus = 0; 
var divMensagem = document.getElementById("automato");
var divRotate = document.getElementById("statRot");
let randPos;
let posBotTela;
let drawOrLoss=0;
let auxvet = [];
var reader = new FileReader()
var auxInput;
var indiceAuxInput = [9];
var contentAfterP;

for (let i = 0; i < 9; i++) {
    posStatus[i] = 0;
}

function readFile() {
    var fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var reader = new FileReader();

        reader.onload = function() {
            var fileContent = reader.result;
            var startIndex = fileContent.indexOf('p:');
            if (startIndex !== -1) {
                contentAfterP = fileContent.substring(startIndex + 2);
                document.getElementById('fileContent').textContent = contentAfterP;
            } else {
                document.getElementById('fileContent').textContent = '"p:" não encontrado no arquivo.';
            }
        };
        reader.readAsText(file);
    } else {
        alert('Selecione um arquivo antes de abrir.');
    }
}

function fileInsertCross(turn){

    switch(auxInput[turn]){
            
        case "DA1":
            playBot();
        break;
        case "LA1":
            playBot();
        break;
        case "DB1":
            playBot();
        break;
        case "LA2":
            playBot();
        break;
        case "C":
            playBot();
        break;
        case "LB2":
            playBot();
        break;
        case "DB2":
            playBot();
        break;
        case "LB1":
            playBot();
        break;
        case "DA2":
            playBot();
        break;
        default: "erro no fileInser()";
    }
}

function fileInsertCircle(turn){
    switch(auxInput[turn]){
        case "DA1":
            playBot();
            posTag[0].click();
            posStatus[0] = 2;
        break;
        case "LA1":
            posTag[1].click();
            posStatus[1] = 2;
        break;
        case "DB1":
            posTag[2].click();
            posStatus[2] = 2;
        break;
        case "LA2":
            posTag[3].click();
            posStatus[3] = 2;
        break;
        case "C":
            posTag[4].click();
            posStatus[4] = 2;
        break;
        case "LB2":
            posTag[5].click();
            posStatus[5] = 2;
        break;
        case "DB2":
            posTag[6].click();
            posStatus[6] = 2;
        break;
        case "LB1":
            posTag[7].click();
            posStatus[7] = 2;
        break;
        case "DA2":
            posTag[8].click();
            posStatus[8] = 2;
        break;
        default: "erro no fileInser()";
    }
}

function fileInsert(){
    auxInput = contentAfterP.split(',');

    if(turnCount() == 0){

        var auxFirstInput = auxInput[0];
        auxInput[0] = auxFirstInput.replace(/[\s\n]/g, "");
        console.log("auxinput[primeiro] = " + auxInput[0]);
        fileInsertCross(0);
    }
    else if(turnCount() == 1){
        fileInsertCircle(1);
    }
    else if(turnCount() == 2){
        fileInsertCross(2);
    }
    else if(turnCount() == 3){
        fileInsertCircle(3);
    }
    else if(turnCount() == 4){
        fileInsertCross(4);
    }
    else if(turnCount() == 5){
        fileInsertCircle(5);
    }
    else if(turnCount() == 6){
        fileInsertCross(6);
    }
    else if(turnCount() == 7){
        fileInsertCircle(7);
    }
    else if(turnCount() == 8){
        fileInsertCross(8);
    }

    atualizaVetAutomato(posStatus);
    //TO DO : proximos ifs elses
}

function fileCross(turn){
    auxInput = contentAfterP.split(',');

    var auxFirstInput = auxInput[0];
    auxInput[0] = auxFirstInput.replace(/[\s\n]/g, "");
    console.log("auxinput[primeiro] = " + auxInput[0]);

    switch(auxInput[turn]){
            
        case "DA1":
            return 0;
        break;
        case "LA1":
            return 1;
        break;
        case "DB1":
            return 2;
        break;
        case "LA2":
            return 3;
        break;
        case "C":
            return 4;
        break;
        case "LB2":
            return 5;
        break;
        case "DB2":
            return 6;
        break;
        case "LB1":
            return 7;
        break;
        case "DA2":
            return 8;
        break;
        default: "erro no fileInser()";
    }
}

function atualizaVetAutomato(posStatus){
    for(i=0;i<9;i++){
        if(posStatus[i] == 1){
            document.getElementById(posAutomato[i]).style.backgroundImage = "url('cross3.png')";
            document.getElementById(posAutomato[i]).style.backgroundSize = "cover"; 
        }
        else if(posStatus[i] == 2){
            document.getElementById(posAutomato[i]).style.backgroundImage = "url('circulo3.png')";
            document.getElementById(posAutomato[i]).style.backgroundSize = "cover"; 
        }
        else{
            document.getElementById(posAutomato[i]).style.backgroundImage = "url('vazio3.png')";
            document.getElementById(posAutomato[i]).style.backgroundSize = "cover"; 
        }
    }
}

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
    
    posAutomato[0] = "quadrado1";
    posAutomato[1] = "quadrado2";
    posAutomato[2] = "quadrado3";
    posAutomato[3] = "quadrado4";
    posAutomato[4] = "quadrado5";
    posAutomato[5] = "quadrado6";
    posAutomato[6] = "quadrado7";
    posAutomato[7] = "quadrado8";
    posAutomato[8] = "quadrado9";

    return posTag;
}

function insereX2(quadradoX,who){
    switch (rotateStatus) {
        case 0:{
            insereAutomato(quadradoX,who);
        }
            break;
        case 1:{
            insereAutomato(rotateNum(rotateNum(rotateNum(quadradoX))),who);
        }
            break;
        case 2:
            insereAutomato(rotateNum(quadradoX),who);
            break;
        case 3:
            insereAutomato(rotateNum(rotateNum(rotateNum(quadradoX))),who);
            break;
        case 4:
            insereAutomato(rotateNum(quadradoX),who);
            break;
        case 5:
            insereAutomato(rotateNum(quadradoX),who);
            break;
        case 6:
            insereAutomato(rotateNum(quadradoX),who);
            break;
        case 7:
            insereAutomato(rotateNum(quadradoX),who);
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
                document.getElementById("quadrado3").style.backgroundSize = "cover"; 
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

    drawOrLoss = 1;
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

function flipNumX(x){
    switch(x){
        case 0: // pos0
            switch(rotateStatus){
                case 0: x = 0;
                break;
                case 1: x = 2;
                break;
                case 2: x = 6;
                break;
                case 3: x = 2;
                break;
                case 4: x = 6;
                break;
                case 5: x = 6;
                break;
                case 6: x = 2;
                break;
                case 7: x = 2;
                break;
            }
        break;
        case 1: // pos1
            switch(rotateStatus){
                case 0: x = 7;
                break;
                case 1: x = 1;
                break;
                case 2: x = 7;
                break;
                case 3: x = 1;
                break;
                case 4: x = 7;
                break;
                case 5: x = 7;
                break;
                case 6: x = 1;
                break;
                case 7: x = 1;
                break;
            }
        break;
        case 2: // pos2
            switch(rotateStatus){
                case 0: x = 8;
                break;
                case 1: x = 0;
                break;
                case 2: x = 8;
                break;
                case 3: x = 0;
                break;
                case 4: x = 8;
                break;
                case 5: x = 8;
                break;
                case 6: x = 0;
                break;
                case 7: x = 0;
                break;
            }
            break;
        case 3:
            switch(rotateStatus){
                case 0: x = 3;
                break;
                case 1: x = 5;
                break;
                case 2: x = 3;
                break;
                case 3: x = 5;
                break;
                case 4: x = 3;
                break;
                case 5: x = 3;
                break;
                case 6: x = 5;
                break;
                case 7: x = 5;
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
                case 1: x = 3;
                break;
                case 2: x = 5;
                break;
                case 3: x = 3;
                break;
                case 4: x = 5;
                break;
                case 5: x = 5;
                break;
                case 6: x = 3;
                break;
                case 7: x = 3;
                break;
            }
            break;
        case 6:
            switch(rotateStatus){
                case 0: x = 0;
                break;
                case 1: x = 8;
                break;
                case 2: x = 0;
                break;
                case 3: x = 8;
                break;
                case 4: x = 0;
                break;
                case 5: x = 0;
                break;
                case 6: x = 8;
                break;
                case 7: x = 8;
                break;
            }
            break;
        case 7:
            switch(rotateStatus){
                case 0: x = 1;
                break;
                case 1: x = 7;
                break;
                case 2: x = 1;
                break;
                case 3: x = 7;
                break;
                case 4: x = 1;
                break;
                case 5: x = 1;
                break;
                case 6: x = 7;
                break;
                case 7: x = 7;
                break;
            }
            break;
        case 8:
            switch(rotateStatus){
                case 0: x = 2;
                break;
                case 1: x = 6;
                break;
                case 2: x = 2;
                break;
                case 3: x = 6;
                break;
                case 4: x = 2;
                break;
                case 5: x = 2;
                break;
                case 6: x = 6;
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

}

function turnCount() {
    let counter = 0;

    for (let i = 0; i < 9; i++) {
        if (posStatus[i] == 1 || posStatus[i] == 2) {
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

                if (posClick == i && posStatus[i] == 0) {
                    posTag[i].style.backgroundImage = "url('circulo.png')";
                    posStatus[i] = 2;
                    clickDetect = 1;
                }
            }
                break;
            case 1: {
                posStatus = rotateR(posStatus);
                if (posClick == i && posStatus[i] == 0) {
                    posTag[i].style.backgroundImage = "url('circulo.png')";
                    posStatus[i] = 2;
                    clickDetect = 1;
                } posStatus = rotateL(posStatus);
            }
                break;
            case 2: {
                posStatus = rotateR(posStatus);
                posStatus = rotateR(posStatus);

                if (posClick == i && posStatus[i] == 0) {
                    posTag[i].style.backgroundImage = "url('circulo.png')";
                    posStatus[i] = 2;
                    clickDetect = 1;
                } posStatus = rotateR(posStatus);
                posStatus = rotateR(posStatus);
            }
                break;
            case 3: {
                posStatus = rotateL(posStatus);
                if (posClick == i && posStatus[i] == 0) {
                    posTag[i].style.backgroundImage = "url('circulo.png')";
                    posStatus[i] = 2;
                    clickDetect = 1;
                } posStatus = rotateR(posStatus);
            }
                break;
            case 4: {
                posStatus = flipX(posStatus);

                if (posClick == i && posStatus[i] == 0) {
                    posTag[i].style.backgroundImage = "url('circulo.png')";
                    posStatus[i] = 2;
                    clickDetect = 1;
                } posStatus = flipX(posStatus);
            }
                break;
            case 5: {
                posStatus = flipY(posStatus);

                if (posClick == i && posStatus[i] == 0) {
                    posTag[i].style.backgroundImage = "url('circulo.png')";
                    posStatus[i] = 2;
                    clickDetect = 1;
                } posStatus = flipY(posStatus);
            }
                break;
            case 6: {
                posStatus = flipX(posStatus);
                posStatus = rotateR(posStatus);

                if (posClick == i && posStatus[i] == 0) {
                    posTag[i].style.backgroundImage = "url('circulo.png')";
                    posStatus[i] = 2;
                    clickDetect = 1;
                } posStatus = flipX(posStatus);
                posStatus = rotateR(posStatus);
            }
                break;
            case 7: {
                posStatus = flipY(posStatus);
                posStatus = rotateR(posStatus);

                if (posClick == i && posStatus[i] == 0) {
                    posTag[i].style.backgroundImage = "url('circulo.png')";
                    posStatus[i] = 2;
                    clickDetect = 1;
                } posStatus = flipY(posStatus);
                posStatus = rotateR(posStatus);
            }
            default:
                console.log("erro no reconhecimento do clique");
        }
        if (clickDetect == 1 && !contentAfterP) {
            playBot();
        }
    }
}

function playBot(){
    
    // TURNO 1 ///////////////////////////////////////////////////////
    if(turnCount() == 0){
        if(!contentAfterP){
            //posBotTela = Math.floor(Math.random() * 9);
            posBotTela = 1;
        }
        else{
            posBotTela = fileCross(turnCount());
        }
        if(posBotTela == 0 || posBotTela == 1 || posBotTela == 4){  //sem rotacao
            insereX(posBotTela);
            posStatus[posBotTela] = 1;
            botPlays[0] = posBotTela;
        }
        else if(posBotTela == 2){                // rotacao direita
            insereX(posBotTela);
            posStatus[posBotTela] = 1;
            //as duas linhas abaixo precisam ficar invertidas!!
            posStatus = rotateL(posStatus);
            rotateStatus = boardStatus(rotateStatus,1);
            
            botPlays[0] = rotateNum(rotateNum(rotateNum(posBotTela)));
        }
        else if(posBotTela == 5){
            insereX(posBotTela);
            posStatus[posBotTela] = 1;
            posStatus = rotateL(posStatus);
            rotateStatus = boardStatus(rotateStatus,1);
            botPlays[0] = rotateNum(rotateNum(rotateNum(posBotTela)));
        }
        else if(posBotTela == 3){                // rotacao esquerda
            insereX(posBotTela);
            posStatus[posBotTela] = 1;
            posStatus = rotateR(posStatus);
            rotateStatus = boardStatus(rotateStatus,3);
            botPlays[0] = rotateNum(rotateNum(rotateNum(posBotTela)));
        }
        else if(posBotTela == 6){
            insereX(posBotTela);
            posStatus[posBotTela] = 1;
            posStatus = rotateR(posStatus);
            rotateStatus = boardStatus(rotateStatus,3);
            botPlays[0] = rotateNum(rotateNum(rotateNum(posBotTela)));
        }
        else{                                                       //rotacao dupla
            insereX(posBotTela);
            posStatus[posBotTela] = 1;
            posStatus = rotateR(posStatus);
            posStatus = rotateR(posStatus);
            rotateStatus = boardStatus(rotateStatus,2);
            //insereX2(posBotTela,1);
            botPlays[0] = rotateNum(posBotTela);
        }
        
        atualizaVetAutomato(posStatus);
        divMensagem.innerHTML = "R"+ rotateStatus + ":" + posStatus+ ":BP"+ botPlays[0];
    }
    //// TURNO 3 ///////////////////////////////////////////////////////
    else if(turnCount() == 2){

        if(!contentAfterP){
            switch(botPlays[0]){
                case 0:{
                    if(posStatus[4] == 2){
                        insereX(8);
                        posStatus[8] = 1;
                        botPlays[1] = 8;
                    }
                    else{
                        desabilitaCliques(posTag);
                        console.log("perdeu");
                    }
                }
                break;
                case 1:{
                    if(posStatus[0] == 2){
                        insereX(4);
                        posStatus[4] = 1;
                        botPlays[1] = 4;
                    }
                    else if(posStatus[2] == 2){                             
                        insereX(4);
                        posStatus[4] = 1;
                        posStatus = flipY(posStatus);
                        rotateStatus = boardStatus(rotateStatus,5);
                        botPlays[1] = 4;
                    }
                    else if(posStatus[8] == 2){
                        insereX(4);
                        posStatus[4] = 1;
                        posStatus = flipY(posStatus);
                        rotateStatus = boardStatus(rotateStatus,5);
                        botPlays[1] = 4;
                    }
                    else if(posStatus[6] == 2){
                        insereX(4);
                        posStatus[4] = 1;
                        botPlays[1] = 4;
                    }
                    else if(posStatus[4] == 2){
                        insereX(0);
                        posStatus[0] = 1;
                        botPlays[1] = 0;
                    }
                    else if(posStatus[7] == 2){
                        insereX(0);
                        posStatus[0] = 1;
                        botPlays[1] = 0;
                    }
                    else{
                        desabilitaCliques(posTag);
                        console.log("perdeu");
                    }
                }
                break;
                case 4:{
                    if(posStatus[1] == 2 || posStatus[3] == 2 || posStatus[5] == 2 || posStatus[7] == 2){
                        desabilitaCliques(posTag);
                        console.log("perdeu");
                    }
                    else if(posStatus[0] == 2){                          
                        insereX(2);
                        posStatus[2] = 1;
                        botPlays[1] = 2;
                    }
                    else if(posStatus[2] == 2){
                        insereX(8);
                        posStatus[8] = 1;
                        posStatus = rotateL(posStatus);
                        rotateStatus = boardStatus(rotateStatus,1);
                        botPlays[1] = 2;
                    }
                    else if(posStatus[6] == 2){
                        insereX(0);
                        posStatus[0] = 1;
                        posStatus = rotateR(posStatus);
                        rotateStatus = boardStatus(rotateStatus,3);
                        botPlays[1] = 2;
                    }
                    else if(posStatus[8] == 2){
                        insereX(6);
                        posStatus[6] = 1;
                        posStatus = rotateL(posStatus);
                        posStatus = rotateL(posStatus);
                        rotateStatus = boardStatus(rotateStatus,2);
                        botPlays[1] = 2;
                    }
                }
                break;
                default: console.log("erro no botplays[0]");
            }
        }
        else{
            insereX(fileCross(turnCount()));
            posStatus[fileCross(turnCount())] = 1;
            botPlays[1] = fileCross(turnCount());
        }

        atualizaVetAutomato(posStatus);
        divMensagem.innerHTML = "R"+ rotateStatus + ":" + posStatus+ ":BP"+ botPlays[1];
    }
    //// TURNO 5 ///////////////////////////////////////////////////////
    else if(turnCount() == 4){
        
        if(!contentAfterP)
        {if(botPlays[0] == 0 && botPlays[1] == 8){
        divMensagem.innerHTML = "R-"+ rotateStatus + ":" + posStatus+ ":BP"+ botPlays;
            if(posStatus[1] == 2){
                insereX(7);
                posStatus[7] = 1;
                botPlays[2] = 7;
                console.log("if0");
            }
            else if(posStatus[7] == 2){
                auxvet = posStatus;
                insereX(1);
                posStatus[1] = 1;
                posStatus = rotateL(posStatus);
                posStatus = rotateL(posStatus);
                rotateStatus = boardStatus(rotateStatus,2);
                //botPlays[2] = rotateNum(rotateNum(1));
                for(let i=0;i<9;i++){
                    if(auxvet[i] != posStatus[i] && i != 2){
                        botPlays[2] = i;
                    }
                }
                console.log("if1");
            }
            else if(posStatus[3] == 2){
                insereX(5);
                posStatus[5] = 1;
                posStatus = rotateL(posStatus);
                posStatus = flipX(posStatus);
                rotateStatus = boardStatus(rotateStatus,6);
                //botPlays[2] = flipNumX(rotateNum(rotateNum(rotateNum(5))));
                for(let i=0;i<9;i++){
                    if(auxvet[i] != posStatus[i] && i != 2){
                        botPlays[2] = i-1;
                    }
                }
                console.log("if2");
            }
            else if(posStatus[5] == 2){
                insereX(3);
                posStatus[3] = 1;
                posStatus = rotateL(posStatus);
                posStatus = flipY(posStatus);
                rotateStatus = boardStatus(rotateStatus,7);
                //botPlays[2] = flipNumX(rotateNum(3));
                for(let i=0;i<9;i++){
                    if(auxvet[i] != posStatus[i] && i != 2){
                        botPlays[2] = i-1;
                    }
                }
                console.log("if3");
            }
            else{
                desabilitaCliques(posTag);
                console.log("perdeu");
                //to do
            }
        }
        else if(botPlays[0] == 4 && botPlays[1] == 2){
            if(posStatus[6] == 2){
                insereX(3);
                posStatus[3] = 1;
                botPlays[2] = 3;
            }
            else{
                insereX(6);
                posStatus[6] = 1;
                desabilitaCliques(posTag);
                console.log("perdeu");
            }
        }
        else if(botPlays[0] == 1 && botPlays[1] == 0){
            if(posStatus[2] == 2){
                insereX(4);
                posStatus[4] = 1;
                botPlays[2] = 4;
            }
            else{
                insereX(2);
                posStatus[2] = 1;
                desabilitaCliques(posTag);
                console.log("perdeu");
            }
        }
        else if(botPlays[0] == 1 && botPlays[1] == 4){
            if (posStatus[0] == 2 && posStatus[7] == 2) {
                posBotTela = Math.floor(Math.random() * 2);
                if (posBotTela) {
                    insereX(3);
                    posStatus[3] = 1;
                    botPlays[2] = 3;
                }
                else {
                    insereX(6);
                    posStatus[6] = 1;
                    botPlays[2] = 6;
                }
            }
            else if(posStatus[6] == 2 && posStatus[7] == 2){
                    insereX(8);
                    posStatus[8] = 1;
                    botPlays[2] = 8;
            }
            else if(posStatus[4] == 2 && posStatus[2] == 2){
                insereX(6);
                posStatus[6] = 1;
                botPlays[2] = 6;
            }
            else if(posStatus[6] == 2 && posStatus[7] == 2){
                insereX(8);
                posStatus[8] = 1;
                botPlays[8] = 4;
            }
            else{
                desabilitaCliques(posTag);
                console.log("perdeu");
            }
        }}
        else{
            insereX(fileCross(turnCount()));
            posStatus[fileCross(turnCount())] = 1;
            botPlays[2] = fileCross(turnCount());
        }

        atualizaVetAutomato(posStatus);
        divMensagem.innerHTML = "R"+ rotateStatus + ":" + posStatus+ ":BP"+ botPlays;
    }
    //// TURNO 7 ///////////////////////////////////////////////////////
    else if(turnCount() == 6){
        if(!contentAfterP){ 
            if(botPlays[0] == 4 && botPlays[1] == 2 && botPlays[2] == 3){
                if(posStatus[5] == 2){
                    posBotTela = Math.floor(Math.random() * 2);
                    if(posBotTela){
                        insereX(1);
                        posStatus[1] = 1;
                        botPlays[3] = 1;
                    }
                    else{
                        insereX(7);
                        posStatus[7] = 1;
                        botPlays[3] = 7;
                    }
                }
                else{
                    desabilitaCliques(posTag);
                    console.log("perdeu");
                }
            }
            else if(botPlays[0] == 0 && botPlays[1] == 8 && botPlays[2] == 7){
                if(posStatus[6] == 2){
                    insereX(2);
                    posStatus[2] = 1;
                    botPlays[3] = 2;
                }
                else{
                    desabilitaCliques(posTag);
                    console.log("perdeu");
                }
            }
            else if(botPlays[0] == 1 && botPlays[1] == 4 && botPlays[2] == 6){ //q25
                if(posStatus[2] == 2){
                    posBotTela = Math.floor(Math.random() * 2);
                        if(posBotTela){
                            insereX(3);
                            posStatus[3] = 1;
                            botPlays[3] = 3;
                        }
                        else{
                            insereX(5);
                            posStatus[5] = 1;
                            botPlays[3] = 5;
                        }
                }
                else{
                    insereX(2);
                    posStatus[2] = 1;
                    botPlays[3] = 2;
                    desabilitaCliques(posTag);
                    console.log("perdeu");
                }
            }
            else if(botPlays[0] == 1 && botPlays[1] == 4 && botPlays[2] == 3){ //q26
                if(posStatus[5] == 2){
                    posBotTela = Math.floor(Math.random() * 2);
                        if(posBotTela){
                            insereX(2);
                            posStatus[2] = 1;
                            botPlays[3] = 2;
                        }
                        else{
                            insereX(6);
                            posStatus[6] = 1;
                            botPlays[3] = 6;
                        }
                }
                else{
                    insereX(5);
                    posStatus[5] = 1;
                    botPlays[3] = 5;
                    desabilitaCliques(posTag);
                    console.log("perdeu");
                }
            }
            else if(botPlays[0] == 1 && botPlays[1] == 4 && botPlays[2] == 8){ //q39
                if(posStatus[0] == 2){
                    insereX(3);
                    posStatus[3] = 1;
                    botPlays[3] = 3;
                }
                else{
                    insereX(0);
                    posStatus[0] = 1;
                    botPlays[3] = 0;
                    desabilitaCliques(posTag);
                    console.log("perdeu");
                }
            }
            else if(botPlays[0] == 1 && botPlays[1] == 0 && botPlays[2] == 6){ //draw
                if(posStatus[5] == 2){
                    insereX(3);
                    posStatus[3] = 1;
                    botPlays[3] = 3;
                    desabilitaCliques(posTag);
                    console.log("perdeu");
                }
                else{
                    insereX(5);
                    posStatus[5] = 1;
                    botPlays[3] = 5;
                    console.log("empate");
                }
            }
            else if(botPlays[0] == 1 && botPlays[1] == 0 && botPlays[2] == 4){ //q34
                if(posStatus[8] == 2){
                    insereX(5);
                    posStatus[5] = 1;
                    botPlays[3] = 5;
                    console.log("empatou");
                }
                else{
                    insereX(6);
                    posStatus[6] = 1;
                    botPlays[3] = 6;
                    desabilitaCliques(posTag);
                    console.log("perdeu");
                }
            }
                //TO DO -> CORRIGIR ULTIMA JOGADA DO BOT NO TURNO 5 (sequencia DA1,C,DA2,LA1,LB1)
        }
        else{
            insereX(fileCross(turnCount()));
            posStatus[fileCross(turnCount())] = 1;
            botPlays[3] = fileCross(turnCount());
        }
        divMensagem.innerHTML = "R"+ rotateStatus + ":" + posStatus+ ":BP"+ botPlays;
        atualizaVetAutomato(posStatus);
    }
    //// TURNO 9 ///////////////////////////////////////////////////////
    else if(turnCount() == 8){
        
    }

}

var startButton = document.getElementById("start");

startButton.addEventListener('click', function() {
    if(!contentAfterP){
        console.log("arquivo nao existe");
        playBot();
    }
    else{
        for(let i=0;i<9;i++){
            console.log("arquivo existe");
            fileInsert();
        }
    }
});

habilitaCliques(posTag);


