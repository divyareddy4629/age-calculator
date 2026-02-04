const dobInput = document.getElementById("dob");
const result = document.getElementById("result");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (!dobInput.value) {
    result.textContent = "⚠ Please select your birth date.";
    return;
  }

  const birthDate = new Date(dobInput.value);
  const today = new Date();

  if (birthDate > today) {
    result.textContent = "❌ Birth date cannot be in the future.";
    return;
  }

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  result.textContent = `✅ Your age is ${age} years old.`;
});


