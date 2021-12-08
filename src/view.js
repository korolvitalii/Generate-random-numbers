const renderNumbers = (numbers) => {
  const html = numbers.reduce((acc, number) => {
    acc += `<div>${number}</div>`;
    return acc;
  }, '');
  return html;
};

export { renderNumbers };
