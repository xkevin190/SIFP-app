

export function validateData(data) {
    data = data? data.toJS() : ''
  return data
}

export function GetDataPerson(data, key){
  const listPerson = !data.toJS()[key].alumnos ? [] : Object.values(data.toJS()[key].alumnos) 
  return  listPerson
}