// Initialize feather icons
feather.replace();

// World clock functionality
function updateWorldTime() {
  const now = new Date();
  
  const wibTime = new Date(now.getTime() + (7 * 60 * 60 * 1000));
  document.getElementById('wib-time').textContent = wibTime.toTimeString().substr(0, 8);
  
  const witaTime = new Date(now.getTime() + (8 * 60 * 60 * 1000));
  document.getElementById('wita-time').textContent = witaTime.toTimeString().substr(0, 8);
  
  const witTime = new Date(now.getTime() + (9 * 60 * 60 * 1000));
  document.getElementById('wit-time').textContent = witTime.toTimeString().substr(0, 8);
}

// Update time immediately and then every second
updateWorldTime();
setInterval(updateWorldTime, 1000);