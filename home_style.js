const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");
  const newDisplay=wrap.querySelector(".newP");

  range.addEventListener("input", () => {
    setBubble(range, bubble,newDisplay);
  });
  setBubble(range, bubble,newDisplay);
});

function setBubble(range, bubble,newDisplay) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;
  newDisplay.innerHTML=`$`+Math.round(val*.03) + `/yr.`;
  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;





}