var count = 0
//This function will determine whether or not to mute the background audio by using a counter
function muteButtonClick() { 
    count += 1;
    const audio = document.getElementById('rain-audio');
    if(count % 2 == 1){
        audio.muted = false;
    } else{
        audio.muted = true;
    }
}


//This line of code will run the muteButtonClick function everytime the mute button is clicked
muteButton.addEventListener("click", muteButtonClick);