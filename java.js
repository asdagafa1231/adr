document.getElementById('calcularFrete').addEventListener('click', function() {
    const cep = document.getElementById('cep').value;
    
    // Simulação de cálculo de frete baseado no CEP
    if (!cep.match(/^\d{5}-\d{3}$/)) {
        document.getElementById('resultado').innerText = "Por favor, insira um CEP válido (Ex: 12345-678).";
        return;
    }

    // Exemplo de cálculo fictício do frete
    const valorFrete = Math.random() * 30 + 10; // Simula um valor entre R$ 10,00 e R$ 40,00
    document.getElementById('resultado').innerText = `O valor do frete para o CEP ${cep} é: R$ ${valorFrete.toFixed(2)}`;
});
