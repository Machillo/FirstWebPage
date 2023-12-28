// Acount Form

document.getElementById('optionsSelect').addEventListener('change', showOptions);

function showOptions() {
    const optionsSelect = document.getElementById('optionsSelect');

    document.querySelectorAll('.options').forEach(option => {
        //hide options
        option.style.display = 'none';
    });

    //show options
    const selectedOption = document.getElementById(`options-${optionsSelect.value}`);
    if (selectedOption) {
        selectedOption.style.display = 'block';
    }

    //show the balance
    const balanceElement = document.getElementById('balance');
    if (optionsSelect.value === 'card') {
        balanceElement.innerText = 'balance de tarjeta: ₡';
    } else if (optionsSelect.value === 'cash') {
        balanceElement.innerText = 'Balance de efectivo: ₡';
    } else {
        balanceElement.innerText = '';
    }
}

showOptions();