document.addEventListener('DOMContentLoaded', function () {

    // ---------------- ------------ Player ------------------ --------------------------

    const spanPlay = document.querySelector('.main__span-Play');
    const spanPause = document.querySelector('.main__span-Pause')
    const btnPlay = document.querySelector('.header__player-play');
    const btnPause = document.querySelector('.header__player-pause');
    const audioSong = document.querySelector('.header__song');

    const runPlayer = () => {
        btnPlay.style.display = 'none';
        btnPause.style.display = 'block';
        audioSong.play();
        spanPlay.style.display = 'none';
        spanPause.style.display = 'inline-block';

    }
    spanPlay.addEventListener('click', runPlayer);

    const pausePlayer = () => {
        btnPause.style.display = 'none';
        btnPlay.style.display = 'block';
        audioSong.pause();
        audioSong.currentTime = 0;
        spanPause.style.display = 'none';
        spanPlay.style.display = 'inline-block';
    }
    spanPause.addEventListener('click', pausePlayer);

    const playerPlay = () => {
        btnPlay.style.display = 'none';
        btnPause.style.display = 'block';
        audioSong.play();
        spanPlay.style.display = 'none';
        spanPause.style.display = 'inline-block';
    }
    btnPlay.addEventListener('click', playerPlay);

    const playerPause = () => {
        btnPause.style.display = 'none';
        btnPlay.style.display = 'block';
        audioSong.pause();
        audioSong.currentTime = 0;
        spanPause.style.display = 'none';
        spanPlay.style.display = 'inline-block';
    }
    btnPause.addEventListener('click', playerPause);
    // --------------- ----------------- Btn <button__header> --------------------- ---------------

    const btnHeader = document.querySelector('.header__btn');
    const mainArrow = document.querySelector('#mainArrow');

    const headerDown = () => {
        mainArrow.scrollIntoView();
    }
    btnHeader.addEventListener('click', headerDown);

    // --------------- ----------------- ArrowUp --------------------- ------------------------

    const arrowUp = document.querySelector('.section__contact-arrowUp');

    const mainUp = () => {
        window.scrollTo(0, 0);
    }
    arrowUp.addEventListener('click', mainUp);

    // -------------- ------------------ Galery --------------------- ------------------------------- 

    const galery = ['/Img/foto1.jpg', '/Img/foto2.jpg', "/Img/foto3.jpg", '/Img/foto4.jpg', "/Img/foto5.jpg", '/Img/foto6.jpg', "/Img/foto7.jpg", '/Img/foto8.jpg', '/Img/foto9.jpg', '/Img/foto10.jpg', "/Img/foto11.jpg", '/Img/foto12.jpg', "/Img/foto13.jpg", '/Img/foto14.jpg', "/Img/foto15.jpg"];
    const galerySlide = document.querySelector('.main__img');
    let activeElement = 0;
    const timeChange = 15000;

    function changeImage() {

        activeElement++;

        if (activeElement == galery.length) {
            activeElement = 0;
        };
        galerySlide.src = galery[activeElement];
    };
    setInterval(changeImage, timeChange);

    // ---------------- -------------------- Spinner Loader --------------------- ------------------------------

    const loading = document.querySelector('.spinnerBox');

    const offLoad = () => {
        loading.style.display = 'none';
    }
    setTimeout(offLoad, 1500);
});