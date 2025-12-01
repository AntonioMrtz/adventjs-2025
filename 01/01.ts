export { filterGifts };

function filterGifts(gifts: string[]): string[] {
  // eslint-disable-next-line quotes
  return gifts.filter((gift) => !gift.includes("#"));
}
