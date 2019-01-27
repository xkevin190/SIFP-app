import {setData}  from "./firebase";


const set = new setData();
export default class CoreFuctions   {
    constructor(){
     
    }
 
  calculateAntropometricas = async (data, personData, message) =>{
        console.log(personData)
        const ICC= await calculateICC( data.cintura , data.cadera , personData, message  )
        const TA = await calculateTA(
            {sistolica: data.presionSistolica,
            distolica: data.presionDistolica},
            personData ,
            message
        ) 
        const FC = await calculateFC(data.selected , data.cardiacaData, message)
        const FR = await calculateFR(data.respiratoriaData , data.selected,message)
    //    const CC = await calculateCC({ pecho: data.pecho , abdomen:data.abdomen , muslo: data.muslo } , personData, message) 
     set.setPruebas({ ICC, TA, FC, FR} ,personData.uid)
    }
}  

this.setSections

calculateICC = async(cintura, cadera, persona, message )=>{
    const result= Number(cintura)/Number(cadera)
    let obj = {}
    console.log(cintura, cadera, message ,persona)
    if(persona.sexo === 'hombre'){
        if(result < 0.95){
            obj ={
                data:result,
                recomendacion:message.recomendacion2,
                resultado:message.ICC1
            }
        }else if(result > 0.95 &&  result < 1){
            obj={
                data:result,
                recomendacion:message.recomendacion2,
                resultado:message.ICC2
             }
        }else if(result > 1){
            obj={
                data:result,
                recomendacion:message.recomendacion4,
                resultado:message.ICC3

             }
        }
    }else{
        if(result < 0.80){
            obj ={
            
                data:result,
                recomendacion:message.recomendacion2,
                resultado:message.ICC1
            }
            
        }else if(result > 0.80 &&  result < 0.85){
            obj={
                data:result,
                recomendacion:message.recomendacion2,
                resultado:message.ICC2
             }
        }else if(result > 0.85){
            obj={
                data:result,
                recomendacion:message.recomendacion4,
                resultado:message.ICC3

             }
        }  

    }

    return obj 
}

calculateTA = (data, persondata, message)=>{
    let theoristSistolica, theoristDistolica
    if(persondata.sexo === 'hombre'){
        theoristSistolica = 109  + (0.5 * Number(persondata.edad ) )  +  (0.1 * Number(persondata.peso));
        theoristDistolica =  74 + (0.17 * Number(persondata.edad) ) + (0.15 * persondata.peso );
    }else{
        theoristSistolica = 102  + (0.7 * Number(persondata.edad ) )  +  (0.15 * Number(persondata.peso));
        theoristDistolica =  74 + (0.17 * Number(persondata.edad) ) + (0.15 * persondata.peso );
    }
    const obj ={
        data:data.sistolica + "/" + data.distolica,
        recomendacion:'',
        theoristData: theoristSistolica + "/" + theoristDistolica
    }

    if(data.sistolica > 140 && data.distolica < 90 ){obj.resultado = message.TA6
    }else if( (data.sistolica < 140 && data.distolica < 90)){  obj.resultado = message.TA2
    }else if(data.sistolica < 160 &&  data.distolica  <= 99 ){obj.resultado = message.TA3
    }else if(data.sistolica < 180 &&  data.distolica  <= 109){ obj.resultado = message.TA4
    }else if(data.sistolica > 180 &&  data.distolica  < 110){ obj.resultado = message.TA5}
 
    return obj
}

calculateFC = (type, data, message) =>{
    console.log(type)
    const obj ={
        data:data,
        recomendacion:''
        }
       if(data > 59  && data < 90 ){obj.resultado = message.FC1 }
       else if(data > 35 && data < 60 ){ 
            obj.resultado = type !== 'Adultos'? 
            message.FC1 : message.FC2
       } else if(data > 90){ 
           obj.resultado = message.FC3
           obj.recomendacion = message.recomendacion3 
       } else if (data < 36){
           obj.resultado = message.FC4
           obj.recomendacion = message.recomendacion3 
       }

     return obj
    }


calculateFR = (data, type , message)=>{
    console.log(type)
    const obj ={
        data:data,
        recomendacion:''
        }
       if(data > 11  && data < 21 ){obj.resultado = message.TA2 }
       else if(data > 35 && data < 60 ){ 
          
       } else if(data < 12){ 
           obj.resultado = message.FR1
           obj.recomendacion = message.recomendacion3 
       } else if (data > 25 ){
           obj.resultado = message.FR2
           obj.recomendacion = message.recomendacion3 
       }

    return obj
}



calculateCC =(data, dataPerson, message) =>{ 
  return console.log(
      data,
      dataPerson
  )

}


getMessageICC = (result , message)=>{
    
}