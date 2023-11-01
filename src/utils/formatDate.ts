export const formatDate = (date: string): string=>{
  let arrayDate = date.split('T')[0].split('-')
  let displayDate = `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`

  return displayDate
}
