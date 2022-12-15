/* eslint-disable-next-line no-plusplus */
document.querySelectorAll('.collapsible').forEach(button => {
  button.addEventListener('click', () => {
  const widget = button.nextElementSibling; 
  button.classList.toggle('active');
  if (button.classList.contains('active')) {
    widget.style.maxHeight = widget.scrollHeight + 'px';
  } else {
    widget.style.maxHeight = 0; 
  }
});
});