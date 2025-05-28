var i = 0;
function changeMessage() {
    const messages = [
        {text:"OMG"},
        {text:"Really"},
        {text:"STFU" },
        {text:"Pleasee"},
        {text:"Are u dying?"},
        {text:"(Any sentence)."},
        {text:"I'm so mad rn"}
    ];
    if(i >= messages.length){
        i = 0;
    }
    const message = messages[i++];
    const box = document.getElementById('messageBox');
    const picture = document.getElementById('pictureBox');
    box.textContent = message.text;
    if (message.image) {
        picture.src = message.image;
    }else{
        picture.src = "Aemoji.gif";
    }
}
