document.addEventListener("DOMContentLoaded", function() {
  const textosParaCarregar = [
    { id: "txtWelcome", path: "./data/txt/welcome.txt" },
    { id: "txtPsicInf", path: "./data/txt/psicologiaInfantil.txt" },
    { id: "txtEducEsp", path: "./data/txt/educacaoEspecial.txt" },
    { id: "txtPsicDist", path: "./data/txt/psicologiaADistancia.txt" },
    { id: "txtPsicopedag", path: "./data/txt/psicopedagogia.txt" },
    { id: "txtAssesEsc", path: "./data/txt/assessoriaEscolar.txt" },
    { id: "txtPalForm", path: "./data/txt/palestrasEFormacoes.txt" },
    { id: "txtAbouteMe01", path: "./data/txt/abouteMe01.txt" },
    { id: "txtAbouteMe02", path: "./data/txt/abouteMe02.txt" },
    { id: "txtAbouteMe03", path: "./data/txt/abouteMe03.txt" },
    { id: "txtAbouteMe04", path: "./data/txt/abouteMe04.txt" },
    { id: "txtAbouteMe05", path: "./data/txt/abouteMe05.txt" },
    { id: "txtAbouteMe06", path: "./data/txt/abouteMe06.txt" },
    { id: "txtAbouteMe07", path: "./data/txt/abouteMe07.txt" },
    { id: "txtAbouteMe08", path: "./data/txt/abouteMe08.txt" },
    { id: "txtAbouteMe09", path: "./data/txt/abouteMe09.txt" },
    { id: "txtAbouteMe10", path: "./data/txt/abouteMe10.txt" },
    { id: "txtAbouteMe11", path: "./data/txt/abouteMe11.txt" },
    { id: "txtAbouteMe12", path: "./data/txt/abouteMe12.txt" },
    { id: "txtAbouteMe13", path: "./data/txt/abouteMe13.txt" },
  ];

  function carregarTexto(idElemento, caminhoArquivo) {
    fetch(caminhoArquivo)
        .then((response) => {
          if (!response.ok) throw new Error("Não foi possível carregar o arquivo.");
          return response.text();
        })
        .then((data) => {
          document.getElementById(idElemento).textContent = data;
        })
        .catch((error) => {
          document.getElementById(idElemento).textContent =
              "Erro ao carregar o conteúdo.";
          console.error(`Erro ao carregar "${caminhoArquivo}":`, error);
        });
  }

  textosParaCarregar.forEach(({ id, path }) => carregarTexto(id, path));


  /*const telefoneInput = document.getElementById("telefone");

  telefoneInput.addEventListener("input", function (e) {
    let value = e.target.value;

    // Remove tudo que não for número
    value = value.replace(/\D/g, "");

    // Aplica a máscara
    if (value.length > 0) {
      value = "(" + value;
    }
    if (value.length > 3) {
      value = value.slice(0, 3) + ") " + value.slice(3);
    }
    if (value.length > 10) {
      value = value.slice(0, 10) + "-" + value.slice(10, 14);
    }

    // Limita a 15 caracteres totais
    value = value.slice(0, 15);

    e.target.value = value;
  });*/


  const profile = document.querySelector(".menu");
  const dropdown = document.querySelector(".dropdown_wrapper");

  profile.addEventListener("click", () => {
    dropdown.classList.remove("none");
    dropdown.classList.toggle("hide");
  });

  document.addEventListener("click", (event) => {
    const isClickInsideDropdown = dropdown.contains(event.target);
    const isProfileClicked = profile.contains(event.target);

    if (!isClickInsideDropdown && !isProfileClicked) {
      dropdown.classList.add("hide");
      dropdown.classList.add("dropdown_wrapper--fade-in");
    }
  });
});