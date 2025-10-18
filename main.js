function principal(){
	/*alert("Hola");
	*/
	var hola="Hola";
	var que_tal="Qué tal?";
	var hola2= hola+que_tal;
	//alert(hola2);
	var texto1=document.getElementById("texto1");// edntrada de texto
	console.log(texto1);

	texto1.setContents="hola222";
	alert(texto1.innerText);
}
function condicionales(){
	let edad= 18;
	edad = parseInt(prompt("Pedir edad: "));
	edad1= document.getElementById('edad01');
	if (edad>=18){
		console.log("Eres mayor de edad");
		edad1.innerText="Eres mayor de edad";


	} else {
		console.log("Eres menor de edad");
		edad1.innerText="Eres menor de edad";
	}


}
function bucles(){
	for(i=1;i<=5;i++) {
		console.log("i=", i);

	}
	let j=0;
	while(j<5) {
		console.log("j =", j);
		j=j+1; // j++;

	}
	console.log(" ..... ");
	let k=0;
	do {
		console.log("k = ",k);
		k=k+1;

	} while(k<7);
	/*

	Felipe V (1700-1724 y 1724-1746), Luis I (1724), Fernando VI (1746-1759), 
	Carlos III (1759-1788) y Carlos IV (1788-1808)*/

/*
	reyes={nombre:"Felipe V", anno_inicio="1700", anno_fin="1724"],[nombre="Felipe V", anno_inicio="1700", anno_fin="1724"],
	};*/
	const persona = {
		nombre: "Ana",
		edad: 30,
		profesion: "Desarrolladora"
		};
	for(let propiedad in persona) {
		console.log(propiedad + ":" + persona[propiedad]);
	}

	const frutas = ["manzana", "banana", "berenjena"];// Array de frutas:
	for (let fruta of frutas) {
		console.log(fruta);
	}
}
function varios_reyes(){

const reyes = [
  { nombre: "Felipe III", anno_inicio: 1598, anno_fin: 1621 },
  { nombre: "Felipe IV", anno_inicio: 1621, anno_fin: 1665 },
  { nombre: "Carlos II", anno_inicio: 1665, anno_fin: 1700 },

  { nombre: "Felipe V", anno_inicio: 1700, anno_fin: 1746 },
  { nombre: "Luis I", anno_inicio: 1724, anno_fin: 1724 }, // breve reinado durante el de Felipe V
  { nombre: "Fernando VI", anno_inicio: 1746, anno_fin: 1759 },
  { nombre: "Carlos III", anno_inicio: 1759, anno_fin: 1788 },
  { nombre: "Carlos IV", anno_inicio: 1788, anno_fin: 1808 },

  { nombre: "Fernando VII", anno_inicio: 1808, anno_fin: 1833 },
  { nombre: "José I Bonaparte", anno_inicio: 1808, anno_fin: 1813 }, // usurpación napoleónica

  { nombre: "Isabel II", anno_inicio: 1833, anno_fin: 1868 },
  { nombre: "Gobierno Provisional", anno_inicio: 1868, anno_fin: 1871 }, // interregno
  { nombre: "Amadeo I", anno_inicio: 1871, anno_fin: 1873 },
  { nombre: "Primera República", anno_inicio: 1873, anno_fin: 1874 },
  { nombre: "Alfonso XII", anno_inicio: 1874, anno_fin: 1885 },
  { nombre: "Regencia de María Cristina", anno_inicio: 1885, anno_fin: 1902 } // hasta mayoría de Alfonso XIII
];
//  reyes.find(rey => rey.nombre === "Carlos III").anno_inicio;


}
function Calcula_Determinante()
{
	console.log("Calcula ..");
	matriz=[];
	matriz[0,0]=parseFloat(document.getElementById("matriz11").value);
	matriz[0,1]=parseFloat(document.getElementById("matriz12").value);
	matriz[1,0]=parseFloat(document.getElementById("matriz21").value);
	matriz[1,1]=parseFloat(document.getElementById("matriz21").value);
	const mA = math.matrix(matriz);
	console.log(mA);
	console.log(" Determinante: ", math.det(mA));


}
var imagen="original.png";
function cambioImagen(){
	if (imagen==="original.png"){
		
		imagen0 = document.getElementById("id_imagen1");
		console.log("Imagen 0",imagen0);
		imagen="images/nueva.png";
		imagen0.src=imagen;
		
	} else {
		imagen="images/original.png";

	}
	console.log("Imagen: ", imagen);


}
//cambioImagen();
//cambioImagen();
