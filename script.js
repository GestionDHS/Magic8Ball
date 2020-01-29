var input = document.getElementById("input-pregunta");
var elementoOpciones = document.getElementById("opciones");

  var adverbios = [
    'Quizás',
    'Definitivamente',
    'No',
    'Algun día',
  ];

  var verbos = [
    "tendrás",
    "podrás",
    "estarás",
    "sabrás",
    "lograrás",
    "te casarás con",
    "vas a",
    "viajarás a",
  ];

  var emojis = [
    "https://www.digitalhouse.com/wp-content/uploads/dhsiconsa.png", // Quizas
    "https://www.digitalhouse.com/wp-content/uploads/dhsiconsb.png", // Definitivamente
    "https://www.digitalhouse.com/wp-content/uploads/dhsiconsc.png", // No
    "https://www.digitalhouse.com/wp-content/uploads/dhsiconsd.png", // Algun dia
  ];

  var imagenesTema = [
    "https://www.digitalhouse.com/wp-content/uploads/dhsicons1.png", // tendrás
    "https://www.digitalhouse.com/wp-content/uploads/dhsicons2.png", // podrás
    "https://www.digitalhouse.com/wp-content/uploads/dhsicons3.png", // estarás
    "https://www.digitalhouse.com/wp-content/uploads/dhsicons4.png", // sabrás
    "https://www.digitalhouse.com/wp-content/uploads/dhsicons5.png", // lograrás
    "https://www.digitalhouse.com/wp-content/uploads/dhsicons6.png", // te casarás con
    "https://www.digitalhouse.com/wp-content/uploads/dhsicons7.png", // vas a...
    "https://www.digitalhouse.com/wp-content/uploads/dhsicons8.png", // viajaras a...
  ];

  var globalRandom = false;
  var globalSuccess = true;

  function obtenerRespuesta(pregunta="dhNO") {
    globalRandom = Math.floor(Math.random() * (4));
    var textoContestar;
    var paramIncluded = false;
    if (pregunta =="dhNO"){
      pregunta = document.getElementById("inputPregunta").value;
    } else{
      paramIncluded = true;
    }
    var opcionSeleccionada = elementoOpciones.selectedIndex;
    if(pregunta.replace(" ","") == ""){
      textoContestar = 'Ingresa una pregunta.';
      globalSuccess = false;
    } else {
      globalSuccess = true;
      if(pregunta.includes("?")){
        pregunta = pregunta.replace("?","");
      }
      if(paramIncluded){
        textoContestar = adverbios[globalRandom] + " " + verbos[opcionSeleccionada] + " " + pregunta + ".";
      } else {
        textoContestar = adverbios[globalRandom];
      }
    }
    return textoContestar;
  }

  function obtenerEmoji (){
    if(globalSuccess){
      return emojis[globalRandom];
    } else {
      return ""
    }
  }

  function obtenerImagenTema(indice){
    if(globalSuccess){
      return imagenesTema[indice]
    } else {
      return ""
    }
  }

  function activarBolaOcho(){
      var textoPregunta = document.getElementById("inputPregunta").value;
      var respuestaObtenida = obtenerRespuesta(textoPregunta);
      document.getElementById("numeroOcho").innerHTML = "";
      document.getElementById("parrafoRespuesta").innerHTML = respuestaObtenida;

      var nuevaImagenEmoji = obtenerEmoji();
      document.getElementById("imagenEmoji").src = nuevaImagenEmoji;

      var numeroOpcion = document.getElementById("opciones").selectedIndex;
      var nuevaImagenTema = obtenerImagenTema(numeroOpcion);
      document.getElementById("imagenTema").src = nuevaImagenTema;
  }
