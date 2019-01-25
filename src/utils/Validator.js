
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

export function TestResultFilter(data, type){
  data = data? data.toJS()[type] : ''
  const keys =  data? Object.keys(data): []
  const contentData =[]
  keys.map( result =>{
     contentData.push(data[result])
  })

  return contentData
}


