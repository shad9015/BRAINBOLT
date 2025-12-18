function checkPattern() {
  const ans = document.getElementById("answer").value;
  const result = document.getElementById("result");
  result.innerText = ans == 16 ? "Correct!" : "Wrong! Answer is 16";
}
