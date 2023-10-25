//Напишите программу, которая будет преобразовывать дату рождения в соответствующий знак зодиака (написала к ней html и css)
function identifyZodiaSign(){
    let zodiac = [
       { id:"Водолей", startMonth: "январ", startMonthNum:"1", startDay: 21, endMonth:"феврал",endMonthNum:"2",endDay:19},
       { id:"Рыбы", startMonth: "феврал", startMonthNum:"2", startDay: 20, endMonth:"март",endMonthNum:"3",endDay:20},
       { id:"Овен", startMonth: "март", startMonthNum:"3", startDay :21, endMonth:"апрел",endMonthNum:"4",endDay:20},
       { id:"Телец", startMonth: "апрел", startMonthNum:"4", startDay:21, endMonth:"май",endMonthNum:"5",endDay:21},
       { id:"Близнецы", startMonth: "май", startMonthNum:"5", startDay:22, endMonth:"июн",endMonthNum:"6",endDay:21},
       { id:"Рак", startMonth: "июн", startMonthNum:"6", startDay :22, endMonth:"июл",endMonthNum:"7",endDay:22},
       { id:"Лев", startMonth: "июл", startMonthNum:"7", startDay :23, endMonth:"август",endMonthNum:"8",endDay:21},
       { id:"Дева", startMonth: "август", startMonthNum:"8", startDay :22, endMonth:"сентябр",endMonthNum:"9",endDay:23},
       { id:"Весы", startMonth: "сентябр", startMonthNum:"9", startDay :24, endMonth:"октябр",endMonthNum:"10",endDay:23},
       { id:"Скорпион", startMonth: "октябр", startMonthNum:"10", startDay :24, endMonth:"ноябр",endMonthNum:"11",endDay:22},
       { id:"Стрелец", startMonth: "ноябр", startMonthNum:"11", startDay :23, endMonth:"декабр",endMonthNum:"12",endDay:22},
        { id:"Козерог", startMonth: "декабр", startMonthNum:"12", startDay :23, endMonth:"январ",endMonthNum:"1",endDay: 20}
    ];
    let ranges = [31,28,31,30,31,30,31,31,30,31,30,31];
    let day = getDay();
    let month = getMonth();
    let result = null;


 for(let i=0;i<zodiac.length;i++){
     let f=zodiac[i];
     if((month.indexOf( f.startMonth) >=0 ||
             month === f.startMonthNum) && day<=ranges[i]&&(day >= f.startDay) ||
             (month.indexOf( f.endMonth) >=0 || (month ===
             f.endMonthNum ) && (day <= f.endDay))){
         result = f.id;
         break;
     }
}

    document.getElementById("result").innerHTML = result?result:"!!!!";
        /*
         Овен: 21 марта – 20 апреля
         Телец: 21 апреля – 21 мая
         Близнецы: 22 мая – 21 июня
         Рак: 22 июня – 22 июля
         Лев: 23 июля – 21 августа
         Дева: 22 августа – 23 сентября
         Весы: 24 сентября – 23 октября
         Скорпион: 24 октября – 22 ноября
         Стрелец: 23 ноября – 22 декабря
         Козерог: 23 декабря – 20 января
         Водолей: 21 января – 19 февраля
         Рыбы: 20 февраля – 20 марта
         */
}

function getDay() {
let valInputDay = document.getElementById("day").value;
        return +valInputDay;
}

function getMonth() {
    let valInputMonth= document.getElementById("month").value;
    valInputMonth = valInputMonth.toLowerCase();
    if(valInputMonth[0] === "0"){
   valInputMonth =  valInputMonth[1];
    }
    if(valInputMonth === "мая"){
       valInputMonth =  "май";
    }
    validationField();
    return valInputMonth;
};

function validationField(){
    let fieldMonth = document.getElementById("month");
    const maxLength=2;

    if(fieldMonth.value[0] === "0" || fieldMonth.value[0]==="1"){
          fieldMonth.addEventListener("input[2]", function( ){
            if(this.value.length > maxLength)
            {
                this.value=this.value.slice(0, maxLength);
            }
            });
    }
}