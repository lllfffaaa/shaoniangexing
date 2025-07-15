function showTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1; 
    var day = date.getDate();
    var week; 
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var date = new Date();  
    var week = date.getDay();  
    switch(date.getDay()) {  
        case 0:  
            week ="日";  
            break;  
        case 1:  
            week ="一";  
            break;  
        case 2:  
            week ="二";  
            break;  
        case 3:  
            week ="三";  
            break;  
        case 4:  
            week ="四";  
            break;  
        case 5:  
            week ="五";  
            break;  
        case 6:  
            week ="六";  
            break;  
    }
    // 确保每个部分都有两位数字  
    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var dateTimeString = year + "年" + month + "月" + day + "日 " +"星期"+ week +" "+ hours + ":" + minutes + ":" + seconds;
    document.getElementById("datetime1").textContent = dateTimeString;
}

// 初始显示时间  
showTime();
// 每秒更新一次时间  
setInterval(showTime, 1000);



