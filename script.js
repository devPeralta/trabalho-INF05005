
let posStatus = [9];
let posTag = [9];
let pos = [9];
let turno = 0;

let posInicial = Math.floor(Math.random() * 9);

pos[0] = document.getElementById('da1');
pos[1] = document.getElementById('la1');
pos[2] = document.getElementById('db1');
pos[3] = document.getElementById('la2');
pos[4] = document.getElementById('c');
pos[5] = document.getElementById('lb2');
pos[6] = document.getElementById('db2');
pos[7] = document.getElementById('lb1');
pos[8] = document.getElementById('da2');
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

posTag[posInicial].style.backgroundImage = "url('cross2.png')";
posStatus[posInicial] = 1;

turno++;

//let automato = document.getElementById('automato')
//automato.textContent = "q0 → q1";

//conta em qual turno o jogo esta e retorna o turno
function turnCount(){
    let counter=0;

    for (let i = 0; i < 9; i++) {
        if(posStatus[i] == 0){
            counter++;
        }
    }

    return counter;
}

function playBot(){   
    let okMove = 0;
    while(okMove == 0){
        let posBot = Math.floor(Math.random() * 9);

        if(posStatus[posBot] == 0){         
            posTag[posBot].style.backgroundImage = "url('cross2.png')";
            posStatus[posBot] = 1;
            okMove = 1;
        }
    }
}

function clicked(posClick){
    for (let i = 0; i < 9; i++) {
        if (posClick == i && posStatus[i] == 0) {
            posTag[i].style.backgroundImage = "url('circulo.png')";
            posStatus[i] = 1;
            

        }
    }
    playBot();
}





