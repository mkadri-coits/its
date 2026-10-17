function sendToWhatsApp() {
    // 1. جلب البيانات المدخلة من الخانات
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;

    // 2. التحقق من ملء الخانات أولاً
    if (!name!email!description || !price) {
        alert("من فضلك، املأ جميع الحقول واكتب السعر المناسب لك أولاً! ⚠️");
        return;
    }

    // 3. تنسيق الرسالة لتوصلك منظمة وباهية في حسابك
    const messageText = * طلب جديد لتطوير موقع إلكتروني!🛠️ * \n\ n + 👤 * الإسم الكامل: * $ { name }\
    n + 📧 * بريد الزبون: * $ { email }\
    n + 💰 * الميزانية المحددة: * $ { price }\
    n\ n + 📝 * وصف الموقع المطلوب: * \n$ { description };

    const encodedMessage = encodeURIComponent(messageText);

    // 4. رقم الواتساب الخاص بك مضبوط ومفعل بشكل آمن للجزائر
    const myPhoneNumber = "213778928781";

    // 5. فتح الواتساب فوراً وبدون أي تدوير أو وسيط خارجي ومضمون 100%
    const whatsappUrl = https: //whatsapp.com{myPhoneNumber}&text=${encodedMessage};

        window.open(whatsappUrl, '_blank');
}