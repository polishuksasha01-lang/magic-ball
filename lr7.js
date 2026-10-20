
document.body.style.margin = "0";
document.body.style.minHeight = "100vh";
document.body.style.fontFamily = "Verdana, Arial, sans-serif";
document.body.style.background = "#000";
document.body.style.color = "white";

const predictions = [
    "Так, безперечно!",
    "Звичайно!",
    "Можеш бути впевненим.",
    "Зірки кажуть — так.",
    "Ймовірно, так.",
    "Поки що невідомо.",
    "Спробуй запитати пізніше.",
    "Краще не розраховувати на це.",
    "Моя відповідь — ні.",
    "Навряд чи."
];

const GOLD = "#fbbf24";
const THINK_TIME = 700;
const MIN_LENGTH = 3;


const container = document.createElement("div");
container.style.maxWidth = "480px";
container.style.margin = "0 auto";
container.style.padding = "30px 20px";
container.style.textAlign = "center";
container.style.boxSizing = "border-box";

const title = document.createElement("h1");
title.textContent = "Куля передбачень";
title.style.color = GOLD;
title.style.fontSize = "34px";
title.style.letterSpacing = "1px";
title.style.margin = "0 0 18px";

const description = document.createElement("p");
description.textContent = "Сформулюй питання, і куля розкаже, що на тебе чекає.";
description.style.color = "#d4d4d4";
description.style.fontSize = "16px";
description.style.lineHeight = "1.5";
description.style.margin = "0";

const ball = document.createElement("div");
ball.textContent = "8";
ball.style.width = "240px";
ball.style.height = "240px";
ball.style.maxWidth = "60vw";
ball.style.maxHeight = "60vw";
ball.style.margin = "25px auto 40px";
ball.style.borderRadius = "50%";
ball.style.background = "radial-gradient(circle at 50% 40%, #0a1414, #020807 80%)";
ball.style.border = "4px solid " + GOLD;
ball.style.boxShadow = "0 0 30px rgba(251, 191, 36, 0.6)";
ball.style.display = "flex";
ball.style.alignItems = "center";
ball.style.justifyContent = "center";
ball.style.fontSize = "80px";
ball.style.fontWeight = "bold";
ball.style.color = "#fde68a";
ball.style.transition = "transform 0.3s";

const result = document.createElement("p");
result.textContent = "Тут з'явиться передбачення.";
result.style.fontSize = "19px";
result.style.lineHeight = "1.5";
result.style.minHeight = "60px";
result.style.margin = "0 0 40px";

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Напиши своє питання тут...";
input.maxLength = 200;
input.setAttribute("aria-label", "Твоє питання");
input.style.width = "100%";
input.style.padding = "14px";
input.style.border = "2px solid " + GOLD;
input.style.borderRadius = "8px";
input.style.boxSizing = "border-box";
input.style.fontSize = "16px";
input.style.fontFamily = "Arial, sans-serif";
input.style.outline = "none";

const button = document.createElement("button");
button.textContent = "Дізнатися";
button.style.margin = "15px 0 0";
button.style.padding = "13px 30px";
button.style.border = "none";
button.style.borderRadius = "10px";
button.style.background = GOLD;
button.style.color = "#1c1400";
button.style.fontSize = "16px";
button.style.fontWeight = "bold";
button.style.fontFamily = "Arial, sans-serif";
button.style.cursor = "pointer";

function getRandomPrediction() {
    return predictions[Math.floor(Math.random() * predictions.length)];
}
function startThinking() {
    button.disabled = true;
    button.style.opacity = "0.6";
    button.style.cursor = "default";
    ball.textContent = "?";
    ball.style.transform = "scale(1.08) rotate(8deg)";
    result.textContent = "Куля думає...";
}
function showPrediction(text) {
    ball.textContent = "8";
    ball.style.transform = "scale(1) rotate(0deg)";
    result.textContent = text;
    button.disabled = false;
    button.style.opacity = "1";
    button.style.cursor = "pointer";
}
function askQuestion() {
    const question = input.value.trim();

    if (question.length < MIN_LENGTH) {
        result.textContent = "Введи питання довжиною не менше " + MIN_LENGTH + " символів.";
        input.focus();
        return;
    }

    const prediction = getRandomPrediction();
    startThinking();

    setTimeout(function() {
        showPrediction(prediction);
    }, THINK_TIME);
}
button.addEventListener("click", askQuestion);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !button.disabled) {
        askQuestion();
    }
});
container.appendChild(title);
container.appendChild(description);
container.appendChild(ball);
container.appendChild(result);
container.appendChild(input);
container.appendChild(button);

document.body.appendChild(container);