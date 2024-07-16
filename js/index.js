const zapcomWorkDetails = document.querySelector("#zapcom-details");
const knolskapeWorkDetails = document.querySelector("#knolskape-details");
const curiousJrWorkDetails = document.querySelector("#curiousJr-details");

function toggleDetails(id) {
    if (id == 1) zapcomWorkDetails.classList.toggle("hidden");
    else if (id == 2) knolskapeWorkDetails.classList.toggle("hidden");
    else curiousJrWorkDetails.classList.toggle("hidden");
}
/* EXPRIENCE */

const experiencDetails = [
    {
        dateRange: "July 2023 - Present",
        details:
            "Successfully completed and deployed multitenancy loyalty-based platform for 10+ diverse international clients using Angular. <br /> <br /> Developed essential modules for loyalty programs, specializing in authentication, profile management, reward systems, scan flows, Google analytics implementation and transaction histories. <br /> <br /> Led design discussions, proof of concept, development and implementation of guided tours and traceability. <br /> <br /> Integrated Google Analytics services to track user-journey, button clicks frequency and language preferences. <br /> <br /> Leveraged Angular expertise to identify and resolve critical bugs, significantly enhancing delivery timelines. <br /> <br /> Collaborated with UX researchers to conceptualize and design company website, implemented it using React. <br /> <br /> Optimized company’s website to improve Lighthouse performance scores by 20%, enhancing user experience",
    },
    {
        dateRange: "July 2022 - Dec 2022",
        deatils:
            "Redesigned and developed a responsive user interface for generating post-course completion reports, utilizing React and SASS to enhance user experience and engagement. <br /> <br /> Integrated company’s API into the UI to enable gathering of comprehensive user data for performance evaluation.",
    },
    {
        dateRange: "Oct 2021 - Feb 2022",
        deatils:
            "Developed several small-scale projects for the company utilizing HTML, CSS, JavaScript, and jQuery, seamlessly integrating them with their framework. Notably, one of these projects garnered over 5,000 active users within their app, serving as a platform for users to enhance their JavaScript proficiency.<br /> <br /> Contributed to the adoption of agile methodologies, utilizing Jira and Confluence, improving team productivity by 15% through iterative development cycles.",
    },
];

/* PROJECTS */

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

function navigateToGitHub() {
    window.open(projectDetails[currentIndex].githubLink, "_blank");
}

function navigateToDemo() {
    window.open(projectDetails[currentIndex].demoLink, "_blank");
}
