function checkAge() {
    let age = parseInt(document.getElementById('ageInput').value);
    let category;

    if (isNaN(age) || age < 0) {
        category = "Invalid age. Please enter a valid number.";
    } else if (age <= 12) {
        category = "Child";
    } else if (age <= 19) {
        category = "Teenager";
    } else if (age >= 20) {
        category = "Adult";
    }

   alert(category);
}
