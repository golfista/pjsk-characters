document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(document.querySelectorAll(".character-card"));
  const overlay = document.getElementById("selectionOverlay");
  const selectionText = document.getElementById("selectionText");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // Remove selection from other cards
      cards.forEach((c) => c.classList.remove("selected"));

      // Add selection to this one
      card.classList.add("selected");

      // Center text with character name
      const name = card.dataset.name || "Character";
      selectionText.textContent = `Selected: ${name}`;

      overlay.classList.add("show");
    });
  });

  // Clicking anywhere on the overlay closes it
  overlay.addEventListener("click", () => {
    overlay.classList.remove("show");
  });
});
