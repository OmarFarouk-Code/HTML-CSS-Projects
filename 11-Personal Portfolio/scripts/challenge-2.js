const skillsArray = [
  {
    name: "HTML",
    experience: "2025",
    type: "frontend",
  },
  {
    name: "CSS",
    experience: "2025",
    type: "frontend",
  },
  {
    name: "Javascript",
    experience: "2026",
    type: "frontend",
  },
  {
    name: "C++",
    experience: "2025",
    type: "backend",
  },
  {
    name: "Python",
    experience: "2025",
    type: "backend",
  },
  {
    name: "Java",
    experience: "2026",
    type: "backend",
  },
  {
    name: "Figma",
    experience: "2026",
    type: "frontend",
  },
];

// FILTER SECTION
const allButton = document.querySelector(".skills__button[data-type=all]");
const frontendButton = document.querySelector(
  ".skills__button[data-type=frontend]",
);
const backendButton = document.querySelector(
  ".skills__button[data-type=backend]",
);

const skillButtons = [allButton, frontendButton, backendButton];

function addEventListenerButtons(button) {
  button.addEventListener("click", () => {
    const prevActiveButtons = document.querySelectorAll(
      ".skills__button--active",
    );
    [...prevActiveButtons].forEach((activeButton) =>
      activeButton.classList.remove("skills__button--active"),
    );
    button.classList.add("skills__button--active");
    const category = button.dataset.type;
    filterSkills(category);
  });
}
skillButtons.forEach((button) => addEventListenerButtons(button));
// FILTER SECTION END

const skillsContainer = document.querySelector(".skills__list");

function renderSkills(skills) {
  skillsContainer.innerHTML = "";

  skills.forEach((skill) => {
    const item = document.createElement("div");
    item.classList.add("skills__item");

    const currentYear = new Date().getFullYear();
    let displayValue;
    let skillDuration = "Years";
    if (skill.experience === String(currentYear) ) {
      displayValue = 6;
      skillDuration = "Months";
    } else {
      displayValue = currentYear - skill.experience;
    }

    item.innerHTML = `<h2 class="skills__title">${skill.name}</h2>
                    <span class="skills__years">${displayValue} ${skillDuration} </span>`;

    skillsContainer.appendChild(item);
  });
}

function filterSkills(category) {
  if (category === "all") {
    renderSkills(skillsArray);
  } else {
    const filtered = skillsArray.filter((skill) => skill.type === category);
    renderSkills(filtered);
  }
}

renderSkills(skillsArray);
