// Date methods
let date = new Date();

console.log(formatDate(date));

function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        hour = d.getHours(),
        minute ='' + d.getMinutes(),
        second ='' + d.getSeconds(),
        mid = 'AM';

    if(hour > 12){
        hour -= 12;
        mid = 'PM';
    }
    hour = '' + hour;
    console.log(hour.length);
    if(month.length < 2) month = '0' + month;
    if(day.length < 2) day = '0' + day;
    if(hour.length < 2) hour = '0' + hour;
    if(minute.length < 2) minute = '0' + minute;
    if(second.length < 2) second = '0' + second;

    const time = [];
    time['day'] = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"][d.getDay()];
    time['date'] = [day, month, year].join('-');
    time['time'] = [hour, minute, second].join(':') + ' ' + mid;
    return  time;
}