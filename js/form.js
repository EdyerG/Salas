document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "50762307258";

  let clan = document.querySelector("#clan").value;
  let tag = document.querySelector("#tag").value;
  let responsable = document.querySelector("#responsable").value;
  //let fecha = document.querySelector("#fecha").value;
  //let hora = document.querySelector("#hora").value;
  //let empleado = document.querySelector("#empleado").value;
  //let servicio = document.querySelector("#servicio").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_INSCRIPCIÓN_*%0A
		*Reservas*%0A%0A
		
		${clan}
		/ 
		${tag}
		
		${responsable}*`;

  if (clan === "" || tag === "" || responsable === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${clan}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${responsable}`;

  window.open(url);
});
