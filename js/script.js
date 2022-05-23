const contentDivs = document.querySelectorAll('.content');
const colors = [
  '#83d2e1',
  '#bfd7ea',
  '#ff6961',
  '#c81d25',
  '#f06457',
  '#003d71',
  '#f6e5bb',
  '#9fbdb7',
  '#68979d',
  '#e8eadd',
  '#0081a7',
  '#00afb9',
  '#fed9b7',
  '#f07167',
];

function randomColor() {
  let color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}

window.onload = (e) => {
  contentDivs.forEach((content) => {
    content.style.backgroundColor = randomColor();
    console.log(randomColor());
  });
};
