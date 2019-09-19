const a = {
  b: {
    c: 1
  },

  d: function(){
    return this.b
  } 
}

console.log(a.d())