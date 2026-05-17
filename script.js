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

    //automatic menu
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
            const speed = 200;
            
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + "+"; 
            }
        };
        updateCount();
    });
});

// -------------------------- about me section-------------
const infoData = {
    personal: "Hello, I am a 4th-year undergraduate student in the Department of Information and Communication Engineering (ICE) at the University of Rajshahi. As a final-year student, I am deeply involved in exploring the intersection of communication technology and software engineering. I am driven by a passion for solving complex problems and am constantly looking for opportunities to apply my academic knowledge to real-world technical challenges.",
    programming: "I have a strong foundation in competitive programming, primarily using C and C++. To date, I have successfully solved over 800 problems across various online judges and participated in numerous online and offline programming contests. I have mastered essential data structures and algorithms, which has honed my analytical thinking and efficiency in writing clean, optimized, and scalable code.",
    research: "My research interests focus on cutting-edge technologies like Human-Computer Interaction (HCI), Microstrip Patch Antennas, and Virtual Reality (VR). I am currently working on an AI-based Bengali Sign Language Detection system using computer vision. My goal is to contribute to the scientific community by developing innovative solutions that integrate advanced hardware and intelligent software systems.",
    dev: "I am an experienced Web Developer specializing in PHP and Laravel for building robust, scalable applications. My expertise includes developing ERP systems, Dynamic Store Management platforms, and integrating AI-driven features with RESTful APIs. Additionally, I am proficient in WordPress, capable of designing custom pages and developing personalized themes and plugins to meet specific client requirements."
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