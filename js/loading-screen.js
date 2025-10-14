document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const contentWrapper = document.querySelector('.content-wrapper');

    // Check if loading screen has already been shown
    const hasSeenLoading = localStorage.getItem('hasSeenLoadingScreen');

    if (!hasSeenLoading) {
        // First visit: show loading screen
        document.body.classList.add('loading');
        loadingScreen.style.display = 'flex'; // Ensure loading screen is visible
        // Show loading screen for 4 seconds, then fade out for 0.5s (total 4.5s)
        setTimeout(function() {
            loadingScreen.classList.add('fade-out');
            document.body.classList.remove('loading');
            contentWrapper.classList.add('visible');
            localStorage.setItem('hasSeenLoadingScreen', 'true');
            setTimeout(function() {
                loadingScreen.remove();
            }, 500); // fade-out duration
        }, 4000); // visible duration before fade-out
    } else {
        // Not first visit: skip loading screen
        loadingScreen.style.display = 'none';
        contentWrapper.classList.add('visible');
    }
});