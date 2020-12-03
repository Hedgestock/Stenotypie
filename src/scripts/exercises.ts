const lessons = {
  lesson1: {
    theme: ["S", "T", "A", "O", "E", "U", "-S", "-T"],
    strokes: {
      //prettier-ignore
      single: {
      "left-hand": ["S", "T", "A", "O", "T", "S", "A", "O", "T", "A", "S", "O", "A", "S", "O", "T",],
      "right-hand": [ "-T", "-S", "U", "E", "E", "U", "-T", "-S", "U", "-T", "E", "-S", "-T", "-S",],
      both: [ "S", "T", "-S", "-T", "A", "O", "E", "U", "T", "S", "-T", "-S", "A", "E", "O", "U",],
    },
      //prettier-ignore
      chord: {
      "left-hand": [ "SA", "TA", "SO", "TO", "SA", "SO", "TA", "TO", "TA", "SA", "TO", "SO",],
      "right-hand": ["US", "ET", "UT", "ES"],
      both: [
        "SA", "SG", "SE", "SU", "TA", "TG", "TE", "TU", "AT", "GT", "ET", "UT", "AS", "GS", "ES", "US",
        "SA", "SO", "SE", "su", "TA", "TO", "TE", "TU", "SE", "TE", "SO", "TO", "SA", "TA", "SU", "TU",
        "TA", "SO", "SU", "TE", "AT", "OT", "ET", "UT", "AS", "OS", "ES", "US", "SA", "TO", "TE", "TU",
        "SO", "TE", "SU", "TA", "SE", "TU", "SA", "TO", "SU", "TA", "SO", "TE",
      ],
    },
    },
  },
  lesson2: {
    theme: ["P", "-P"],
    strokes: {
      //prettier-ignore
      single: {
      "left-hand": ["P", "S", "T", "A", "O", "T", "P", "S", "A", "O", "T", "P", "A", "S", "O", "A", "S", "P", "O", "T"],
      "right-hand": [
        "-P", "-T", "-S", "U", "E", "E", "U", "E", "-T", "-S", "U", "-T", "-P", "E", "-S", "-P", "-T", "-S", "-P", "-S",
        "U", "E", "-T", "U", "-T", "-P", "E", "-S", "-P", "-T", "-P", "E", "U", "-T", "-S", "-T", "U", "-S", "E",
      ],
      both: [ "P", "-P", "S", "T", "P", "-P", "-T", "-S", "A", "O", "E", "U"],
    },
      //prettier-ignore
      chord: {
      "left-hand": [ "PA", "SA", "SO", "PA", "TA", "TO", "PA", "TA", "SA", "PO", "TO", "SO"],
      "right-hand": ["US", "ET", "UT", "ES"],
      both: [
        "PA", "PO", "PE", "PU", "TA", "TO", "TE", "TU", "SA", "SO", "SE", "SU", "PA",
        "SA", "SO", "SE", "SU", "PA", "TA", "TO", "TE", "TU", "SE", "TE", "PO", "SO", "TO",
        "SA", "PA", "PA", "TA", "PU", "SU", "TU", "PA", "TA", "SO", "PO", "SU", "TE", "AT",
        "OT", "ET", "UT", "AS", "OS", "UP", "AP", "OP", "EP", "ES", "US", "UP", "SA", "TO",
        "TE", "PE", "TU", "SO", "PU", "TE", "PE", "SU", "TA", "SE", "TU", "SA", "PA", "PO",
        "TO", "PU", "SU", "PA", "TA", "PO", "SO", "TE", "PE", "PAS", "POS", "PES", "PUS", "SAP",
        "TAP", "PAP", "PAS", "PAT", "PAP", "SOP", "TOP", "POP", "SUP", "TUP", "PUP", "STA",
        "STO", "STE", "STU", "SPA", "SPO", "SPE", "SPU", "SPAS", "SPOS", "SPES", "SPUS",
      ],
    },
    },
  },
};

const theme = document.getElementById("theme");
const output = document.getElementById("reference-stroke");
const lessonSelector = document.getElementById(
  "lesson-selector"
) as HTMLSelectElement;
const stepSelector = document.getElementById(
  "step-selector"
) as HTMLSelectElement;
let strokeNumber = 0;

function nextStroke() {
  const [stepNumber, handNumber] = stepSelector.value
    .split("/")
    .map((x) => parseInt(x));
  const steps = Object.keys(lessons[lessonSelector.value].strokes);
  const step = steps[stepNumber];
  const hands = Object.keys(lessons[lessonSelector.value].strokes[step]);
  const hand = hands[handNumber];
  const strokeList = lessons[lessonSelector.value].strokes[step][hand];

  output.innerText = strokeList[strokeNumber];
  if (strokeNumber < strokeList.length) {
    strokeNumber++;
  } else if (handNumber < hands.length) {
    setStep(stepNumber, handNumber + 1);
  } else if (stepNumber < steps.length) {
    setStep(stepNumber + 1, handNumber);
  } else {
    output.innerText = "done";
  }
}

const handleInput = (e) => {
  if (output.innerText == e.target.value.trim()) {
    nextStroke();
    e.target.value = "";
  }
};

Object.keys(lessons).forEach((lesson, i) => {
  let option = document.createElement("option");
  option.value = lesson;
  option.innerText = `Leçon ${i + 1}`;
  lessonSelector.appendChild(option);
});

["Touche seule", "Accord"].forEach((step, s) => {
  ["Main gauche", "Main droite", "Les deux"].forEach((hand, h) => {
    let option = document.createElement("option");
    option.value = `${s}/${h}`;
    option.innerText = `${step} - ${hand}`;
    stepSelector.appendChild(option);
  });
});

function setStep(stepNumber: number, handNumber: number) {
  stepSelector.value = `${stepNumber}/${handNumber}`;
  strokeNumber = 0;
}

function setTheme() {
  theme.innerText = lessons[lessonSelector.value].theme.join(" ");
}

function resetLesson() {
  strokeNumber = 0;
  nextStroke();
}
stepSelector.addEventListener("change", resetLesson);

function changeLessonHandler() {
  setTheme();
  setStep(0, 0); // setStep ne doit pas remettre le compteur à 0 pcq resetLesson fait nextStroke donc strokeNumber++
  resetLesson();
}
lessonSelector.addEventListener("change", changeLessonHandler);
