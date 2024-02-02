import './style.css';

const nextBtn = document.querySelector('.next-button');
const backBtn = document.querySelector('.back-button');
const container = document.querySelector('.container');

const imageSetter = (function setImage() {
    let currentIndex = 0;
    const photosUrls = [
        'https://fastly.picsum.photos/id/623/400/400.jpg?hmac=cWA8OevZRMt2Z__hKLPY6UMyf_YJfmXYsxwBZ6bf7wA',
        'https://fastly.picsum.photos/id/5/400/400.jpg?hmac=P8V7mQXwAUnx9rTeHzGEWnux2lS4iDnXuZQMmPdp6a8',
        'https://fastly.picsum.photos/id/356/400/400.jpg?hmac=-7ZW1ndMzmzhJ84o_KMR8Q4NyJ5SKaoxQ44-7ZRtcRg',
        'https://fastly.picsum.photos/id/662/400/400.jpg?hmac=mfWH0p1QiQv8DMMEntSVNHv-wKlBGjJ87ZiwDO8ELjw',
    ];
    const getImage = () => {
        return photosUrls[currentIndex];
    };
    const nextImage = () => {
        currentIndex = (currentIndex + 1) % photosUrls.length; // 0 1 2 3 0 1 2 3...
    };
    const prevImage = () => {
        currentIndex = (currentIndex - 1 + photosUrls.length) % photosUrls.length;
    };
    const setIndex = (index) => {
        currentIndex = index;
    };
    const getIndex = () => {
        return currentIndex;
    };
    return { getImage, nextImage, prevImage, setIndex, getIndex };
})();
function circleColoring() {
    const circles = document.querySelectorAll('.slide-circle');
    circles.forEach((circle, index) => {
        if (index === imageSetter.getIndex()) {
            circle.classList.add('active');
            console.log(index, imageSetter.getIndex());
        } else {
            circle.classList.remove('active');
            console.log(index, imageSetter.getIndex());
        }
    });
}
function nextPhoto() {
    container.classList.add('fade-out');
    container.addEventListener('animationend', () => {
        container.classList.remove('fade-out');
    });
    setTimeout(() => {
        imageSetter.nextImage();

        circleColoring();

        container.style.backgroundImage = `url(${imageSetter.getImage()})`;
        container.classList.add('fade-in');
        setTimeout(() => {
            container.classList.remove('fade-in');
        }, 500);
    }, 500);
}
let autoInterval = setInterval(() => {
    nextPhoto();
}, 3000);

function start() {
    circleColoring();
    container.style.backgroundImage = `url(${imageSetter.getImage()})`;
}
start();
const circleController = (function b() {
    const circles = document.querySelectorAll('.slide-circle');
    circles.forEach((circle, index) => {
        circle.addEventListener('click', () => {
            imageSetter.setIndex(index);
            circleColoring();

            container.style.backgroundImage = `url(${imageSetter.getImage()})`;
            clearInterval(autoInterval);
            autoInterval = setInterval(() => {
                nextPhoto();
            }, 3000);
        });
    });
})();

nextBtn.addEventListener('click', () => {
    nextPhoto();
    clearInterval(autoInterval);
    autoInterval = setInterval(() => {
        nextPhoto();
    }, 3000);
});

backBtn.addEventListener('click', () => {
    container.classList.add('fade-out');
    container.addEventListener('animationend', () => {
        container.classList.remove('fade-out');
    });
    setTimeout(() => {
        imageSetter.prevImage();

        circleColoring();

        container.style.backgroundImage = `url(${imageSetter.getImage()})`;
        container.classList.add('fade-in');
        setTimeout(() => {
            container.classList.remove('fade-in');
        }, 500);
    }, 500);
    clearInterval(autoInterval);
    autoInterval = setInterval(() => {
        nextPhoto();
    }, 3000);
});
