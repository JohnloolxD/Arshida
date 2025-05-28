var i = 0;
function changeMessage() {
    const messages = [
        {text:"OMG"},
        {text:"Really"},
        {text:"STFU" },
        {text:"Pleasee"},
        {text:"Are u dying?"},
        {text:"(Any sentence)."},
        {text:"I'm so mad rn"},
        {text:"If you got this far...."},
        {text:"It's you loving dogs!", image: "dog1.jpg"},
        {text:"It's you loving dogs!", image: "dog2.jpg"},
        {text:"My fav pic:D", image:"sky.jpg"}
    ];
    if(i >= messages.length){
        i = 0;
        const box = document.getElementById('messageBox');
        box.textContent = "That's all I could find in terms of words you used and pics;(";
        return;
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
