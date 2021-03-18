// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const hearts = document.getElementsByClassName("like-glyph")
const errorModal = document.querySelector("#modal")
errorModal.classList.add("hidden")

document.addEventListener("DOMContentLoaded", () => {
  for (const heart of hearts) {
    heart.addEventListener("click", (e) => {
      mimicServerCall()
      .then(() => {
        if (heart.innerHTML == EMPTY_HEART) {
          heart.innerHTML = FULL_HEART
          heart.className = "activated-heart"
        } else {
          heart.innerHTML = EMPTY_HEART
          heart.className = "like-glyph"
        }
      })

      .catch(error => {
        errorModal.classList.remove("hidden");
        const modalMessage = document.querySelector("#modal-message")
        modalMessage.innerText = error
        setTimeout(() => {
          errorModal.classList.add("hidden")
        }, 5000)
      })
    })
  }
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
