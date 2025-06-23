// const menuButtons = document.querySelectorAll(".menu-button");
// const screenOverlay = document.querySelector(".main-layout .screen-overlay");
// const themeButton = document.querySelector(".navbar .theme-button i");
// const searchButton = document.querySelector("#search-button");
// const searchBackButton = document.querySelector("#search-back-button");

// // Toggle sidebar visibility when menu buttons are clicked
// menuButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     document.body.classList.toggle("sidebar-hidden");
//   });
// });

// // Toggle sidebar visibility when screen overlay is clicked
// screenOverlay.addEventListener("click", () => {
//   document.body.classList.toggle("sidebar-hidden");
// });

// // Initialize dark mode based on localStorage
// if (localStorage.getItem("darkMode") === "enabled") {
//   document.body.classList.add("dark-mode");
//   themeButton.classList.replace("uil-moon", "uil-sun");
// } else {
//   themeButton.classList.replace("uil-sun", "uil-moon");
// }

// // Toggle dark mode when theme button is clicked
// themeButton.addEventListener("click", () => {
//   const isDarkMode = document.body.classList.toggle("dark-mode");
//   localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
//   themeButton.classList.toggle("uil-sun", isDarkMode);
//   themeButton.classList.toggle("uil-moon", !isDarkMode);
// });

// // Show sidebar on large screens by default
// if (window.innerWidth >= 768) {
//   document.body.classList.remove("sidebar-hidden");
// }

// // Toggle search bar on click on mobile
// const toggleSearchBar = () => {
//   document.body.classList.toggle("show-mobile-search");
// };

// searchButton.addEventListener("click", toggleSearchBar);
// searchBackButton.addEventListener("click", () => searchButton.click());


// const API_KEY = "AIzaSyDjBrcxgM1xVDutG2NNLcQ4xx0q8vKGCyQ";  // Yahan apni API key daalo
// const BASE_URL = "https://www.googleapis.com/youtube/v3";

// async function fetchVideos(query = "trending") {
//     try {
//         const response = await fetch(`${BASE_URL}/search?part=snippet&q=${query}&type=video&maxResults=10&key=${API_KEY}`);
//         const data = await response.json();
//         displayVideos(data.items);
//     } catch (error) {
//         console.error("Error fetching videos:", error);
//     }
// }

// function displayVideos(videos) {
//     const container = document.getElementById("video-container");
//     container.innerHTML = "";

//     videos.forEach(video => {
//         const videoElement = document.createElement("div");
//         videoElement.classList.add("video");

//         videoElement.innerHTML = `
//             <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
//             <h3>${video.snippet.title}</h3>
//             <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">Watch Video</a>
//         `;

//         container.appendChild(videoElement);
//     });
// }

// function searchVideos() {
//     const query = document.getElementById("search").value;
//     fetchVideos(query);
// }

// // Load trending videos initially
// fetchVideos();


document.addEventListener("DOMContentLoaded", () => {
  const menuButtons = document.querySelectorAll(".menu-button");
  const screenOverlay = document.querySelector(".main-layout .screen-overlay");
  const themeButton = document.querySelector(".navbar .theme-button i");
  const searchButton = document.getElementById("search-button");
  const searchBackButton = document.getElementById("search-back-button");

  // Ensure elements exist before adding event listeners
  if (screenOverlay) {
      screenOverlay.addEventListener("click", () => {
          document.body.classList.toggle("sidebar-hidden");
      });
  }

  if (themeButton) {
      themeButton.addEventListener("click", () => {
          const isDarkMode = document.body.classList.toggle("dark-mode");
          localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
          themeButton.classList.toggle("uil-sun", isDarkMode);
          themeButton.classList.toggle("uil-moon", !isDarkMode);
      });
  }

  if (searchButton && searchBackButton) {
      searchButton.addEventListener("click", () => {
          document.body.classList.toggle("show-mobile-search");
      });

      searchBackButton.addEventListener("click", () => searchButton.click());
  }

  // Define API variables before calling functions
  const API_KEY = "AIzaSyAKMRD9dGSkFN1Vby55CSXbupnEmCo10b0";  
  const BASE_URL = "https://www.googleapis.com/youtube/v3";

  async function fetchVideos(query = "video") {
      try {
          const response = await fetch(`${BASE_URL}/search?part=snippet&q=${query}&type=video&maxResults=10&key=${API_KEY}`);
          const data = await response.json();
          displayVideos(data.items);
      } catch (error) {
          console.error("Error fetching videos:", error);
      }
  }

  function displayVideos(videos) {
      const container = document.getElementById("video-container");
      if (!container) {
          console.error("video-container not found!");
          return;
      }
      container.innerHTML = "";

      videos.forEach(video => {
          const videoElement = document.createElement("div");
          videoElement.classList.add("video");

          videoElement.innerHTML = `
              <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
              <h3>${video.snippet.title}</h3>
              <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">Watch Video</a>
          `;

          container.appendChild(videoElement);
      });
  }

  fetchVideos(); // Fetch videos only after variables are initialized
});
