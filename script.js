document.addEventListener("DOMContentLoaded", function () {

    const steps = document.querySelectorAll("#progress-bar-container li");
    const sections = document.querySelectorAll(".section-content");
    const lineProgress = document.getElementById("line-progress");

    steps.forEach((step, index) => {
        step.addEventListener("click", () => {
            updateStepProgress(index);
            updateContent(index);
        });
    });

    function updateStepProgress(step) {
        steps.forEach((elem, i) => {
            if (i <= step) {
                elem.classList.add("active");
            } else {
                elem.classList.remove("active");
            }
        });
        const progress = 3 + step * 16.5; // Start with 3% and increment by 16.5% for each step
        lineProgress.style.width = progress + "%";
    }

    function updateContent(step) {
        sections.forEach((section, index) => {
            if (index === step) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    }
});