var count = 0;
//This function will determine whether or not to mute the background audio by using a counter
function muteButtonClick() { 
    count += 1;
    const audio = document.getElementById('rain-audio');
    if(count % 2 == 1){
        audio.muted = false;   // Unmute on odd clicks
    } else{
        audio.muted = true;    // Mute on even clicks
    }
}

//This function will start the story and change the background of the webpage to the
function startStory(){
    const body = document.body;
    body.style.backgroundImage = url("CoffeeShop.jpg");
}

//This line of code will run the muteButtonClick function everytime the mute button is clicked
const muteButton = document.getElementById("muteButton");
muteButton.addEventListener("click", muteButtonClick);