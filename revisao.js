// 📫Atividades assíncronas: 
// Desenvolva uma classe que recebe do usuário um array de números, esta classe deve conter os seguintes métodos:
// pares (Este método deve mapear o array e retornar um novo array somente com os números pares)
// impares (Este método deve filtrar o array retornado um novo array somente com os números impares)
// listar (Este método deve exibir numero por número do array no console)
// total (Este método deve retornar o total da soma de todos os números dentro do array)


class ArrayNumeros {
    constructor(numeros) {
        this.numeros = numeros;
    }

    pares() {
        return this.numeros.filter(numero => numero % 2 === 0);
    }

    impares() {
        return this.numeros.filter(numero => numero % 2 !== 0);
    }

    listar() {
        this.numeros.forEach(numero => console.log(numero));
    }

    total() {
        return this.numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    }
}

// Exemplo de uso
const numeros = new ArrayNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log('Pares:', numeros.pares());   
console.log('Ímpares:', numeros.impares()); 
console.log('Lista de números:');
numeros.listar(); 
console.log('Total:', numeros.total()); 
