const cuadrado = (base,altura)=>{
    let linea = ""
    for (let i = 0; i < altura; i++) {
        for (let j = 0; j < base; j++) {
            linea = j === 0 ?"*":linea+"*"
        }
        console.log(linea) 
    }
}

const trianguloRectangulo =(base,altura)=>{
    let linea = ""
    for (let i = 0; i < altura; i++) {
        linea= ""
        for (let j = 0; j < base; j++) {
            if(i === 0){
                linea += "*"
            }else{
                if(j >= base-i){
                    linea += " "
                }else{
                    linea += "*"
                }
            }
        }
        console.log(linea) 
    }
}

const triangulo = (base,altura)=>{
    let linea = ""
    for (let i = 0; i < altura; i++) {
        linea= ""
        for (let j = 0; j < base; j++) {
            if(j < i ||j >= base-i){
                linea += " "
            }else{
                linea += "*"
            }
        }
        console.log(linea) 
    }
}

triangulo(5,5)
// alejandra salina 
// consultorasalinas.com.ar

