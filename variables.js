	let libroPreferido = prompt('Ingresá tu libro preferido:');
	let libroNoPreferido = prompt('Ahora ingresá un libro que no te guste:')
	let result = `Mi libro preferido es ${libroPreferido}, un libro que no me gusta es ${libroNoPreferido}`
	alert(result)
	console.log(result);
	if (libroPreferido == "Harry Potter") {
		alert ("¡Harry Potter tambien es mi preferido!")
		console.log("¡Harry Potter tambien es mi preferido!");		
	}
	if (libroNoPreferido == "50 Sombras de Grey") {
		alert ("A mi tampoco me gusta 50 Sombras de Grey >.<")
		console.log ("A mi tampoco me gusta 50 Sombras de Grey >.<")
	}

	
	for (let i = 0; i<8; i++){
		let cualLibro = parseInt(prompt("Cual de la saga es tu preferido? (el numero del libro nada mas)"))
		if (cualLibro == 1) {
			alert("Ese tambien es mi preferido :)");
			break;
		}
		switch (cualLibro) {
			case 2 :
				alert ("Ese esta bueno, pero no es mi preferido");
				break;
			case 3 :
				alert ("Ese esta bueno, pero no es mi preferido");
				break;
			case 4 :
				alert ("Ese esta bueno, pero no es mi preferido");
				break;
			case 5 :
				alert ("Ese esta bueno, pero no es mi preferido");
				break;
			case 6 :
				alert ("Ese esta bueno, pero no es mi preferido");
				break;
			case 7 :
				alert ("Ese esta bueno, pero no es mi preferido");
				break;
		}
	}
