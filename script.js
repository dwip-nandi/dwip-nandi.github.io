document.addEventListener("DOMContentLoaded", function() {
    
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const toggleBtn = document.getElementById('sidebarCollapse');

    // ১. মেনু টগল লজিক (বাইরের বাটন দিয়ে)
    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        content.classList.toggle('active');
    });

    // ২. মেনু লিংকে ক্লিক করলে স্মুথ স্ক্রল
    const links = document.querySelectorAll('#sidebar ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // একটিভ ক্লাস আপডেট
            links.forEach(l => l.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');

            // মোবাইলে ক্লিক করার পর মেনু অটো বন্ধ হবে
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    // ৩. স্ক্রল করার সময় অটোমেটিক মেনু একটিভ হওয়া
    window.addEventListener('scroll', function() {
        let current = "";
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.parentElement.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.parentElement.classList.add('active');
            }
        });
    });
});

// counter annimation in my profile section
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = 200; // যত কমাবে তত দ্রুত হবে
            
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + "+"; // শেষে প্লাস সাইন যোগ করার জন্য
            }
        };
        updateCount();
    });
});

// -------------------------- about me section-------------
const infoData = {
    personal: "Hello! I am Dwip Nandi, a compassionate engineering student. I love inspirational stories and am always looking for new challenges.",
    programming: "C++, PHP, and Laravel are my main focus. I have solved 300+ problems and am passionate about data structures and algorithms.",
    research: "I am actively researching in the fields of IoT, AI, and Agri-Tech to develop innovative solutions for the agricultural sector in Bangladesh.",
    dev: "I enjoy building full-stack web applications. Projects like 'AI Interviewer' and 'Study Lab' showcase my development and problem-solving skills."
};

function showInfo(type, element) {
    const textElement = document.getElementById('about-text');
    
    // ডেসক্রিপশন পরিবর্তন উইথ এনিমেশন
    textElement.style.opacity = 0; 
    setTimeout(() => {
        textElement.innerText = infoData[type];
        textElement.style.opacity = 1;
    }, 200);

    // অ্যাক্টিভ বাটন স্টাইল পরিবর্তন
    const buttons = document.querySelectorAll('.info-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}