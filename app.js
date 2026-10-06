const refreshButton = document.querySelector("#refresh-button");
const feedSearch = document.querySelector("#feed-search");
const priorityFilter = document.querySelector("#priority-filter");
const mobileMenu = document.querySelector(".mobile-menu");
const sidebar = document.querySelector(".sidebar");

function filterFeed() {
  const query = feedSearch.value.trim().toLowerCase();
  const priority = priorityFilter.value;
  document.querySelectorAll("#feed-table tbody tr").forEach((row) => {
    const matchesText = row.textContent.toLowerCase().includes(query);
    const matchesPriority = priority === "all" || row.dataset.priority === priority;
    row.hidden = !(matchesText && matchesPriority);
  });
}

feedSearch.addEventListener("input", filterFeed);
priorityFilter.addEventListener("change", filterFeed);

refreshButton.addEventListener("click", () => {
  const originalLabel = refreshButton.textContent;
  refreshButton.textContent = "✓ Intelligence refreshed";
  refreshButton.disabled = true;
  setTimeout(() => {
    refreshButton.textContent = originalLabel;
    refreshButton.disabled = false;
  }, 1800);
});

mobileMenu.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => sidebar.classList.remove("open"));
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((candidate) => candidate.classList.remove("active"));
    tab.classList.add("active");
  });
});
