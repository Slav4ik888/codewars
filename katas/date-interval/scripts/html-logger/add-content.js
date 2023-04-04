export const addContent = ($row, content) => {
  const contentHTML = `:<span class="logger-content">${content}</span>`;
  
  $row.insertAdjacentHTML(`beforeend`, contentHTML);
};