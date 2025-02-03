const currentPage = location.pathname;

if(currentPage.includes("like.html")){

const travelImg = document.querySelector(".travel-img");

travelImg.addEventListener("click", () => {
    if(travelImg.src.includes("like1.jpg")){
        travelImg.src = "images/like2.jpg";
    }
    else if(travelImg.src.includes("like2.jpg")){
        travelImg.src = "images/like3.jpg";
    }
    else{
        travelImg.src = "images/like1.jpg";
    }
});

const modal = document.getElementById("videoModal");
const closeModal = document.querySelector(".close");
const youtubeVideo = document.getElementById("youtubeVideo");

document.querySelector(".dance").addEventListener("click", function () {
    modal.style.display = "flex";
    youtubeVideo.src = "https://www.youtube.com/embed/H9XhBnkno5w"; // 유튜브 영상 URL
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    youtubeVideo.src = ""; 
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
        youtubeVideo.src = "";
    }
});

};

if(currentPage.includes("index.html")){
document.querySelector('.profile-card').addEventListener('click', function () {
    this.classList.toggle('is-flipped');
});
};