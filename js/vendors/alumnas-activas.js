var contador = 0;

var arrayStudents = [];

var estAQP162 = data['AQP']['2016-2']['students'].length;
var estAQP171 = data['AQP']['2017-1']['students'].length;

var estCMDX171 = data['CDMX']['2017-1']['students'].length;
var estCMDX172 = data['CDMX']['2017-2']['students'].length;

var estLIM171 = data['CDMX']['2017-1']['students'].length;
var estLIM172 = data['CDMX']['2017-2']['students'].length;
var estLIM161 = data['CDMX']['2017-1']['students'].length;

var estSCL171 = data['SCL']['2017-1']['students'].length;
var estSCL172 = data['SCL']['2017-2']['students'].length;
var estSCL162 = data['SCL']['2016-2']['students'].length;

//Estudiantes por sede
var sumaStudentsAQP = estAQP162 + estAQP171
var sumaStudentsCDMX = estCMDX171 + estCMDX172
var sumaStudentsLIM = estLIM171 + estLIM172 + estLIM161
var sumaStudentsSCL = estSCL171 + estSCL172 +estSCL162

var seleccionarOpcion = function(event) {
  var indiceOpcion = (event.target.selectedIndex);
  var sede = event.target[indiceOpcion].dataset.sede;
  var generacion = event.target[indiceOpcion].dataset.generacion;
  //ingresa a la data
  var estudiantes = data[sede][generacion]['students'];

  document.getElementById('data_student').innerHTML = '';
  //ingresa a array

  var arrayActivas = []
  var arrayInactivas = []

  for (var i = 0; i < estudiantes.length; i += 1){
    var activas = estudiantes[i]['active'];
      if (activas == true){
        arrayActivas.push(activas)
        //console.log(arrayActivas)
      }
      if (activas == false) {
        arrayInactivas.push(activas)
      }
    }
    //console.log(arrayActivas.length)
    //console.log(arrayInactivas.length)


//sumas de activas e inactivas
  var sumaActivas = 0;
  var sumaInactivas = arrayInactivas.length;
  console.log(sumaInactivas)

  for (var j = 0; j < arrayActivas.length; j++) {
    sumaActivas = sumaActivas + arrayActivas[j];
  }
  // console.log(sumaActivas)


  /*for (var k = 0; k < arrayInactivas.length; k++) {
    sumaInactivas = sumaInactivas + arrayInactivas[k];
    // console.log(sumaInactivas)
  }*/

  //Crear elemntos en DOM
  var principalSection = document.getElementById('data_student')

  var divContainerActive = document.createElement('div');
  var pNumberActive = document.createElement('p');
  var pTitleActive = document.createElement('p');

  var divContainerInactive = document.createElement('div');
  var pNumberInactive = document.createElement('p');
  var pTitleInactive = document.createElement('p');

  //Asignar valores a elementos de document
  pNumberActive.innerText = sumaActivas;
  pTitleActive.innerText = "Alumas Activas";

  pNumberInactive.innerText = sumaInactivas;
  pTitleInactive.innerText = "Alumas Inactivas";

  //padre div
  divContainerActive.appendChild(pTitleActive);
  divContainerActive.appendChild(pNumberActive);

  divContainerActive.classList.add('container');
  divContainerActive.classList.add('left');
  pTitleActive.classList.add('title');
  pNumberActive.classList.add('number');

  divContainerInactive.appendChild(pTitleInactive);
  divContainerInactive.appendChild(pNumberInactive);

  divContainerInactive.classList.add('container');
  divContainerInactive.classList.add('right');
  pTitleInactive.classList.add('title');
  pNumberInactive.classList.add('number');

  //padre section
  principalSection.appendChild(divContainerActive);
  principalSection.appendChild(divContainerInactive);


}
