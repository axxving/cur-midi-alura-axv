(() => {
  const valoresButtonHTML = () => {
    let valoresButtons = [];
    let button = document.querySelectorAll(".tecla");

    button.forEach((button, numTecla) => {
      valoresButtons.push(button);
    });

    return valoresButtons;
  };

  const valoresAudioHTML = () => {
    let valoresAudio = [];
    let audio = document.querySelectorAll("audio");

    audio.forEach((audio, numAudio) => {
      valoresAudio.push(audio);
    });

    return valoresAudio;
  };

  let buttonsObtenidos = valoresButtonHTML();
  console.log("Buttons" + buttonsObtenidos[0]);

  let audiosObtenidos = valoresAudioHTML();
  console.log("Aqui" + audiosObtenidos[0]);

  for (let i = 0; i <= buttonsObtenidos.length; i++) {
    buttonsObtenidos[i].addEventListener("click", () => {
      if (audiosObtenidos[i]) {
        audiosObtenidos[i].play();
      } else {
        console.error(`No se encontró el sonido para la tecla`);
      }
    });
  }
})();
