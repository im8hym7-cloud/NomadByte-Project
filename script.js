// --- 1. إعداد العداد التنازلي (Countdown Timer) ---
function startCountdown() {
    // حدد موعد الـ Drop القادم (مثلاً بعد 3 أيام من الآن)
    const countDownDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        // حساب الأيام والساعات والدقائق والثواني
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // عرض النتيجة في العنصر الذي يحمل id="timer"
        const timerElement = document.getElementById("timer");
        if (timerElement) {
            timerElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        }

        // إذا انتهى الوقت
        if (distance < 0) {
            clearInterval(x);
            if (timerElement) timerElement.innerHTML = "DROP IS LIVE";
        }
    }, 1000);
}

// --- 2. التمرير الناعم (Smooth Scroll) ---
function initSmoothScroll() {
    const scrollButton = document.querySelector('.btn-primary');
    if (scrollButton) {
        scrollButton.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
}

// --- 3. نظام سلة المشتريات البسيط (Cart Feedback) ---
function initCartSystem() {
    const addButtons = document.querySelectorAll('.product-card .btn-primary');
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h3').innerText;
            
            // تغيير نص الزر مؤقتاً كنوع من التفاعل
            const originalText = this.innerText;
            this.innerText = "ADDED TO BAG ✓";
            this.style.backgroundColor = "#ffffff";
            this.style.color = "#000000";

            setTimeout(() => {
                this.innerText = originalText;
                this.style.backgroundColor = "";
                this.style.color = "";
            }, 2000);

            console.log(`Product added: ${productName}`);
        });
    });
}

// --- 4. تشغيل جميع الوظائف عند تحميل الصفحة ---
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    initSmoothScroll();
    initCartSystem();
    console.log("NomadByte Engine Active 🚀");
});
