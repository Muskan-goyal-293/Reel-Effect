let data = [
  {
    video: "./video/1.mp4",
    logoimage: "https://images.unsplash.com/photo-1764276266750-4d6316e972e0?w=600&auto=format&fit=crop&q=60",
    username: "Aarav-Sharma",
    description: "Winter morning walk ❄️",
    likecount: 120,
    commentcount: 35,
    sharecount: 10,
    islike: false,
    isfollow: false
  },

  {
    video: "./video/3.mp4",
    logoimage: "https://plus.unsplash.com/premium_photo-1760509344623-71e2ccf9ff80?w=600&auto=format&fit=crop&q=60",
    username: "Rehan-Malik",
    description: "City life vibes ✨",
    likecount: 210,
    commentcount: 77,
    sharecount: 20,
    islike: false,
    isfollow: false
  },

  {
    video: "./video/4.mp4",
    logoimage: "https://plus.unsplash.com/premium_photo-1701085339113-d2a831aea1ee?w=600&auto=format&fit=crop&q=60",
    username: "Myra-Singh",
    description: "Rainy day coffee ☕🌧️",
    likecount: 175,
    commentcount: 55,
    sharecount: 12,
    islike: false,
    isfollow: false
  },

  {
    video: "./video/5.mp4",
    logoimage: "https://plus.unsplash.com/premium_photo-1760509344623-71e2ccf9ff80?w=600&auto=format&fit=crop&q=60",
    username: "Kabir-Gupta",
    description: "Travel mode on ✈️",
    likecount: 240,
    commentcount: 80,
    sharecount: 30,
    islike: false,
    isfollow: false
  },

  {
    video: "./video/6.mp4",
    logoimage: "https://images.unsplash.com/photo-1764014588206-3c2647a34911?w=600&auto=format&fit=crop&q=60",
    username: "Isha-Jain",
    description: "Beach waves 🌊",
    likecount: 300,
    commentcount: 90,
    sharecount: 35,
    islike: false,
    isfollow: false
  },

  {
    video: "./video/8.mp4",
    logoimage: "https://images.unsplash.com/photo-1763990840358-a54e99a19b5d?w=600&auto=format&fit=crop&q=60",
    username: "Arjun-Mehra",
    description: "Gym grind 💪🔥",
    likecount: 180,
    commentcount: 40,
    sharecount: 15,
    islike: false,
    isfollow: false
  },

  {
    video: "./video/8.mp4",
    logoimage: "https://plus.unsplash.com/premium_photo-1760509344623-71e2ccf9ff80?w=600&auto=format&fit=crop&q=60",
    username: "Sana-Verma",
    description: "Nature calmness 🍃",
    likecount: 220,
    commentcount: 70,
    sharecount: 25,
    islike: false,
    isfollow: false
  }
];


// ----------------------- RENDER UI ----------------------------

let section = document.querySelector("section");

function allData() {
  let html = "";

  data.forEach((val, id) => {
    html += `
      <div class="reals">

        <video class="vdo" autoplay loop muted src="${val.video}"></video>

        <div class="bottom">
          <div class="info">
            <img class="logo" src="${val.logoimage}" alt="">
            <h5 class="name">${val.username}</h5>
            <button class="btn" data-id="${id}">
              ${val.isfollow ? "Unfollow" : "Follow"}
            </button>
          </div>
          <h5 class="description">${val.description}</h5>
        </div>

        <div class="right">

          <div class="like" data-id="${id}">
            ${val.islike ? 
              `<i class="ri-heart-fill" id="full"></i>` 
              :`<i class="ri-heart-line" id="love"></i>`}
            <h5>${val.likecount}</h5>
          </div>

          <div class="comment icon">
            <i class="ri-chat-1-line"></i>
            <h5>${val.commentcount}</h5>
          </div>

          <div class="share icon">
            <i class="ri-share-forward-line"></i>
            <h5>${val.sharecount}</h5>
          </div>

          <div class="save icon">
            <i class="ri-bookmark-line"></i>
          </div>

          <div class="more icon">
            <i class="ri-more-2-fill"></i>
          </div>

        </div>
      </div>
    `;
  });

  section.innerHTML = html;
}

allData();


// ----------------------- EVENT HANDLING ----------------------------

section.addEventListener("click", (e) => {

  // FOLLOW BUTTON
  if (e.target.classList.contains("btn")) {
    let idx = e.target.dataset.id;
    data[idx].isfollow = !data[idx].isfollow; // toggle
    allData();
  }

  // LIKE BUTTON
  if (e.target.closest(".like")) {
    let idx = e.target.closest(".like").dataset.id;

    data[idx].islike = !data[idx].islike; // toggle like

    data[idx].likecount += data[idx].islike ? 1 : -1; // +1 or -1

    allData();
  }
});
