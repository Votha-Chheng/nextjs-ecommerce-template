export const rondAnim = {
  hidden: {x:-780, scale:0.7},
  show: {x:0, scale :1, transition: {ease : 'easeOut', duration : 2.2}}
}

export const titleAnim = {
  left: { opacity : 0},
  set : { opacity : 1, transition : {ease : 'easeOut', delay:1.9, duration : 1.7}}
}

export const photosAnim = {
  hidden: { opacity : 0},
  set : { opacity : 1, transition : {delay:2, delayChildren : 2.3, staggerChildren : 0.5}}
}
export const photoDisplay = {
  hidden: { opacity : 0},
  set : { opacity : 1, transition : {ease : 'easeIn'}}
}

export const carre1Anim = {
  start : { opacity : 0, y : 900},
  end: { opacity : 1, y:0, transition : {ease : 'easeOut', delay:0.7, duration : 0.7}}
}
export const carre3Anim = {
  start : { opacity : 0, y : -900},
  end: { opacity : 1, y:0, transition : {ease : 'easeOut', delay:0.9, duration : 0.8}}
}
export const carre2Anim = {
  start : { opacity : 0, x : -500},
  end: { opacity : 1, x:0, transition : {ease : 'easeOut', delay:1.2, duration : 0.9}}
}
export const carre4Anim = {
  start : { opacity : 0, x : 500},
  end: { opacity : 1, x:0, transition : {ease : 'easeOut', delay:1.2, duration : 0.8}}
}