const friend = document.getElementById("amigo"),
  btnAdd = document.getElementById("add"),
  btnSorteo = document.getElementById("btn-sorteo");
let friends = [];

btnAdd.addEventListener("click", agregarAmigo);
btnSorteo.addEventListener("click", sortearAmigo);
function agregarAmigo() {
  const value = friend.value;
  if (!value) return alert("Por favor, inserte un nombre.");
  friends.push(value);
  friend.value = "";
  actualizarLista();
}
function actualizarLista() {
  let lista = "";
  friends.forEach((person) => (lista += `<li>${person}</li>`));
  document.getElementById("listaAmigos").innerHTML = lista;
}

function sortearAmigo() {
  if (friends.length === 0) return alert("tiene que insertar amigos al sorteo");
  const amigoSorteado = friends[Math.floor(Math.random() * friends.length)];
  const texto = `<li>El amigo elegido es ${amigoSorteado}</li>`;
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = texto;
}
