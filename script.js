function calculateAge() {

    const input = document.getElementById("birthDate").value;
    const result = document.getElementById("result");

    // If date is empty
    if (input === "") {
        result.innerHTML = "⚠️ Please enter your date of birth.";
        return;
    }

    const birthDate = new Date(input);
    const today = new Date();

    // If birth date is in the future
    if (birthDate > today) {
        result.innerHTML = "⚠️ Birth date cannot be in the future.";
        return;
    }

    // Calculate exact age
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Fix negative days
    if (days < 0) {
        months--;

        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    // Fix negative months
    if (months < 0) {
        years--;
        months += 12;
    }

    // Show exact age
    document.getElementById("years").innerHTML = years;
    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;


    // =========================
    // NEXT BIRTHDAY
    // =========================

    const nextBirthday = new Date(
        today.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
    );

    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const difference = nextBirthday - today;

    const daysLeft = Math.ceil(
        difference / (1000 * 60 * 60 * 24)
    );

    document.getElementById("birthday").innerHTML =
        `🎂 Your next birthday is in ${daysLeft} days.`;


    // =========================
    // TOTAL DAYS
    // =========================

    const totalDifference = today.getTime() - birthDate.getTime();

    const totalDays = Math.floor(
        totalDifference / (1000 * 60 * 60 * 24)
    );

    document.getElementById("total").innerHTML =
        `📅 You have lived approximately ${totalDays.toLocaleString()} days.`;


    // =========================
    // TOTAL MONTHS & WEEKS
    // =========================

    const totalMonths = Math.floor(totalDays / 30.436875);

    const totalWeeks = Math.floor(totalDays / 7);

    document.getElementById("totalMonths").innerHTML =
        `📆 You have lived approximately ${totalMonths.toLocaleString()} months.`;

    document.getElementById("totalWeeks").innerHTML =
        `📅 You have lived approximately ${totalWeeks.toLocaleString()} weeks.`;
}


// =========================
// RESET CALCULATOR
// =========================

function resetCalculator() {

    document.getElementById("birthDate").value = "";

    document.getElementById("years").innerHTML = "0";
    document.getElementById("months").innerHTML = "0";
    document.getElementById("days").innerHTML = "0";

    document.getElementById("birthday").innerHTML =
        "🎂 Your next birthday will appear here.";

    document.getElementById("total").innerHTML =
        "Total days: 0";

    document.getElementById("totalMonths").innerHTML =
        "Total months: 0";

    document.getElementById("totalWeeks").innerHTML =
        "Total weeks: 0";
}


// =========================
// DARK MODE
// =========================

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("darkModeBtn");

    if (document.body.classList.contains("dark-mode")) {

        button.innerHTML = "☀️";

        localStorage.setItem("darkMode", "enabled");

    } else {

        button.innerHTML = "🌙";

        localStorage.setItem("darkMode", "disabled");
    }
}


// =========================
// REMEMBER DARK MODE
// =========================

if (localStorage.getItem("darkMode") === "enabled") {

    document.body.classList.add("dark-mode");

    document.getElementById("darkModeBtn").innerHTML = "☀️";
}

