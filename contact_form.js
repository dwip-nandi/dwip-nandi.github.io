// নিশ্চিত করিস তোর HTML ফাইলে EmailJS SDK স্ক্রিপ্ট লিংকটা যেন উপরে যুক্ত থাকে
emailjs.init("9kIP39WnGZ-yI7J5L");

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // পেজ সাবমিট হয়ে রিফ্রেশ হওয়া বন্ধ করবে

    const btn = this.querySelector('.btn-contact-send');
    const originalBtnText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Sending...';
    btn.disabled = true; // যেন একাধিকবার ক্লিক না করতে পারে

    // বর্তমান সময় ও তারিখ সুন্দর ফরম্যাটে তৈরি করা
    const currentDateTime = new Date().toLocaleString('en-US', { 
        timeZone: 'Asia/Dhaka',
        dateStyle: 'medium', 
        timeStyle: 'short' 
    });

    // EmailJS টেমপ্লেটের ভ্যারিয়েবলের সাথে মানগুলো ম্যাপ করা
    const templateParams = {
        name: document.getElementById('user_name').value,
        email: document.getElementById('user_email').value,
        subject: document.getElementById('user_subject').value,
        message: document.getElementById('user_message').value,
        time: currentDateTime
    };

    // EmailJS-এর মাধ্যমে পাঠানো
    emailjs.send('service_f4xwgls', 'template_6v43vqk', templateParams)
        .then(function(response) {
            alert('Your message has been sent successfully!'); 
            document.getElementById('contact-form').reset(); // ফর্মের টেক্সট ক্লিয়ার করা
            btn.innerHTML = originalBtnText;
            btn.disabled = false;
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.error('EmailJS Error:', error);
            btn.innerHTML = originalBtnText;
            btn.disabled = false;
        });
});