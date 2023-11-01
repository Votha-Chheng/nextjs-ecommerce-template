export const resumerTexte = (texte: string, indexFin: number) : string =>{
  let resume = ""
  let indexEnd = texte.indexOf(" ", indexFin)
  resume = texte.substring(0, indexEnd)
  if(resume===''){
    return texte
  } else {
    resume+='...'
    return resume
  }    
}