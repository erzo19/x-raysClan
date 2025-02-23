// دالة لإغلاق رسالة التنبيه
function اغلاقالتنبيه() {
    document.getElementById("overlayAviso").style.display = "none";
}

// دالة لإغلاق رسالة النجاح
function اغلاقالحوار() {
    document.getElementById("dialogo").style.display = "none";
}

// التعامل مع إرسال النموذج
document.getElementById("recrutamentoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    if (!document.getElementById("aceitarRegras").checked) {
        alert("⚠️ يجب الموافقة على القواعد قبل الإرسال!");
        return;
    }

    let الاسم = document.getElementById("nome").value;
    let اللقب = document.getElementById("nick").value;
    let المعرف = document.getElementById("id").value;
    let الواتساب = document.getElementById("contato").value;

    let الرسالة = `🔥 طلب تسجيل 🔥\n\n` +
                   `👤 الاسم: ${الاسم}\n` +
                   `🎮 اللقب: ${اللقب}\n` +
                   `🆔 معرف Free Fire: ${المعرف}\n` +
                   `📱 واتساب: ${الواتساب}\n\n` +
                   `💀 تم الإرسال عبر نموذج التسجيل الخاص بالكلان!`;

    let رابطAPI = `https://api.callmebot.com/whatsapp.php?phone=201007224767&text=استقبلنا+طلبك+يخويا+هراجع+بياناتك+وهرد+عليك+يخويا+عشان+اعملك+تست+للكلان&apikey=3473139`;

    fetch(رابطAPI)
        .then(response => {
            if (response.ok) {
                document.getElementById("dialogo").style.display = "block";
            } else {
                alert("❌ خطأ في إرسال الطلب. حاول مرة أخرى لاحقًا.");
            }
        })
        .catch(error => {
            alert("❌ فشل الاتصال بالخادم.");
        });
});