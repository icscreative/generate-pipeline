$(function () {
    
    const bars = document.querySelectorAll('.bar');
    const texts = document.querySelectorAll('.txt');

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        texts.forEach(text => text.classList.add('animate'));
        }
    });
    }, {
    threshold: 0.5
    });

    bars.forEach(bar => {
    observer.observe(bar);
    });
});