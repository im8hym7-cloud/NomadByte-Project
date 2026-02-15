// تحديد وقت نهاية الـ Drop (مثلاً بعد 3 أيام من الآن)
let dropDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);

let timerFunc = setInterval(function() {
    let now = new Date().getTime();
    let distance = dropDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(timerFunc);
        document.getElementById("timer").innerHTML = "DROP IS LIVE!";
    }
}, 1000);
