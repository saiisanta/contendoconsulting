
//ITEM SELECTION
function toggleActive(element) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
  }