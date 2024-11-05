/* функция счётчика */
var balance = document.getElementById('score');
var buttonId = document.getElementById('btn');
var counter = 0;
const maxEnergy = 1000;
let currentEnergy = maxEnergy;

buttonId.addEventListener('click',function(){
    if (currentEnergy > 0){
        counter++;
        currentEnergy -= 10;
        updateUI();
    }else{
        alert("Энергия исчерпана!");
    }
    
});

function updateUI(){
    balance.textContent = 'Balance: ' + counter;
    const energyPercentage = (currentEnergy / maxEnergy) * 100;
    energyFill.style.width = `${energyPercentage}%`;
}

/* функция восстановления энергии */

function restoreEnergy() {
    if (currentEnergy < maxEnergy) {
        currentEnergy += 5; // Увеличиваем энергию на 5 (можно изменить на нужное значение)
        energyCapacity.textContent = currentEnergy + '/1000'
        updateUI();
        if (currentEnergy > maxEnergy) {
            currentEnergy = maxEnergy; // Ограничиваем значение максимальной энергией
        }
        updateUI(); // Обновляем интерфейс
    }
}

// Запускаем восстановление энергии каждые 1000 миллисекунд (1 секунда)
setInterval(restoreEnergy, 1000);