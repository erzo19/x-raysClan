document.getElementById("recrutamentoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    if (!document.getElementById("aceitarRegras").checked) {
        alert("⚠️ يجب الموافقة على القواعد قبل الإرسال!");
        return;
    }

    let userName = document.getElementById("nome").value.trim();
    let userNick = document.getElementById("nick").value.trim();
    let userID = document.getElementById("id").value.trim();
    let userPhone = document.getElementById("contato").value.trim();

    if (userName === "" || userNick === "" || userID === "" || userPhone === "") {
        alert("⚠️ جميع الحقول مطلوبة! تأكد من ملء جميع البيانات.");
        return;
    }

    let adminPhone = "201007224767"; // رقمك الذي ستستقبل عليه الطلبات
    let apiKey = "3473139"; // API Key الخاص بـ CallMeBot

    let message = `🔥 طلب تقديم جديد 🔥\n\n👤 الاسم: ${userName}\n🎮 نيك نيم: ${userNick}\n🆔 ID: ${userID}\n📞 رقم الهاتف: ${userPhone}`;

    let apiURL = `https://api.callmebot.com/whatsapp.php?phone=${adminPhone}&text=${encodeURIComponent(message)}&apikey=${apiKey}`;

    fetch(apiURL)
        .then(response => response.text())
        .then(data => {
            alert("✅ تم إرسال الطلب بنجاح! سيتم التواصل معك قريبًا.");
            document.getElementById("recrutamentoForm").reset(); // مسح البيانات بعد الإرسال
        })
        .catch(error => {
            alert("❌ حدث خطأ أثناء إرسال الطلب! حاول مرة أخرى لاحقًا.");
        });
});
