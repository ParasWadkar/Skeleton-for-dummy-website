function sayHello() {
    alert("Hello! Your upgraded website is looking great.");
}

function revealPage() {
    document.body.classList.add("ready");
    document.body.classList.remove("is-loading");
}

window.addEventListener("load", () => {
    // Keep the skeleton visible briefly so users notice a smooth transition.
    window.setTimeout(revealPage, 500);
});

window.setTimeout(revealPage, 2200);

function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => observer.observe(element));