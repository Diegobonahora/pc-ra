document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("[mindar-image-target]");

  target.addEventListener("targetFound", () => {
    console.log("🎯 Marcador detectado");
  });

  target.addEventListener("targetLost", () => {
    console.log("👋 Marcador perdido");
  });

  console.log("RA lista ✅");
});
