document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  // let telefono = "5493704404352";

  let cliente = document.querySelector("#cliente").value;
  let celular = document.querySelector("#celular").value;
  let motivo = document.querySelector("#motivo").value;
  let cantidad = document.querySelector("#cantidad").value;
  let fecha = document.querySelector("#fecha").value;
  let horario = document.querySelector("#horario").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=+5493704369273&text= Hola!, soy ${cliente} y quiero reservar un lugar para el día ${fecha} a las ${horario}, para ${motivo}, somos ${cantidad} personas,  mi teléfono de contacto es ${celular}.`


  if (cliente === "" || celular === "" || motivo === "" || cantidad === "" || fecha === "" || horario === "") {
    resp.classList.add("fail");
    resp.innerHTML = `${cliente}, faltan algunos datos &#128530`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `${cliente}, en breve te avisamos &#128536`;

  window.open(url);
});
