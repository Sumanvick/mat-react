export const isEmpty = ( obj ) => { 
  for ( var prop in obj ) { 
    return false; 
  } 
  return true; 
}

export const isset = (a) => {
    if (typeof a !== 'undefined') return true
    else return false
}