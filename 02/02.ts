export { manufactureGifts };

function manufactureGifts(
  giftsToProduce: Array<{ toy: string; quantity: number }>,
): string[] {
  return giftsToProduce
    .filter((v) => {
      return v.quantity > 0;
    })
    .flatMap((v) => {
      return Array(v.quantity).fill(v.toy);
    });
}
