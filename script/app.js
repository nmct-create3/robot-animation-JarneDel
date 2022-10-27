let paused = false;
let htmlElements = {};

function init() {
    let tl = gsap.timeline({
        defaults: {
            duration: 1, ease: 'power1.inOut',
        }, repeat: -1, yoyo: true,
    });

    tl.set('#Shadow', {
        transformOrigin: '50% 100%',
    })
        .fromTo('#Robot', {
            y: 2.5,
        }, {
            y: -2.5,
        })
        .to('#Shadow', {
            scale: 0.75,
        }, '<');
    document.querySelector(".js-fast").onclick = () => tl.timeScale(2);
    document.querySelector(".js-normal").onclick = () => tl.timeScale(1);
    document.querySelector(".js-slow").onclick = () => tl.timeScale(.5);
    document.querySelector('.js-pause').onclick = () => {
        if (paused){
            tl.pause();
            htmlElements.playBtn.style.display = 'block';
            htmlElements.pauseBtn.style.display = 'none';
        }else{
            tl.play();
            htmlElements.playBtn.style.display = 'none';
            htmlElements.pauseBtn.style.display = 'block';
        }

        paused = !paused;
    };


    // gsap.set('#Robot', { duration: 1, x: 50 });
    // gsap.fromTo('#Robot', { x: -50 }, { duration: 1, x: 50 })
}

window.addEventListener("DOMContentLoaded", () => {
    htmlElements.pauseBtn = document.querySelector('.c-play-icon--pause');
    htmlElements.playBtn = document.querySelector('.c-play-icon--play');
    init()
});