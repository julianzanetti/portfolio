function setupPaginacion(containerId, btnPrevId, btnNextId, pageIndicatorId, storageKey, itemsPerPage = 3) {
  const container = document.getElementById(containerId);
  const btnPrev = document.getElementById(btnPrevId);
  const btnNext = document.getElementById(btnNextId);
  const pageIndicator = document.getElementById(pageIndicatorId);

  if (!container || !btnPrev || !btnNext || !pageIndicator) return;

  let items = [];
  let currentPage = parseInt(localStorage.getItem(storageKey)) || 0;
  let totalPages = 0;

  function updateItems() {
    items = Array.from(container.children);
  }

  function showPage(page) {
    updateItems();
    const totalItems = items.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);

    currentPage = Math.max(0, Math.min(page, totalPages - 1));
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;

    // Transición: ocultar con opacidad
    container.style.opacity = 0;

    setTimeout(() => {
      items.forEach((item, index) => {
        item.style.display = index >= start && index < end ? '' : 'none';
      });

      container.style.opacity = 1;

      btnPrev.disabled = currentPage === 0;
      btnNext.disabled = currentPage >= totalPages - 1;

      pageIndicator.textContent = `${currentPage + 1} / ${totalPages}`;

      // Guardamos el estado
      localStorage.setItem(storageKey, currentPage);
    }, 150); // duración de la transición
  }

  btnPrev.addEventListener('click', () => showPage(currentPage - 1));
  btnNext.addEventListener('click', () => showPage(currentPage + 1));

  // Inicializar
  window.requestAnimationFrame(() => {
    updateItems();
    container.style.transition = 'opacity 0.3s ease';
    showPage(currentPage);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setupPaginacion('finalizados-container', 'finalizados-prev', 'finalizados-next', 'finalizados-page', 'page-finalizados', 3);
  setupPaginacion('enprogreso-container', 'enprogreso-prev', 'enprogreso-next', 'enprogreso-page', 'page-enprogreso', 3);
});