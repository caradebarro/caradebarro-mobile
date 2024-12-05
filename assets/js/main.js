// Configuração da API do WordPress
const WP_API_URL = '/wp/wp-json/wp/v2';

// Adiciona efeito de ripple aos botões
document.querySelectorAll('.grid-item').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        
        ripple.className = 'ripple-effect';
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Navegação para as diferentes seções
function navigateTo(section) {
    const sections = {
        blog: '/wp/blog',
        'loja-treinos': '/wp/loja/treinos',
        calculadoras: '/calculadoras',
        'loja-roupas': '/wp/loja/roupas',
        youtube: 'https://youtube.com/SEU_CANAL',
        documentarios: '/documentarios',
        calendario: '/calendario'
    };

    if (sections[section]) {
        window.location.href = sections[section];
    }
}

// Detecta se está sendo visualizado como PWA
function isPWA() {
    return window.matchMedia('(display-mode: standalone)').matches;
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona classe para animações em elementos visíveis
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.grid-item').forEach(item => observer.observe(item));
});
