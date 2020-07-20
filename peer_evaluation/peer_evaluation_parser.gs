function onOpen() {
  const spreadsheet = SpreadsheetApp.getActive();
  const menuItems = [{name: 'Obtener resultados', functionName: 'generateResults'}];
  spreadsheet.addMenu('Evaluación de Pares', menuItems);
}

function aContainsB (a, b) {
    return a.indexOf(b) >= 0;
}

// Procesa cada columna con resultados: calcula el promedio para cada columna y se lo asigna al alumno
function processColumn(students, rangeData, col, height) {
  const category = rangeData[0][col].split("[")[0].replace(" ", "");
  if (!aContainsB(category, "Marca") && !aContainsB(category, "Si")){
    const name = rangeData[0][col].split("[")[1].replace("]", "");
    let count = 0;
    let sum = 0;
    if (!aContainsB(Object.keys(students), name)){
      students[name] = { contesta: false };
    }

    for (row = 1; row < height; row++) {
      if (rangeData[row][col] != "Este soy yo." && rangeData[row][col] != "") {
        sum += rangeData[row][col];
        count++;
      } else if (rangeData[row][col] === "Este soy yo.") {
        students[name].contesta = true;
      }
    }
    students[name][category] = sum / count;
  }
}

// Calcula las decimas obtenidas segun sus promedios en cada categoria
function calculateBonus(students){
  Object.keys(students).forEach(function(studentName){
    sum = 0;
    count = 0;
    Object.keys(students[studentName]).forEach(function(category){
      if (category != "contesta") {
        sum += students[studentName][category];
        count++;
      }
      var mean = sum / count;
      students[studentName]["promedio"] = mean;

      if (mean < 2.8) {
        var bonus = 8.5*(mean - 2.8);
      } else if (mean <= 3.2) {
        var bonus = 0;
      } else {
        var bonus = 8.5*(mean - 3.2);
      }

      if (!students[studentName]["contesta"]) {
        students[studentName]["bonus"] = Math.min(bonus, -0.3);
      } else {
        students[studentName]["bonus"] = bonus;
      }

    })
  })
}

// Calcula los resultados y los guarda en un diccionario
function getResults(){
  const nameColumn = 2;
  const groupColumn = 3;
  var students = {};
  var spreadsheet = SpreadsheetApp.getActive();
  var rangeData = spreadsheet.getActiveSheet().getDataRange().getValues();
  var width = rangeData[0].length;
  var height = rangeData.length;
  var categories = [];

  for (col = 3; col < width; col++){
    processColumn(students, rangeData, col, height);
  }

  calculateBonus(students);
  return students;

}

// Crea una nueva hoja y escribe los resultados
function writeResults(students){
  var resultsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Resultados");
  if (resultsSheet != null) {
        SpreadsheetApp.getActiveSpreadsheet().deleteSheet(resultsSheet);
    }
  resultsSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
  resultsSheet.setName("Resultados");

  resultsSheet.appendRow(["Nombre", "Reuniones", "Aporte", "Clima", "Promedio", "Responde Evaluación de Pares", "Décimas"]);
  Object.keys(students).forEach(function(studentName){
    resultsSheet.appendRow([studentName, students[studentName]["Reuniones"], students[studentName]["Aporte"], students[studentName]["Clima"], students[studentName]["promedio"],students[studentName]["contesta"],students[studentName]["bonus"]]);
  })
}

// Funcion que genera los resultados. Es la que se carga en el menu
function generateResults(){
  var students = getResults();
  writeResults(students);
}