document.addEventListener("DOMContentLoaded", function () {
  const cardScroller = document.querySelector(".price__card");

  let speed = 2; // Скорость скролла.

  let left = 240; // отпустили мышку - сохраняем положение скролла
  let drag = false;
  let coorX = 0; // нажали мышку - сохраняем координаты.

  cardScroller.addEventListener("mousedown", function (e) {
    drag = true;
    coorX = e.pageX - this.offsetLeft;
  });
  document.addEventListener("mouseup", function () {
    drag = false;
    left = cardScroller.scrollLeft;
  });
  cardScroller.addEventListener("mousemove", function (e) {
    if (drag) {
      this.scrollLeft = left + (e.pageX - this.offsetLeft - coorX) * speed;
    }
  });

  cardScroller.scrollLeft = left;
});
