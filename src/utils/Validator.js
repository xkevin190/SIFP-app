
export function validateData(data) {
    data = data? data.toJS() : ''
  return data
}

export function GetDataPerson(data, key){
  const dataContainer = []
  const listPerson = !data.toJS()[key].alumnos ? [] : Object.values(data.toJS()[key].alumnos) 
  const keys = !data.toJS()[key].alumnos ? [] : Object.keys(data.toJS()[key].alumnos)
  for (let index = 0; index < listPerson.length; index++) {
    const element = listPerson[index];
    dataContainer.push({
      ...element,
      uid:keys[index]
    }) 
  }
  return  dataContainer
}

const TitleTest ={
  FC:'Frecuencia Cardiaca (FC)',
  FR:'Frecuencia Respiratoria (FR)',
  ICC:'Índice Cintura-Cadera (ICC)',
  IMC:'Índice de Masa Corporal (IMC)',
  TA:'Tensión Arterial (TA)',
  SA:'Prueba de Sentarse y Alcanzar',
  FCA:'Flexión de Cadera sin Ayuda',
  ACSA:'Abducción de Cadera sin Ayuda',
  FCES:'Flexión de Caderas en Split'
}

export function TestResultFilter(data, type){
  data = data? data.toJS()[type] : ''
  const keys =  data? Object.keys(data): []
  const contentData =[]
  keys.map( result =>{
     contentData.push({
       key:result,
       title: TitleTest[result],
        ... data[result] })
  })
  
  return contentData
}


