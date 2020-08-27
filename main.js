window.onload = function () {
	const dado = document.querySelector(".dice")
	const randomNumber = document.querySelector(".randomNumber")
	const botonSumarRojo = document.querySelector(".plus.rojo")
	const botonRestarRojo = document.querySelector(".minus.rojo")
	const botonSumarAmarillo = document.querySelector(".plus.amarillo")
	const botonRestarAmarillo = document.querySelector(".minus.amarillo")
	const botonSumarGris = document.querySelector(".plus.gris")
	const botonRestarGris = document.querySelector(".minus.gris")
	const botonSumarRosa = document.querySelector(".plus.rosa")
	const botonRestarRosa = document.querySelector(".minus.rosa")
	const botonSumarNegro = document.querySelector(".plus.negro")
	const botonRestarNegro = document.querySelector(".minus.negro")

	const rojo = document.querySelector(".red")
	const amarillo = document.querySelector(".yellow")
	const gris = document.querySelector(".gray")
	const rosa = document.querySelector(".pink")
	const negro = document.querySelector(".black")


	dado.onclick = function () {
		let numero = Math.floor(Math.random() * 6) + 1

		let n = numero.toString()

		randomNumber.innerHTML = n
	}

	let posicionHorizontalRojo = 0
	let posicionHorizontalAmarillo = 0
	let posicionHorizontalGris = 0
	let posicionHorizontalRosa = 0
	let posicionHorizontalNegro = 0

	botonSumarRojo.onclick = function () {
		posicionHorizontalRojo = posicionHorizontalRojo + 64

		rojo.style.marginLeft = posicionHorizontalRojo
	}

	botonRestarRojo.onclick = function () {
		posicionHorizontalRojo = posicionHorizontalRojo - 64

		rojo.style.marginLeft = posicionHorizontalRojo
	}

	botonSumarAmarillo.onclick = function () {
		posicionHorizontalAmarillo = posicionHorizontalAmarillo + 64

		amarillo.style.marginLeft = posicionHorizontalAmarillo
	}

	botonRestarAmarillo.onclick = function () {
		posicionHorizontalAmarillo = posicionHorizontalAmarillo - 64

		amarillo.style.marginLeft = posicionHorizontalAmarillo
	}

	botonSumarGris.onclick = function () {
		posicionHorizontalGris = posicionHorizontalGris + 64

		gris.style.marginLeft = posicionHorizontalGris
	}

	botonRestarGris.onclick = function () {
		posicionHorizontalGris = posicionHorizontalGris - 64

		gris.style.marginLeft = posicionHorizontalGris
	}

	botonSumarRosa.onclick = function () {
		posicionHorizontalRosa = posicionHorizontalRosa + 64

		rosa.style.marginLeft = posicionHorizontalRosa
	}

	botonRestarRosa.onclick = function () {
		posicionHorizontalRosa = posicionHorizontalRosa - 64

		rosa.style.marginLeft = posicionHorizontalRosa
	}

	botonSumarNegro.onclick = function () {
		posicionHorizontalNegro = posicionHorizontalNegro + 64

		negro.style.marginLeft = posicionHorizontalNegro
	}

	botonRestarNegro.onclick = function () {
		posicionHorizontalNegro = posicionHorizontalNegro - 64

		negro.style.marginLeft = posicionHorizontalNegro
	}
}