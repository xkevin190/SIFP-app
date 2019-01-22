import {Decimal} from 'decimal.js';

export default class Calculate {
    async InitialTest(data){
        const peso =  await this.getpeso(data)
        //const ICC =   await this.getIndiceCC(data) 
        const obj={
            peso,
          //  ICC
        }
        return obj
    }

    getpeso(value){
        const estatura = value.estatura /100
        const result =  Number(value.peso ) / (  Number(estatura) * Number(estatura)) 
       return result.toFixed(2) 
    }   

    getIndiceCC(){
        return  
    }
}

    