// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
let gender = process.argv[2]; // Genero 
let height = process.argv[3]; // Altura
let barReps = process.argv[4]; // Repetições com barra
let barSeconds = process.argv[5]; // Tempo das repetições com barra 
const abs = process.argv[6]; // Abdominais
let runDistance = process.argv[7]; // Distância da corrida
let runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"



    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**

 //genero               Altura           repetições e segundos da barra       abdmoninais
if(gender === "male" && height >= 1.70 && (barReps >= 6 || barSeconds >= 15) &&  abs >= 41 && 
               //distancia corrida e tempo de corrida
((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200)) && 
    //tempo e distancia nadados                tempo e distancia mergulhando
((swimDistance >= 100 && swimTime <= 60 ) || (swimDistance >= 100 && diveTime <= 30))) {
     passed = true
         //genero               Altura                repetições e segundos da barra       abdmoninais
} else if (gender === "female" && height >= 1.60 && (barReps >= 5 || barSeconds >= 12) &&  abs >= 41 && 
                    //distancia corrida e tempo de corrida
((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320)) && 
      //tempo e distancia nadados                tempo e distancia mergulhando
((swimDistance >= 100 && swimTime <= 60 ) || (swimDistance >= 100 && diveTime <= 30))) { 
     passed = true
} else {
    passed = false
}


console.log(passed);

/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/

