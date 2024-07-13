(() => {
  const valoresButtonHTML = () => {
    let valoresButtons = [];
    let buttons = document.querySelectorAll(".tecla");

    buttons.forEach((button) => {
      valoresButtons.push(button);
    });

    return valoresButtons;
  };

  const valoresAudioHTML = () => {
    let valoresAudio = [];
    let audios = document.querySelectorAll("audio");

    audios.forEach((audio) => {
      valoresAudio.push(audio);
    });

    return valoresAudio;
  };

  let buttonsObtenidos = valoresButtonHTML();
  console.log(`Buttons: ${buttonsObtenidos[0]}`);

  let audiosObtenidos = valoresAudioHTML();
  console.log(`Audios: ${audiosObtenidos[0]}`);

  for (let i = 0; i < buttonsObtenidos.length; i++) {
    buttonsObtenidos[i].addEventListener("click", () => {
      if (audiosObtenidos[i]) {
        audiosObtenidos[i].play();
      } else {
        console.error(`No se encontró el sonido para la tecla ${i + 1}`);
      }
    });
  }
})();
