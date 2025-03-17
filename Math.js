

/*


Math -> matemática

-pow(2,2) / pot^tencia / 2²=4
-sqrt(25,2)/ raiz / 
-PI / 3,14
-CEIL / TETO -> ARREDONDA PARA CIMA
-FLOOR / CHÃO -> ARREDONDA PARA BAIXO
-random() número aleátório entre 0 e 1


*/

    function draw(){

const min= Math.ceil(document.querySelector(".left").value)
const max= Math.floor(document.querySelector(".right").value)

const result= Math.floor(Math.random() * (max - min) + min);

const resultNumber= document.querySelector(".result")


resultNumber.innerHTML=result

    }









