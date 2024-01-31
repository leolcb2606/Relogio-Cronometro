let cronometroInterval; // Variável para armazenar o intervalo do cronômetro
let segundosCronometro = 0;
let pausado = false;


function atualizarRelogio() {
    const data = new Date();
    
    // Ajustar para o fuso horário de Brasília (GMT-3)
    const fusoHorarioBrasilia = -3 * 60; // Brasília é GMT-3
    const diferencaGMT = data.getTimezoneOffset();
    data.setMinutes(data.getMinutes() + diferencaGMT + fusoHorarioBrasilia);
    
    const horas = formatarNumero(data.getHours());
    const minutos = formatarNumero(data.getMinutes());
    const segundos = formatarNumero(data.getSeconds());
    
    document.getElementById('clock').innerText = `${horas}:${minutos}:${segundos}`;
}

function formatarNumero(numero) {
    return numero < 10 ? '0' + numero : numero;
}

// Atualizar o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Iniciar o relógio
atualizarRelogio();

function iniciarCronometro() {
    if (!pausado) {
        segundosCronometro = 0; // Reseta o cronômetro se não estiver pausado
    }
    
    cronometroInterval = setInterval(function() {
        segundosCronometro++;
        document.getElementById('clock').innerText = formatarNumero(Math.floor(segundosCronometro / 3600)) + ":" + formatarNumero(Math.floor((segundosCronometro % 3600) / 60)) + ":" + formatarNumero(segundosCronometro % 60);
    }, 1000);

    // Abrir a página secundária
    window.open('cronometro.html', 'Cronômetro', 'width=300,height=200,top=100,left=100');
}

function pausarCronometro() {
    clearInterval(cronometroInterval);
    pausado = true;
}