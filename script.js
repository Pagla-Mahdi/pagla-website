function changeBackgroundColor() {
  const colors = ["#ff6347", "#3cb371", "#ffa500", "#6a5acd", "#ff4500"];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
