// script.js

document.getElementById('akanForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!birthdate || !gender) {
        document.getElementById('result').textContent = 'Please enter your birthdate and select a gender.';
        return;
    }

    const date = new Date(birthdate);
    const day = date.getDate();
    const month = date.getMonth() + 1; // JavaScript months are 0-indexed
    const year = date.getFullYear();

    if (day < 1 || day > 31 || month < 1 || month > 12) {
        document.getElementById('result').textContent = 'Invalid date entered.';
        return;
    }

    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = day;

    const dayOfWeek = Math.floor(( ( (CC / 4) - (2 * CC) - 1 + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD ) % 7));
    const dayIndex = ((dayOfWeek + 7) % 7); // Ensure non-negative index

    const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

    const akanName = gender.value === 'male' ? maleNames[dayIndex] : femaleNames[dayIndex];

    document.getElementById('result').textContent = `Your Akan name is ${akanName}.`;
});