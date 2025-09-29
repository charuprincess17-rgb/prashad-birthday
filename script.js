// Popup
function closePopup() {
    document.getElementById('popup-greet').style.display = 'none';
}

// Balloons animation
for(let i=0; i<15; i++) {
    let balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random()*90 + 'vw';
    balloon.style.background = hsl(${Math.random()*360},70%,80%);
    balloon.style.animationDelay = (Math.random()*5)+'s';
    document.getElementById('balloons').appendChild(balloon);
}
const style = document.createElement('style');
style.innerHTML = `
.balloon {
    position: absolute;
    bottom: -50px;
    width: 40px; height: 60px;
    border-radius: 20px 20px 20px 20px/30px 30px 40px 40px;
    animation: balloonmove 9s linear infinite;
}
@keyframes balloonmove {
    0%    { bottom: -50px; opacity: 0.95; }
    80%   { opacity: 1; }
    100%  { bottom: 110vh; opacity: 0; }
}
`;
document.head.appendChild(style);

// Butterflies (simple emoji animation)
for(let i=0; i<8; i++) {
    let butterfly = document.createElement('div');
    butterfly.className = 'butterfly';
    butterfly.textContent = '🦋';
    butterfly.style.left = Math.random()*90 + 'vw';
    butterfly.style.top = Math.random()*50 + 'vh';
    butterfly.style.fontSize = (1.8+Math.random())+'em';
    butterfly.style.position = 'absolute';
    butterfly.style.animation = buttermove ${5+Math.random()*6}s infinite ease-in-out;
    document.getElementById('butterflies').appendChild(butterfly);
}
style.innerHTML += `
.butterfly {
    animation-name: buttermove;
}
@keyframes buttermove {
    0% { transform: rotate(-10deg) translateY(0);}
    40% { transform: rotate(12deg) translateY(-20px);}
    85% { transform: rotate(-11deg) translateY(-55px);}
    100% { transform: rotate(9deg) translateY(0);}
}
`;

// Music compatibility
window.onload = function() {
    let music = document.getElementById('birthday-music');
    if(music) music.play();
};