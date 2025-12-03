let cDay;
let cHour;
let cMin;
let cSec;
let cMonth;
let cDaysleft;
let cYear;
let cFeb;
let cDaysYear;

var interval=window.setInterval(function(){
    var cDate = new Date();
    cHour = cDate.getHours();
    cMin = cDate.getMinutes();
    cSec = cDate.getSeconds();
    cDay = cDate.getDay();
    cMonth = cDate.getMonth();
    cYear = cDate.getFullYear();

    if(cYear % 4 == 0){
            cFeb = 29;
            cDaysYear = 366;
    }
    else{
        cFeb = 28;
        cDaysYear = 365;
    }

    switch(cMonth+1){
        case 1:
            cDaysleft = cDaysYear;
            break;
        case 2:
            cDaysleft = cDaysYear - 31;
            break;
        case 3:
            cDaysleft = cDaysYear - (31+cFeb);
            break;
        case 4:
            cDaysleft = cDaysYear - (62+cFeb);
            break;
        case 5:
            cDaysleft = cDaysYear - (92+cFeb);
            break;
        case 6:
            cDaysleft = cDaysYear - (123+cFeb);
            break;
        case 7:
            cDaysleft = cDaysYear - (153+cFeb);
            break;
        case 8:
            cDaysleft = cDaysYear - (184+cFeb);
            break;
        case 9:
            cDaysleft = cDaysYear - (214+cFeb);
            break;
        case 10:
            cDaysleft = cDaysYear - (245+cFeb);
            break;
        case 11:
            cDaysleft = cDaysYear - (275+cFeb);
            break;
        case 12:
            cDaysleft = cDaysYear - (306+cFeb);
            break;                     
                 

    }
    console.log(cDay,cYear,cFeb,cDaysYear,cDaysleft); 

    document.getElementById('second').innerHTML=60-cSec; 
    document.getElementById('minutes').innerHTML=60-cMin;
    document.getElementById('hourse').innerHTML=24-cHour;
    document.getElementById('days').innerHTML=cDaysleft - cDay;

},1000)