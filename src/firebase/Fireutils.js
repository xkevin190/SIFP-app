const rangoPeso=[18.5, 25, 27, 30 , 35, 40 ,50]
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

   async getpeso(value, message){
        const estatura = value.estatura /100
        const resultPeso =  Number(value.peso ) / (  Number(estatura) * Number(estatura)) 
        const result =  await this.pesoResult(resultPeso, message)
      return  {...result , data: resultPeso.toFixed(2)  } 
    }   

    getIndiceCC(){
        return  
    }

    pesoResult(data, message){
        message = message.toJS()
       if (data < rangoPeso[0]) {
         return result ={
           resultado:message.peso1,
           recomendacion:message.recomendacion
         }
       }else if(data < rangoPeso[0] ||  data < rangoPeso[1]){
         return result ={
           resultado:message.peso2,
           recomendacion:message.recomendacion2
         }
       }
       else if(data === rangoPeso[1] ||  data < rangoPeso[2]){
         return result ={
           resultado:message.peso3,
           recomendacion:message.recomendacion3
         }
       }
       else if(data === rangoPeso[2] ||  data < rangoPeso[3]){
         return result ={
           resultado:message.peso4,
           recomendacion:message.recomendacion3
         }
       }
       else if(data === rangoPeso[3] ||  data < rangoPeso[4]){
         return result ={
           resultado:message.peso5,
           recomendacion:message.recomendacion3
         }
       }
       else if(data ===  rangoPeso[4] ||  data < rangoPeso[5]){
         return result ={
           resultado:message.peso6,
           recomendacion:message.recomendacion3
         }
       }
       else if(data === rangoPeso[5] || data > rangoPeso[6]){
         return result ={
           resultado:message.peso7,
           recomendacion:message.recomendacion3
         }
       }
       else if(data > rangoPeso[6] ){
         return result ={
           resultado:message.peso8,
           recomendacion:message.recomendacion3
         }
       }
    }   
}

    