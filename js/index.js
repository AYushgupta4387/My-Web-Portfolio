const zapcomWorkDetails = document.querySelector("#zapcom-details");
const knolskapeWorkDetails = document.querySelector("#knolskape-details");
const curiousJrWorkDetails = document.querySelector("#curiousJr-details");

function toggleDetails(id) {
    if (id == 1) zapcomWorkDetails.classList.toggle("hidden");
    else if (id == 2) knolskapeWorkDetails.classList.toggle("hidden");
    else curiousJrWorkDetails.classList.toggle("hidden");
}
