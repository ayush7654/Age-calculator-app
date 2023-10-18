const dates = document.getElementById("date");
const months = document.getElementById("month");
const years = document.getElementById("year");
const btn = document.getElementById("btn");

// Store the initial colors of the input fields and headings
const initialInputColors = [dates, months, years].map(inputField => getComputedStyle(inputField).borderColor);
const initialHeadColors = [...document.querySelectorAll('.Head')].map(head => getComputedStyle(head).color);

btn.addEventListener('click', function () {
    const currentDate = new Date();
    const date = dates.value;
    const month = months.value;
    const year = years.value;
    const errors = document.querySelectorAll('.error');
    const heads = document.querySelectorAll(".Head");

    // Add a flag to determine if there are errors
    let hasErrors = false;

    // Clear all previous error messages and reset styles
    errors.forEach(function (error, index) {
        error.textContent = "";

        // Reset the text color and border color of the input field to their initial values
        [dates, months, years][index].style.borderColor = initialInputColors[index];
        heads[index].style.color = initialHeadColors[index];
    });

    if (date === '') {
        errors[0].textContent = "This field is required";
        [dates, months, years][0].style.borderColor = 'hsl(0, 100%, 67%)';
        heads[0].style.color = 'hsl(0, 100%, 67%)';
        hasErrors = true;
    }
    if (month === '') {
        errors[1].textContent = "This field is required";
        [dates, months, years][1].style.borderColor = 'hsl(0, 100%, 67%)';
        heads[1].style.color = 'hsl(0, 100%, 67%)';
        hasErrors = true;
    }
    if (year === '') {
        errors[2].textContent = "This field is required";
        [dates, months, years][2].style.borderColor = 'hsl(0, 100%, 67%)';
        heads[2].style.color = 'hsl(0, 100%, 67%)';
        hasErrors = true;
    }
    if (date < 0 || date === 0 || date > 31) {
        errors[0].textContent = "Must be a valid day";
        [dates, months, years][0].style.borderColor = 'hsl(0, 100%, 67%)';
        heads[0].style.color = 'hsl(0, 100%, 67%)';
        hasErrors = true;
    }
    if (month < 0 || month > 12 || month === 0) {
        errors[1].textContent = "Must be a valid month";
        [dates, months, years][1].style.borderColor = 'hsl(0, 100%, 67%)';
        heads[1].style.color = 'hsl(0, 100%, 67%)';
        hasErrors = true;
    }
    if (year > currentDate.getFullYear()) {
        errors[2].textContent = "Must be in the past";
        [dates, months, years][2].style.borderColor = 'hsl(0, 100%, 67%)';
        heads[2].style.color = 'hsl(0, 100%, 67%)';
        hasErrors = true;
    }
    if (month % 2 === 0 && date > 30) {
        errors[0].textContent = "Must be a valid day";
        [dates, months, years][0].style.borderColor = 'hsl(0, 100%, 67%)';
        heads[0].style.color = 'hsl(0, 100%, 67%)';
        hasErrors = true;
    }

    // If there are errors, stop the execution
    if (hasErrors) {
        return;
    }

    // Calculate and display the result if there are no errors
    const DOBinput = year + '-' + month + '-' + date;
    const DOB = new Date(DOBinput);

    let dateDiff = currentDate - DOB;
    let getYears = dateDiff / (1000 * 60 * 60 * 24 * 365);
    let getMonths = (getYears % 1) * 12;
    let getDays = (getMonths % 1) * 24;
    let yearVal = document.getElementById("years");
    yearVal.textContent = Math.floor(getYears);
    let monthVal = document.getElementById("months");
    monthVal.textContent = Math.floor(getMonths);
    let daysVal = document.getElementById("days");
    daysVal.textContent = Math.floor(getDays);
});
