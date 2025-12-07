import { drawGift } from './03';

describe('Challenge Day 3', () => {
  it('should draw a 4x4 gift with *', () => {
    const expected = ['****', '*  *', '*  *', '****'].join('\n');
    expect(drawGift(4, '*')).toBe(expected);
  });

  it('should draw a 3x3 gift with #', () => {
    const expected = ['###', '# #', '###'].join('\n');
    expect(drawGift(3, '#')).toBe(expected);
  });

  it('should draw a 2x2 gift with -', () => {
    const expected = ['--', '--'].join('\n');
    expect(drawGift(2, '-')).toBe(expected);
  });

  it('should return empty string for size < 2', () => {
    expect(drawGift(1, '+')).toBe('');
    expect(drawGift(0, '*')).toBe('');
    expect(drawGift(-5, '#')).toBe('');
  });

  it('should use the correct symbol for the border', () => {
    const expected = ['&&&&', '&  &', '&  &', '&&&&'].join('\n');
    expect(drawGift(4, '&')).toBe(expected);
  });
});
