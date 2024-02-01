
let posStatus = [9];
let posTag = [9];
let pos = [9];
let turno = 0;


let posInicial = Math.floor(Math.random() * 9);
console.log(posInicial);

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

/*
for(let i=0;i<9;i++){
    pos[i].addEventListener('click', function(){
        if (!posStatus[i]){
            posStatus[i] = 1;
            posTag[i].style.backgroundImage = "url('circulo.png')";
            console.log(pos[i])
        }
        pos[i].removeEventListener('click', clickHandler);
    });
}
*/

function click0(){
    if(!posStatus[0]){
        posTag[0].style.backgroundImage = "url('circulo.png')";
    }
}


//q0 -> q1 (primeira jogada do bot no centro)
if(posInicial == 4){
    //if()
}
//q0 -> q2 (primeira jogada do bot não é em uma diagonal e nem no centro)
if(posInicial == 0 || posInicial == 2 || posInicial == 6 || posInicial == 8){
    
}
//q0 -> q3 (primeira jogada do bot é em uma diagonal)
if(posInicial == 0 || posInicial == 2 || posInicial == 6 || posInicial == 8){
    
}




