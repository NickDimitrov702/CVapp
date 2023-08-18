let skill = document.querySelectorAll(".skill-container");
let skillDescription = document.querySelector(".description-container");
let skills = document.querySelector(".skills");
let labele = document.querySelector(".technical-skills");
let contacts = document.querySelectorAll(".contacts");
const mediaQuery = window.matchMedia("(max-width:769px)");
let clickListener = null;
let hoverListener = null;

function closeDescription() {
  skill.forEach((skillContainer) => {
    if (skillDescription) {
      console.log("HEY");
      skillDescription.addEventListener("click", (e) => {
        skillDescription.style.visibility = "hidden";
        labele.innerHTML = "TECHNICAL SKILLS";
      });
    }
  });
}

// function removeListeners() {
//   skill.forEach((skillContainer) => {
//     skillContainer.removeEventListener("mouseover", hoverListener);
//     skillContainer.removeEventListener("click", clickListener);
//   });
// }

function handleMediaQueryChange(event) {
  if (event.matches) {
    skill.forEach((skillContainer) => {
      skillContainer.removeEventListener("mouseover", hoverListener);
    });
    skill.forEach((skillContainer) => {
      closeDescription();
      const description = skillContainer.getAttribute("data-description");
      if (skillContainer.getAttribute("class") === "skill-container") {
        skillContainer.addEventListener("click", (clickListener) => {
          skills.style.position = "relative";
          skillDescription.innerHTML = description;
          skillDescription.style.position = "absolute";
          skillDescription.style.display = "flex";
          skillDescription.style.cursor = "pointer";
          skillDescription.style.opacity = "1";
          skillDescription.style.visibility = "visible";

          if (clickListener.target.children) {
            if (clickListener.target.children[0] === undefined) {
              labele.style.opacity = 0;
              // labele.innerHTML = e.target.innerHTML;

              setTimeout(() => {
                labele.innerHTML = clickListener.target.innerHTML;
                labele.style.opacity = 1;
              }, 190);
            }

            if (clickListener.target.children[0]) {
              labele.style.opacity = 0;
              // labele.innerHTML = e.target.innerHTML;

              setTimeout(() => {
                labele.innerHTML = clickListener.target.innerHTML;
                labele.style.opacity = 1;
              }, 190);
            }
          }
        });
      }
    });
  } else  {
    skill.forEach((skillContainer) => {
      const description = skillContainer.getAttribute("data-description");

      if (skillContainer.getAttribute("class") === "skill-container") {
        skillContainer.addEventListener("mouseover", (hoverListener) => {
          skills.style.position = "relative";
          skillDescription.innerHTML = description;
          skillDescription.style.position = "absolute";
          skillDescription.style.display = "flex";
          skillDescription.style.cursor = "pointer";
          skillDescription.style.opacity = "1";
          skillDescription.style.visibility = "visible";

          if (hoverListener.target.children) {
            if (hoverListener.target.children[0] === undefined) {
              labele.style.opacity = 0;
              // labele.innerHTML = e.target.innerHTML;

              setTimeout(() => {
                labele.innerHTML = hoverListener.target.innerHTML;
                labele.style.opacity = 1;
              }, 190);
            }

            if (hoverListener.target.children[0]) {
              labele.style.opacity = 0;
              // labele.innerHTML = e.target.innerHTML;

              setTimeout(() => {
                labele.innerHTML = hoverListener.target.innerHTML;
                labele.style.opacity = 1;
              }, 190);
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
  }
}
mediaQuery.addEventListener("change", handleMediaQueryChange);

handleMediaQueryChange(mediaQuery);
