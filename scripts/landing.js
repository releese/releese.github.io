function sendWish() {
    if (document.getElementById('wish_box').value === "") {
        document.getElementById('thank_you_message').innerText = "Please insert a message first!"
    } else {
        document.getElementById('thank_you_message').innerText = "Thank you for your wish! You made someone happy! :)";
    }
    document.getElementById('wish_box').value = "";
    document.getElementById('thank_you_message').classList.add('visible');
    setTimeout(function () {
        document.getElementById('thank_you_message').classList.remove('visible');
    }, 2500);
    setTimeout(function () {
        document.getElementById("new_messages").style.visibility = 'visible';
        document.getElementById("new_messages").innerText = "2";

    }, 6500);
}