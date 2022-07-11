//Ejercicio para crear una función que genere los números primos desde RANGOA hasta RANGOB.

const esPrimo = numero => {
	// Casos especiales
	if (numero == 0 || numero == 1 || numero == 4) return false;
        for (let x = 2; x < numero / 2; x++) {
            if (numero % x == 0) return false;
        }
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}

const generarPrimos = (rangoA, rangoB) => {

    if(rangoA >= 2) {
        let primos = [];            

        for(let i=rangoA; i<=rangoB; ++i){
            if(esPrimo(i)){
                primos.push(i);
            }
        }
        return primos;

    }else {
        throw Error('El número debe ser mayor o igual a 2.');
    }
    
}

//.-----------------------------.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor dijite el rango A: ', function (rangoA) {
    rl.question('Por favor dijite el rango B: ', function (rangoB) {
        if(typeof rangoA === 'number' && Number.isInteger(rangoA) && rangoB > rangoA) {
            throw TypeError ('El argumentoA debe ser un número entero. El rango B > rango A');
        }
        const primos = generarPrimos(Number(rangoA), Number(rangoB));
        console.log(`Los numeros primos entre ${rangoA} y ${rangoB} son: ${primos}`);        
        rl.close();
    });
});

rl.on('close', function () {
  console.log('\nGracias Adiós !!!');
  process.exit(0);
});