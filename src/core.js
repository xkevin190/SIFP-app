import {setData}  from "./firebase";


const set = new setData();
export default class CoreFuctions   {
    constructor(){
     
    }

    SelectedMultipleFuctions(data, personData, message, selected){
        switch (selected) {
            case 'medidas_antropometricas':
               calculateAntropometricas(data, personData, message)
                break;
            case 'flexibilidad_articular':
                calculateFlexibilidadArticular(data, personData, message)
                break;
            case 'resitencia_muscular':
                console.log('resitencia_muscular')
                break;
            case 'test_fuerza':
                console.log('test_fuerza')
                break;
            case 'test_equilibrio':
                console.log('test_equilibrio')
                break;
            
        }
    }
  
}  

calculateAntropometricas = async (data, personData, message) => {
    obj={}
    const ICC= await calculateICC( {cintura:data.cintura , cadera:data.cadera} , personData, message  )
    const TA = await calculateTA(
        {sistolica: data.presionSistolica,
        distolica: data.presionDistolica},
        personData ,
        message
    ) 
    const FC = await calculateFC(data.selected , data.cardiacaData, message)
    const FR = await calculateFR(data.respiratoriaData , data.selected,message)
//    const CC = await calculateCC({ pecho: data.pecho , abdomen:data.abdomen , muslo: data.muslo } , personData, message) 
   if(ICC){ obj.ICC = ICC}
   if(TA){ obj.TA = TA}
   if(FC){ obj.FC =FC}
   if(FR){ obj.FR = FR}
   set.setPruebas( obj ,personData.uid, 'medidas_antropometricas')
}

calculateFlexibilidadArticular = async(data, personData, message) =>{
    obj={}
    const SA = await calculateSA(data.SA , personData.sexo , message)
    const FCA = await calculateFCA(data.caderaSA, message)
    const ACSA = await calculateACSA(data.AbCaderaSA, message)
    const FCES = await calculateFCES(data.caderasSp, message)

    if(SA){ obj.SA = SA}
    if(FCA){ obj.FCA = FCA}
    if(ACSA){ obj.ACSA = ACSA}
    if(FCES){ obj.FCES = FCES}

    set.setPruebas( obj ,personData.uid ,'flexibilidad_articular')
}


calculateICC = async(data, persona, message )=>{
    if(data.cintura === '' && data.cadera === ''){ return undefined }
    const result= Number(data.cintura)/Number(data.cadera)
    let obj = {
        data:result.toFixed(2)
    }
  
    if(persona.sexo === 'hombre'){
        if(result <= 0.95){
            obj.recomendacion = message.recomendacion2,
            obj.resultado =message.ICC1
    
        }else if(result >= 0.95 &&  result < 1){
            
            obj.recomendacion = message.recomendacion2,
            obj.resultado = message.ICC2
            
        }else if(result >= 1){
        
            obj.recomendacion = message.recomendacion4,
            obj.resultado = message.ICC3            
        }
    }else{
        if(result < 0.80){

            obj.recomendacion = message.recomendacion2,
            obj.resultado =message.ICC1
            
        }else if(result > 0.80 &&  result < 0.85){
            
            obj.recomendacion = message.recomendacion2,
            obj.resultado = message.ICC2
            
        }else if(result > 0.85){
            
            obj.recomendacion = message.recomendacion2,
            obj.resultado = message.ICC2
            
        }  

    }
        console.log('otro mas', obj)
    return obj 
}

calculateTA = (data, persondata, message)=>{
    if(data.sistolica === '' && data.distolica === ''){ return undefined }
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
    if(data === ''){ return undefined }
    console.log(type)
    const obj ={
        data:data,
        recomendacion:''
        }
       if(data > 59  && data <= 90 ){obj.resultado = message.FC1 }
       else if(data > 35 && data < 60 ){ 
            obj.resultado = type !== 'Adultos'? 
            message.FC1 : message.FC2
       } else if(data > 90){ 
           obj.resultado = message.FC3
           obj.recomendacion = message.recomendacion4
       } else if (data < 36){
           obj.resultado = message.FC4
           obj.recomendacion = message.recomendacion4 
       }

     return obj
    }


