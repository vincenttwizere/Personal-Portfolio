// JavaScript code for the typing animation


var i = 0;
var j = 0;
var texts = ['I\'m Vincent Twizere.', 'Web and Mobile Developer,', 'and UX/UI Designer.'];
var speed = 50;

function typeWriter() {
    if (i < texts[j].length) {
        document.getElementById("demo").innerHTML += texts[j].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // Move to the next text after a delay
        setTimeout(() => {
            i = 0;
            document.getElementById("demo").innerHTML = '';
            j = (j + 1) % texts.length;
            typeWriter();
        }, 1000); 
    }
}

// Start the typing animation when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    typeWriter();
});

// function for count
