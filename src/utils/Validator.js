

export function validateData(data) {
    data = data? data.toJS() : ''
  return data
}