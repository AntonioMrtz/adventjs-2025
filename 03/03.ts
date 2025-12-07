export { drawGift };

function drawGift(size: number, symbol: string): string {
  if (size < 2) {
    return '';
  }

  let gift: string = '';

  for (let row = 0; row < size; row++) {
    let line = '';

    if (row === 0 || row === size - 1) {
      line += symbol.repeat(size);

      if (row === 0) {
        line += '\n';
      }
    } else {
      line += symbol;
      line += ' '.repeat(size - 2);
      line += symbol;
      line += '\n';
    }

    gift += line;
  }

  return gift;
}
