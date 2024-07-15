const zapcomWorkDetails = document.querySelector("#zapcom-details");
const knolskapeWorkDetails = document.querySelector("#knolskape-details");
const curiousJrWorkDetails = document.querySelector("#curiousJr-details");

const projectImage = document.querySelector("#project-image");
const projectName = document.querySelector("#project-name");
const projectDescription = document.querySelector("#project-description");
const githubLink = document.querySelector("#github-link");
const demoLink = document.querySelector("#demo-link");

const projectTabs = document.querySelectorAll(".project-tab");

let currentIndex = 0;

const projectDetails = [
    {
        imageLink: "images/github-profiler.png",
        projectName: "GitHub Profiler",
        description:
            "A React-based responsive GitHub profile search dashboard using Vite for development and ESlint for code quality. Implemented performance optimizations like Debouncing to reduce the number of API calls by 80%.",
        demoLink: "https://github-profile-taupe.vercel.app/",
        githubLink: "https://github.com/AYushgupta4387/githubProfile",
    },
    {
        imageLink: "images/use-popcorn.png",
        projectName: "usePopcorn",
        description:
            "Developed a responsive movie review app using React, featuring search functionality powered by the OMDB API. Implemented an interactive star rating component, allowing users to provide feedback through a customizable rating system, implemented Debouncing to reduce the number of API calls and used custom-hooks to encapsulate logic.",
        demoLink: "https://use-popcorn-blue-mu.vercel.app/",
        githubLink: "https://github.com/AYushgupta4387/usePopcorn",
    },
];

function displayProject(index) {
    currentIndex = index;

    projectTabs.forEach((tab, i) => {
        tab.classList.toggle("active-project-tab", i === index);
    });

    const project = projectDetails[index];

    if (project) {
        projectImage.src = project.imageLink;
        projectName.innerText = project.projectName;
        projectDescription.innerHTML = project.description;
    }
}

function toggleDetails(id) {
    if (id == 1) zapcomWorkDetails.classList.toggle("hidden");
    else if (id == 2) knolskapeWorkDetails.classList.toggle("hidden");
    else curiousJrWorkDetails.classList.toggle("hidden");
}

function navigateToGitHub() {
    window.open(projectDetails[currentIndex].githubLink, "_blank");
}

function navigateToDemo() {
    window.open(projectDetails[currentIndex].demoLink, "_blank");
}
