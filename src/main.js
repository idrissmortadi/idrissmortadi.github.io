function toggleContent(content_id, button_id) {
  const content = document.getElementById(content_id);
  content.classList.toggle("open");

  const btn = document.getElementById(button_id);
  if (content.classList.contains("open")) {
    btn.textContent = "Réduire";
  } else {
    btn.textContent = "Plus d'informations";
  }
}
