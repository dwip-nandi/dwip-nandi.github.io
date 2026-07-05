document.getElementById('see-more-btn').addEventListener('click', function() {
    const hiddenProjects = document.querySelectorAll('.extra-project');
    
    // বাটন এর বর্তমান টেক্সট চেক করা হচ্ছে
    if (this.innerText.trim() === 'See More') {
        // সব অতিরিক্ত প্রজেক্ট শো করবে
        hiddenProjects.forEach(project => {
            project.classList.remove('d-none');
        });
        // বাটনের নাম চেঞ্জ হয়ে যাবে
        this.innerText = 'See Less';
    } else {
        // সব অতিরিক্ত প্রজেক্ট আবার হাইড হবে
        hiddenProjects.forEach(project => {
            project.classList.add('d-none');
        });
        // বাটনের নাম আগের মতো হয়ে যাবে
        this.innerText = 'See More';
        
        // See Less করার পর স্ক্রল যেন লাফ দিয়ে উপরে না উঠে যায়, তার জন্য স্মুথলি প্রজেক্ট সেকশনে ফেরত নিয়ে যাবে
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }
});