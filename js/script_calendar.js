

let monthNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

let currentDate = new Date();
let currentD = currentDate.getDay();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');
let day = document.getElementById('first-day');
let today = document.getElementById('');

let prevMonthDom = document.getElementById('prev-month');
let nextMonthDom = document.getElementById('next-month');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();


prevMonthDom.addEventListener('click', ()=>lastMonth());
nextMonthDom.addEventListener('click', ()=>nexMonth());


document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los elementos con la clase 'days'
    var daysElements = document.querySelectorAll('.arrow');
    // Agrega un controlador de eventos a cada elemento 'days'
    daysElements.forEach(function(dayElement) {
        dayElement.addEventListener('click', function(event) {
            // Cierra el dropdown-menu
            var dropdownMenu = document.querySelector('.dropdown-menu');
            dropdownMenu.style.display = 'none';
            
            // Evita que el clic se propague a otros elementos y cierre el menú
            event.stopPropagation();
        });
    });
});

// También puedes necesitar prevenir que el clic se propague al body y cierre el menú
document.body.addEventListener('click', function() {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = 'none';
});


function getTotalDays(month){
    if(month === -1) month = 11;

    if(month == 0 || month == 2 || month == 4 || month == 6 || month == 7 ||
        month == 9 || month == 11) {
            return 31;
        }
        else if(month == 3 || month == 5 || month == 8 || month == 10){
            return 30;
        }
        else{
            return isLeap() ? 29:28;
        }
}

//biciesto
function isLeap(){
    return((currentYear % 100 !== 0) && (currentYear % 4 === 0) || (currentYear % 400 === 0))
}

function starDay(){
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay() -1;
}

function lastMonth(){
    if(monthNumber !== 0){
        monthNumber--;
    }
    else{
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

function nexMonth(){
    if(monthNumber !== 11){
        monthNumber++;
    }
    else{
        monthNumber = 0;
        currentYear++;
    }
    setNewDate();
}

function setNewDate(){
    currentDate.setFullYear(currentYear, monthNumber, currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    var primerDia = new Date(year.textContent,monthNumber,1);
        var firstDayElement = document.querySelector('.first-day');
        firstDayElement.style.gridColumnStart = primerDia.getDay();
}



function primerDia(año){
    for(var month = 1; month <=12; month++){
        var firstDayOfWeek = getFristDayOfMonth(año, month);
    }
}

