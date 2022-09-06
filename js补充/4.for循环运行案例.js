let res = Boolean(Number('')) + !isNaN(Number(null)) + Boolean('parseInt([])') + typeof !(null)
console.log(res)