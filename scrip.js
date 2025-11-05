async function checkCameraAccess() {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter(d => d.kind === "videoinput");
    if (cameras.length === 0) throw new Error("No hay cámaras disponibles");

    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    stream.getTracks().forEach(t => t.stop());
    return true;
  } catch (err) {
    console.warn("Cámara no accesible:", err);
    return false;
  }
}

async function initCamera() {
  const scene = document.querySelector("#scene");
  const errorBox = document.querySelector("#errorBox");

  const access = await checkCameraAccess();
  if (!access) {
    errorBox.style.display = "flex";
    scene.style.display = "none";
  } else {
    errorBox.style.display = "none";
    scene.style.display = "block";
  }
}

document.getElementById("retry").addEventListener("click", () => {
  initCamera();
  location.reload();
});

window.addEventListener("load", initCamera);
