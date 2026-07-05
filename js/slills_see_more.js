document.getElementById('skills-toggle-btn').addEventListener('click', function() {
    const extraSkills = document.querySelectorAll('.extra-skill');
    // প্রথম এক্সট্রা স্কিলটি হাইড করা আছে কিনা তা চেক করছি
    const isHidden = extraSkills[0].classList.contains('d-none');
    
    extraSkills.forEach(skill => {
        if (isHidden) {
            skill.classList.remove('d-none');
        } else {
            skill.classList.add('d-none');
        }
    });
    
    // বাটনের টেক্সট এবং আইকন পরিবর্তন
    if (isHidden) {
        this.innerHTML = 'See Less <i class="fas fa-chevron-up ms-1"></i>';
    } else {
        this.innerHTML = 'See More <i class="fas fa-chevron-down ms-1"></i>';
        // সি লেস করার পর স্ক্রল করে আবার স্কিল সেকশনের শুরুতে নিয়ে যাওয়ার জন্য (ঐচ্ছিক)
        document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
    }
});