calculateFR = (data, type , message)=>{
    if(data === ''){ return undefined }
    console.log('!!!!!!!!!!!!!!!!!', data)
    const obj ={
        data:data,
        recomendacion:''
        }
       if(data > 11  && data <= 25 ){obj.resultado = message.TA2 }
       else if(data > 35 && data < 60 ){ 
          
       } else if(data < 12){ 
           obj.resultado = message.FR1
           obj.recomendacion = message.recomendacion4 
       } else if (data > 25 ){
           obj.resultado = message.FR2
           obj.recomendacion = message.recomendacion4 
       }
    
       console.log(obj , message.recomendacion4)
    return obj
}



calculateCC =(data, dataPerson, message) =>{ 
  return console.log(
      data,
      dataPerson
  )

}

  calculateSA = (data, sexo, message) =>{
    if(data === ''){ return undefined }
    let result={
        data: data
    }; 
    if(sexo === 'hombre'){
        if(data < -20){result.resultado = message.evaluacion1
        }else if(data > -20 && data <= -9){result.resultado  = message.evaluacion2
        }else if(data > -9 && data <= -1 ){result.resultado  = message.evaluacion3
        }else if(data >= 0 && data < 6 ){result.resultado  = message.evaluacion4
        }else if(data >= 6 && data <=  16 ){result.resultado  = message.evaluacion5
        }else if(data >16 && data <= 27 ){result.resultado  = message.evaluacion6
        }else if(data> 27){result.resultado  = message.evaluacion7}
 
    }else{
        if(data < -15){result = message.evaluacion1
        }else if(data > -15 && data <= -8){result.resultado  = message.evaluacion2
        }else if(data > -8 && data <= 0 ){result.resultado  = message.evaluacion3
        }else if(data >= 0 && data < 11 ){result.resultado  = message.evaluacion4
        }else if(data >= 11 && data <=  20 ){rresult.resultado  = message.evaluacion5
        }else if(data > 20 && data <= 30 ){result.resultado  = message.evaluacion6
        }else if(data> 30){result.resultado  = message.evaluacion7 }
    }    

    return result
  }


  calculateFCA = (data, message) =>{
    if(data === ''){ return undefined }
    let result ={
        data: data+"°",
    }; 
    if(data < 91){result.resultado = 
        message.evaluacion1
        result.puntos = 0
    }else if(data > 90 && data <= 110){
        result.resultado = message.evaluacion2
        result.puntos = 1
    }else if(data > 110 && data <= 125 ){
        result.resultado= message.evaluacion4
        result.puntos = 2
    }else if(data > 125 && data <=  140 ){
        result.resultado = message.evaluacion5
        result.puntos = 3
    }else if(data >140 && data <= 180 ){
        result.resultado = message.evaluacion6
        result.puntos = 4
    } 
     
    return result
  }

  
  calculateACSA = (data, message) =>{
    if(data === ''){ return undefined }
    let result ={
        data: data+"°",
    }; 

    if(data < 91){result.resultado = 
        message.evaluacion1
        result.puntos = 0
    }else if(data > 90 && data <= 106){
        result.resultado = message.evaluacion2
        result.puntos = 1
    }else if(data > 106 && data <= 127 ){
        result.resultado= message.evaluacion4
        result.puntos = 2
    }else if(data > 126 && data <=  145 ){
        result.resultado = message.evaluacion5
        result.puntos = 3
    }else if(data > 145 && data <= 180 ){
        result.resultado = message.evaluacion6
        result.puntos = 4
    } 
     
    return result
  }

  
  
  calculateFCES = (data, message) =>{
    if(data === ''){ return undefined }
    let result ={
        data: data+"°",
    }; 

    if(data < 180){
        result.resultado = message.evaluacion2
        result.puntos = 1
    }else if(data == 180 ){
        result.resultado= message.evaluacion4
        result.puntos = 2
    }else if(data > 180 ){
        result.resultado = message.evaluacion5
        result.puntos = 3
    }    
    return result
  }

  