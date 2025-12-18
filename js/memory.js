function startMemory() {
  const seq = Math.floor(Math.random() * 9000) + 1000;
  document.getElementById("sequence").innerText = seq;
  setTimeout(() => {
    document.getElementById("sequence").innerText = "Time up!";
  }, 2000);
}
