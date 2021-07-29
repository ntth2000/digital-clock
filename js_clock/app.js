//=============GET TIME==============/
function getTime() {
    let getdate = new Date();
    let h = getdate.getHours();
    let m = getdate.getMinutes();
    let s = getdate.getSeconds();

    if (h < 10) {
        h = '0' + h
    }
    if (m < 10) {
        m = '0' + m
    }
    if (s < 10) {
        s = '0' + s
    }

    let time = `${h}:${m}:${s}`;
    document.querySelector('.clock').innerText = time;
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let day = getdate.getDay();
    let date = getdate.getDate();
    let month = getdate.getMonth();
    let ddddmm = `${week[day]}, ${date} ${months[month]}`
    document.querySelector('.day').innerText = ddddmm;
    setTimeout(getTime, 1000);
}

getTime()