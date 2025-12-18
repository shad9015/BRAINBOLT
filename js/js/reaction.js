let startTime;

function startGame() {
  const box = document.getElementById("box");
  box.style.background = "red";
  box.innerText = "WAIT...";
  
  setTimeout(() => {
    box.style.background = "green";
    box.innerText = "CLICK!";
    startTime = Date.now();
    box.onclick = () => {
      const time = Date.now() - startTime;
      document.getElementById("result").innerText =
        "Reaction Time: " + time + " ms";
    };
  }, Math.random() * 3000 + 2000);
}
