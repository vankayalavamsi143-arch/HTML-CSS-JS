const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');
const toggleBtn = document.getElementById('toggleBtn');

/* Tabs */
tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');

    const target = document.getElementById(tab.dataset.tab);
    target.classList.add('active');

    if (tab.dataset.tab === "skills") {
      animateSkills();
    }
  });
});

/* Skills Animation */
function animateSkills() {
  const bars = document.querySelectorAll('.progress-bar');

  bars.forEach((bar, index) => {
    const value = bar.getAttribute('data-progress');

    bar.style.width = "0";

    setTimeout(() => {
      bar.style.width = value + "%";
    }, index * 200);
  });
}

/* Dark Mode Toggle */
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  toggleBtn.textContent =
    document.body.classList.contains('dark') ? "☀️" : "🌙";
});