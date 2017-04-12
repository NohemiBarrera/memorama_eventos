var tablero=document.getElementById("tablero")
var cartas=[1, 2, 3, 4, 5, 6, 7, 8]
var parejas = cartas.length

cartas=cartas.concat(cartas)
cartas=cartas.sort(function () { return Math.random() -0.5}) //forma más rápida y corta de desordenar un arreglo

var primeraCarta=0;
var segundaCarta=0;

function turno (event){
	var DOMElement=event.target

	if (primeraCarta !== 0 && segundaCarta !== 0){
		//Tercer turno

			//limpiar cartas
		if (primeraCarta.innerText !== segundaCarta.innerText){
		primeraCarta.classList.remove("open")
		segundaCarta.classList.remove("open")
		
}
		primeraCarta=0;
		segundaCarta=0;
	}
	 DOMElement.classList.add("open")

	 if (primeraCarta ===0) {
	 	primeraCarta = DOMElement
	 	//Primer turno
	 } else {
	 	segundaCarta = DOMElement
	 	//segundo turno
	 	if (primeraCarta.innerText === segundaCarta.innerText) {
	 		parejas = parejas - 1
	 	}
	 	if (parejas === 0) {
	 		console.log("Ganaste", parejas)
	 		alert("Ganaste")
	 		location.reload()
	 	}
	 }

	 if (primeraCarta === segundaCarta) {

	 }
	}

	cartas.forEach(function (val){
		var element = document.createElement("div")
		element.innerText = val

		element.addEventListener("click", turno, true)
		tablero.appendChild(element)
	})
