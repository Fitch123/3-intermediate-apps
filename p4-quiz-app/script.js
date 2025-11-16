const nextBtn = document.getElementById("nextBtn");
const questionText = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const scoreText = document.getElementById("score");

const questions = [
    {
        question: "What does console.log() do in JavaScript?",
        options: ["Displays a message", "Creates a popup", "Changes HTML", "Stops code"],
        answer: 0
    },
    {
        question: "Which tag makes a hyperlink?",
        options: ["<link>", "<href>", "<a>", "<p>"],
        answer: 2
    },
    {
        question: "Which CSS property changes text color?",
        options: ["background-color", "color", "font-style", "text-color"],
        answer: 1
    }
];

let current = 0;
let score = 0;

function display() {
    optionsDiv.innerHTML = "";
    let currentOpt = 0;

    // Set the question text
    questionText.innerText = questions[current].question;

    // Get options and answer
    const newOptions = questions[current].options;
    const answer = questions[current].answer;

    // Update score text
    scoreText.textContent = `Score: ${score} / ${questions.length}`;

    // Create buttons for each option
    newOptions.forEach(opt => {
        const newBtn = document.createElement("button");
        optionsDiv.appendChild(newBtn);
        newBtn.textContent = opt;
        newBtn.classList.add(currentOpt); // give it a class with its index

        newBtn.addEventListener("click", () => {
            const optionBtn = optionsDiv.querySelectorAll("button");

            if (newBtn.classList.contains(answer)) {
                // Correct choice
                score++;
                newBtn.classList.add("correct");
            } else {
                // Wrong choice
                newBtn.classList.add("wrong");
            }

             // Disable all options
            optionBtn.forEach(opt => (opt.disabled = true));

            // Update score
            scoreText.textContent = `Score: ${score} / ${questions.length}`;

        });

        currentOpt++;
    });
}

nextBtn.addEventListener("click", () => {
    if (current < questions.length) {
        display();
        current++;
    }
    //current = (current + 1) % questions.length;
});
