const toggleButton = document.getElementById('toggle-mode');
const body = document.body;
const aside = document.querySelector('aside'); // Seleciona o elemento aside

// Verifica se o modo escuro está armazenado no localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    aside.classList.add('dark-mode'); // Adiciona a classe ao aside
    toggleButton.textContent = 'Ativar Modo Claro';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    aside.classList.toggle('dark-mode'); // Alterna a classe no aside

    // Atualiza o texto do botão com base no modo atual
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Ativar Modo Claro';
        localStorage.setItem('dark-mode', 'enabled'); // Armazena a preferência do usuário
    } else {
        toggleButton.textContent = 'Ativar Modo Escuro';
        localStorage.setItem('dark-mode', 'disabled'); // Armazena a preferência do usuário
    }
});
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    aside.classList.toggle('dark-mode'); // Alterna a classe no aside

    console.log('Body classes:', body.classList);
    console.log('Aside classes:', aside.classList);
