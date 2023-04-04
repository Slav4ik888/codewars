
export const createElement = (elem, className) => {
  const $elem = document.createElement(elem);
  if (className) $elem.classList.add(className)

  return $elem;
}