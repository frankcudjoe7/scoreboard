homeScoreEl = document.getElementById("home-score");
guestScoreEl = document.getElementById("guest-score");



homeScore = 0
guestScore = 0

function addHome(n) {
    homeScore += n
    homeScoreEl.textContent = homeScore
}


function addGuest(n) {
    guestScore += n
    guestScoreEl.textContent = guestScore
}