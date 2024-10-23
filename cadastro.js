function CADASTRO() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validação de email simples
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    // Validação de senha (mínimo 8 caracteres)
    if (password.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
        return false;
    }

    // Se passar na validação, permite o envio do formulário
    return true;
}