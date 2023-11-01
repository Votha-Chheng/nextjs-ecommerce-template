export const afficherTableau = (tableau: any): string=>{
  let txt=''
  txt = tableau.join(', ')
  return txt
}