import 'react-native';

import { numberToCurrency } from '~/helpers/numberToCurrency';

describe('Formatting number to currency', () => {
  it('Format 10 to R$ 10,00', () => {
    expect(numberToCurrency(10)).toBe("R$ 10,00");
  });

  it('Format 25.23 to R$ 25,23', () => {
    expect(numberToCurrency(25.23)).toBe("R$ 25,23");
  });

  it('Format 0 to R$ 0,00', () => {
    expect(numberToCurrency(0)).toBe("R$ 0,00");
  });

  it('Format 0.5 to R$ 0,50', () => {
    expect(numberToCurrency(0.5)).toBe("R$ 0,50");
  });

  it('Format 36.6 to R$ 36,60', () => {
    expect(numberToCurrency(36.6)).toBe("R$ 36,60");
  });

  it('Format 1002.52 to R$ 1.002,52', () => {
    expect(numberToCurrency(1002.52)).toBe("R$ 1.002,52");
  });

  it('Format 100252 to R$ 100.252', () => {
    expect(numberToCurrency(100252)).toBe("R$ 100.252,00");
  });

  it('Format 13500252 to R$ 13.500.252', () => {
    expect(numberToCurrency(13500252)).toBe("R$ 13.500.252,00");
  });
})
