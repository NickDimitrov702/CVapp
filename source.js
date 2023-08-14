let skill = document.querySelectorAll(".skill-container");
let skillDescription = document.querySelector(".description-container");
let skills = document.querySelector(".skills");
let labele = document.querySelector(".technical-skills");

skill.forEach((skillContainer) => {
  const description = skillContainer.getAttribute("data-description");

  if (skillContainer.getAttribute("class") === "skill-container") {
    skillContainer.addEventListener("mouseover", (e) => {
      skills.style.position = "relative";
      skillDescription.innerHTML = description;
      skillDescription.style.position = "absolute";
      skillDescription.style.display = "flex";
      skillDescription.style.cursor = "pointer";
      skillDescription.style.opacity = "1";
      skillDescription.style.visibility = "visible";

      if (e.target.children) {
        if (e.target.children[0] === undefined) {
          labele.style.opacity = 0;
          // labele.innerHTML = e.target.innerHTML;

          setTimeout(() => {
          labele.innerHTML = e.target.innerHTML;
          labele.style.opacity = 1;
          },300)
        }

        if (e.target.children[0]) {
          labele.style.opacity = 0;
          // labele.innerHTML = e.target.innerHTML;

          setTimeout(() => {
          labele.innerHTML = e.target.innerHTML;
          labele.style.opacity = 1;
          },300)
        }
      }

      skillDescription.addEventListener("mouseout", (e) => {
        skillDescription.style.opacity = "0";
        skillDescription.style.visibility = "hidden";
        labele.innerHTML = "TECHNICAL SKILLS";
        
      });
    });
  }
});
