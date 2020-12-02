const lessons = {
  lesson1: {
    theme: ["S", "T", "A", "O", "E", "U", "-S", "-T"],
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
  lesson2: {
    theme: ["P", "-P"],
    //prettier-ignore
    single: {
      "left-hand": ["P", "S", "T", "A", "O", "T", "P", "S", "A", "O", "T", "p", "A", "S", "O", "A", "S", "P", "O", "T"],
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
};

const output = document.getElementById("reference-stroke");

output.innerText = lessons.lesson1.single["left-hand"][0];

const onChangeHandler = (e) => {
  console.log(e);
  if (output.innerText == e.target.value) console.log("match");
};
