let abierto = false;

function toggleSobre() {
  const sobre = document.getElementById('sobre');
  const solapa = document.getElementById('solapa');
  const carta = document.getElementById('carta');

  if (!abierto) {
    sobre.classList.add('girado');
    setTimeout(() => {
      solapa.classList.add('abierta');
      carta.classList.add('abierta');
    }, 1000); // espera a que termine el giro
  } else {
    solapa.classList.remove('abierta');
    carta.classList.remove('abierta');
    setTimeout(() => {
      sobre.classList.remove('girado');
    }, 800); // espera a que se escondan la solapa y la carta
  }

  abierto = !abierto;
}
