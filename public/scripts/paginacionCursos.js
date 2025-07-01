function setupPaginacion(containerId, btnPrevId, btnNextId, itemsPerPage = 3) {
  const container = document.getElementById(containerId);
  const btnPrev = document.getElementById(btnPrevId);
  const btnNext = document.getElementById(btnNextId);
  if (!container || !btnPrev || !btnNext) return;

  let items = [];

  function updateItems() {
    items = Array.from(container.children);
  }

  let currentPage = 0;
  let totalPages = 0;

  function showPage(page) {
    updateItems();
    const totalItems = items.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);

    currentPage = Math.max(0, Math.min(page, totalPages - 1));
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;

    items.forEach((item, index) => {
      item.style.display = index >= start && index < end ? '' : 'none';
    });

    btnPrev.disabled = currentPage === 0;
    btnNext.disabled = currentPage >= totalPages - 1;
  }

  btnPrev.addEventListener('click', () => showPage(currentPage - 1));
  btnNext.addEventListener('click', () => showPage(currentPage + 1));

  // Aseguramos que se ejecute al final del DOM (mejor que defer solo)
  window.requestAnimationFrame(() => {
    updateItems();
    showPage(0);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setupPaginacion('finalizados-container', 'finalizados-prev', 'finalizados-next', 3);
  setupPaginacion('enprogreso-container', 'enprogreso-prev', 'enprogreso-next', 3);
});
