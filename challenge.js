// Good Luck! You got this 💪🏾
// Write your code here.
function calculateBMI(weight, height) {
    return weight / (height * height);
}

const aliBMI = calculateBMI(70, 1.75);
const mohamedBMI = calculateBMI(85, 1.80);

console.log(`Ali's BMI: ${aliBMI}`);
console.log(`Mohamed's BMI: ${mohamedBMI}`);

if (aliBMI > mohamedBMI) {
    console.log("Ali has a higher BMI");
} else if (aliBMI < mohamedBMI) {
    console.log("Mohamed has a higher BMI");
} else {
    console.log("Ali and Mohamed have the same BMI");
}
