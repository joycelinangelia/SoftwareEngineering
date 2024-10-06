function selectTime(time, button) {
    // Set the value of the hidden input field
    document.getElementById('selected-time').value = time;

    // Remove the 'selected' class from all buttons
    const buttons = document.querySelectorAll('.time-button');
    buttons.forEach(btn => {
        btn.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked button
    button.classList.add('selected'); // Use the button passed as argument
}
