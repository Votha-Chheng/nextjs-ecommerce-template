export const pageTransition = {
  initial : {
    opacity:0,
  },
  animate : {
    opacity : 1,    
    transition : {
      duration : 0.75,
      ease: 'easeIn'
    }
  },
  exit : {
    opacity:0,
    transition : {
      duration : 0.75
    }
  }
}