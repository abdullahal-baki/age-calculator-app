// all variabls
const dayError = document.getElementById('dayError');
const monthError = document.getElementById('monthError');
const yearError = document.getElementById('yearError');
const calcBtn = document.getElementById('calcBtn');

const rawDay = document.getElementById('day');
const rawMonth = document.getElementById('month');
const rawYear = document.getElementById('year');

const calcedDayElem = document.getElementById('calcedDay');
const calcedMonthElem = document.getElementById('calcedMonth');
const calcedYearElem = document.getElementById('calcedYear');

let calcedDay = 0;
let calcedMonth = 0;
let calcedYear = 0;

dayError.style.display = "none";
monthError.style.display = "none";
yearError.style.display = "none";

let currentDate = new Date()
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

calcBtn.addEventListener('click', startCalc);



function startCalc(){
    let de = handleDayError();
    let me = handleMonthError();
    let ye = handleYearError();
    if ( de && me && ye){
        console.log('ok')
        DoCalc();

    }else{
        calcedDayElem.innerHTML = "--";
        calcedMonthElem.innerHTML = "--";
        calcedYearElem.innerHTML = "--";
    }
}

function DoCalc(){
    // 22 years 9 months 22 days

    day = parseInt(rawDay.value);
    month = parseInt(rawMonth.value);
    year = parseInt(rawYear.value);
    
    calcedYear = currentYear - year;

    //check month
    if (currentMonth < month){
        calcedYear--;
        calcedMonth = currentMonth+12 - month;
    }else{
        calcedMonth = currentMonth - month;
    }

    //check month
    if (currentDay < day){
        calcedMonth--;
        calcedDay = currentDay+31 - day;
    }else{
        calcedDay = currentDay - day;
    }

    // console.log('age: '+calcedYear);
    // console.log('month: '+calcedMonth);
    // console.log('day: '+calcedDay);

    calcedDayElem.innerHTML = calcedDay;
    calcedMonthElem.innerHTML = calcedMonth;
    calcedYearElem.innerHTML = calcedYear;

}
function handleDayError(){
    // console.log(rawMonth.value);
    if(rawDay.value == ""){
        console.log('empty');
        dayError.style.display = 'block';
        dayError.innerHTML = `Day not to be empty`;
        return false;
    }
    else{
        if (!isNaN(parseInt(rawDay.value)) && parseInt(rawDay.value) < 32){
            dayError.style.display = 'none';
            if (rawMonth.value == ""){
                console.log('month empty');
                return true;
            }else{
                console.log();
                // rawMonth.value == 1 || rawMonth.value == 3 ||rawMonth.value == 5 || rawMonth.value == 7 || rawMonth.value == 8 ||
                if ([1,3,5,7,8,10,12].includes(parseInt(rawMonth.value))){
                    return true;

                }else{
                    if ( parseInt(rawDay.value) > 30){
                        dayError.style.display = 'block';
                        dayError.innerHTML = `Invalid day`;
                        return false;
                    }else{
                        return true;
                    }
                }
            }
            
        }
        else{
            console.log('invild');
            dayError.style.display = 'block';
            dayError.innerHTML = `Invalid day`;
            return false;
        }
    }
    
   
}

function handleMonthError(){
    // console.log(rawMonth.value);
    if(rawMonth.value == ""){
        console.log('empty');
        monthError.style.display = 'block';
        monthError.innerHTML = `Month not to be empty`;
        return false;
    }
    else{
        if (!isNaN(parseInt(rawMonth.value)) && parseInt(rawMonth.value) < 13){
            monthError.style.display = 'none';
            return true;
        }
        else{
            console.log('invild');
            monthError.style.display = 'block';
            monthError.innerHTML = `Invalid month`;
            return false;
        }
    }
}
function handleYearError(){
    // console.log(rawMonth.value);
    if(rawYear.value == ""){
        console.log('empty');
        yearError.style.display = 'block';
        yearError.innerHTML = `Year not to be empty`;
        return false;
    }
    else{
        if (!isNaN(parseInt(rawYear.value)) && parseInt(rawYear.value) <= currentYear){
            yearError.style.display = 'none';
            return true;
        }
        else{
            console.log('invild');
            yearError.style.display = 'block';
            yearError.innerHTML = `Invalid year`;
            return false;
        }
    }
}
