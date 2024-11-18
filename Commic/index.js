const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let slideIndex = 0;
let intervalId;
const totalSlides = 3; // Cập nhật số lượng slide của bạn

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 33.3333}%)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
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

startAutoSlide(); // Bắt đầu tự động chuyển đổi slide khi tải trang
showSlide(slideIndex);