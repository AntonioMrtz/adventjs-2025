import { manufactureGifts } from './02';

describe('Challenge Day 2', () => {
  it('should manufacture toys with valid quantities', () => {
    const production1 = [
      { toy: 'car', quantity: 3 },
      { toy: 'doll', quantity: 1 },
      { toy: 'ball', quantity: 2 }
    ];
    const result1 = manufactureGifts(production1);
    expect(result1).toEqual(['car', 'car', 'car', 'doll', 'ball', 'ball']);
  });

  it('should ignore toys with invalid quantities', () => {
    const production2 = [
      { toy: 'train', quantity: 0 },
      { toy: 'bear', quantity: -2 },
      { toy: 'puzzle', quantity: 1 }
    ];
    const result2 = manufactureGifts(production2);
    expect(result2).toEqual(['puzzle']);
  });

  it('should return an empty array for empty input', () => {
    const production3 = [];
    const result3 = manufactureGifts(production3);
    expect(result3).toEqual([]);
  });
});
