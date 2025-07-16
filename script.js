function calculate() {
  let original = parseFloat(document.getElementById("original").value);
  let discount = parseFloat(document.getElementById("discount").value);
  if (isNaN(original) || isNaN(discount)) {
    document.getElementById("result").innerText = "Please enter valid numbers.";
    return;
  }
  let saved = (original * discount) / 100;
  let finalPrice = original - saved;
  document.getElementById("result").innerText =
    `You save ₹${saved.toFixed(2)}! Final Price: ₹${finalPrice.toFixed(2)}`;
}
