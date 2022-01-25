$(document).ready(function () {
  const fill = document.querySelector(".fill");
  const boxes = document.querySelectorAll(".box");

  const dragStart = function () {
    this.className += " hold";
    setTimeout(() => (this.className = "invisible"), 0);
  };

  const dragEnd = function () {
    this.className = "fill";
  };

  const dragOver = function (e) {
    e.preventDefault();
  };

  const dragEnter = function (e) {
    e.preventDefault();
    this.className += " hovered";
  };

  const dragLeave = function () {
    this.className = "box";
  };

  const dragDrop = function () {
    this.className = "box filled";
    this.append(fill);
  };

  fill.addEventListener("dragstart", dragStart);
  fill.addEventListener("dragend", dragEnd);

  for (const box of boxes) {
    box.addEventListener("dragenter", dragEnter);
    box.addEventListener("dragleave", dragLeave);
    box.addEventListener("drop", dragDrop);
    box.addEventListener("dragover", dragOver);
  }
});
