const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeToggle.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});

const lightModeStyles = `
    body.light-mode {
        background: #f0f0f0;
        color: #333;
    }
    .light-mode .navbar { background: rgba(255, 255, 255, 0.9); }
    .light-mode .hero { background: linear-gradient(135deg, #f0f0f0, #d9e6ff); }
    .light-mode .skills, .light-mode .contact { background: #d9e6ff; }
    .light-mode .skill-card, .light-mode .project-card { background: #fff; }
    .light-mode footer { background: #e0e0e0; }
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = lightModeStyles;
document.head.appendChild(styleSheet);