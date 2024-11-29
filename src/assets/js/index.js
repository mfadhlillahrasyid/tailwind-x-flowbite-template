window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    // Jika scroll lebih dari 50px, tambahkan kelas bg-white
    if (window.scrollY > 10) {
        navbar.classList.add('bg-white', 'shadow');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.remove('bg-white', 'shadow');
        navbar.classList.add('bg-transparent');
    }
});