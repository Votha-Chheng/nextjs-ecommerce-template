export const getRatioImage = (size: 's'|'m'|'l'|'xl', aspectRatio: "paysage"|"portrait"|"square"): number=> {
  switch(size){
    case 's':
      return aspectRatio === 'paysage' ? 4 : 6.5
    case 'm': 
      return aspectRatio === 'paysage' ? 2.5 : 4
    case 'l':
      return aspectRatio === 'paysage' ? 1.5 : 2
    case "xl":
      return 1
  }
}