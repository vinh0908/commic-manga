const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

let slideIndex = 0;
let intervalId;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 33.3333}%)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % dots.length;
  showSlide(slideIndex);
  updateActiveDot();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + dots.length) % dots.length;
  showSlide(slideIndex);
  updateActiveDot();
}

function updateActiveDot() {
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === slideIndex) {
      dot.classList.add('active');
    }
  });
}

function startAutoSlide() {
  intervalId = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

nextBtn.addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide(); // Tiếp tục tự động chuyển động
});

prevBtn.addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide(); // Tiếp tục tự động chuyển động
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    stopAutoSlide();
    slideIndex = index;
    showSlide(slideIndex);
    updateActiveDot();
    startAutoSlide(); // Tiếp tục tự động chuyển động
  });
});

startAutoSlide(); // Bắt đầu tự động chuyển đổi slide khi tải trang
showSlide(slideIndex);