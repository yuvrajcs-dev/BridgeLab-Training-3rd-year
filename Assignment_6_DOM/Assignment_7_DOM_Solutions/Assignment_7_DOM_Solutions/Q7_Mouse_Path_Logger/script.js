// Q7: Log viewport coordinates and mark double-click positions relative to the box.
const trackingBox = document.getElementById('trackingBox');
const coordinates = document.getElementById('coordinates');

trackingBox.addEventListener('mousemove', (event) => {
  coordinates.textContent = `clientX: ${event.clientX} | clientY: ${event.clientY}`;
});
trackingBox.addEventListener('dblclick', (event) => {
  const bounds = trackingBox.getBoundingClientRect();
  const dot = document.createElement('span');
  dot.className = 'dot';
  dot.style.left = `${event.clientX - bounds.left}px`;
  dot.style.top = `${event.clientY - bounds.top}px`;
  trackingBox.appendChild(dot);
});