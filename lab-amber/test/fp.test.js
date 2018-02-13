'use strict';

const Fp = require('../lib/fp.js');

// FOREACH
describe('testing Fp.forEach with null entry for array', () => {
  let expected = [];
  it('it should return undefined', () => {
    let array = null;
    let result = [];
    let callback = (item) => {
      return item * 2;
    }
    Fp.forEach(array, (item) => {
      result.push(callback(item));
    });
    expect(result).toEqual(expected);
  })
});

describe('testing Fp.forEach with empty array', () => {
  let expected = [];
  it('it should return undefined', () => {
    let array = [];
    let result = [];
    let callback = (item) => {
      return item * 2;
    }
    Fp.forEach(array, (item) => {
      result.push(callback(item));
    });
    expect(result).toEqual(expected);
  })
});

describe('testing Fp.forEach with one item', () => {
  let expected = [2];
  it('it should return 2', () => {
    let array = [1];
    let result = [];
    let callback = (item) => {
      return item * 2;
    }
    Fp.forEach(array, (item) => {
      result.push(callback(item));
    });
    expect(result).toEqual(expected);
  })
});

describe('testing Fp.forEach with two items', () => {
  let expected = [2, 4];
  it('it should return double amounts', () => {
    let array = [1, 2];
    let result = [];
    let callback = (item) => {
      return item * 2;
    }
    Fp.forEach(array, (item) => {
      result.push(callback(item));
    });
    expect(result).toEqual(expected);
  })
});

describe('testing Fp.forEach with a bigger array', () => {
  let expected = [2, 4, 6, 8];
  it('it should return double amounts', () => {
    let array = [1, 2, 3, 4];
    let result = [];
    let callback = (item) => {
      return item * 2;
    }
    Fp.forEach(array, (item) => {
      result.push(callback(item));
    });
    expect(result).toEqual(expected);
  })
});

describe('testing Fp.forEach with a bigger array that includes negative numbers', () => {
  let expected = [2, -4, 6, -8];
  it('it should return double amounts', () => {
    let array = [1, -2, 3, -4];
    let result = [];
    let callback = (item) => {
      return item * 2;
    }
    Fp.forEach(array, (item) => {
      result.push(callback(item));
    });
    expect(result).toEqual(expected);
  })
});


// // MAP
// describe('testing Fp.map with null entry for array', () => {
//   let expected = undefined;
//   it('it should return undefined', () => {
//     let array = null;
//     let callback = (item) => {
//       return `New item: ${item + 1}`;
//     }
//     let result = Fp.forEach(array, callback);
//     expect(result).toEqual(expected);
//   })
// });

// describe('testing Fp.map with empty array', () => {
//   let expected = undefined;
//   it('it should return undefined', () => {
//     let array = [];
//     let callback = (item) => {
//       return `New item: ${item + 1}`;
//     }
//     let result = Fp.forEach(array, callback);
//     expect(result).toEqual(expected);
//   })
// });

// describe('testing Fp.map with one item in the array', () => {
//   let expected = [`New item: 2`];
//   it('it should return an array with New item: 2', () => {
//     let array = [1];
//     let callback = (item) => {
//       return `New item: ${item + 1}`;
//     }
//     let result = Fp.forEach(array, callback);
//     expect(result).toEqual(expected);
//   })
// });

// describe('testing Fp.map with two items in the array', () => {
//   let expected = [`New item: 2`, `New item: 3`];
//   it('it should return an array with New item: 2', () => {
//     let array = [1, 2];
//     let callback = (item) => {
//       return `New item: ${item + 1}`;
//     }
//     let result = Fp.forEach(array, callback);
//     expect(result).toEqual(expected);
//   })
// });

// describe('testing Fp.forEach with more entries', () => {
//   let expected = ['New item: 2', 'New item: 3', 'New item: 4', 'New item: 5'];
//   it('it should return strings with the amounts increased by one', () => {
//     let array = [1, 2, 3, 4];
//     let callback = (item) => {
//       return `New item: ${item + 1}`;
//     }
//     let result = Fp.forEach(array, callback);
//     expect(result).toEqual(expected);
//   })
// });

// describe('testing Fp.forEach with more entries including negative numbers', () => {
//   let expected = ['New item: 2', 'New item: -1', 'New item: 4', 'New item: -3'];
//   it('it should return strings with the amounts increased by one', () => {
//     let array = [1, -2, 3, -4];
//     let callback = (item) => {
//       return `New item: ${item + 1}`;
//     }
//     let result = Fp.forEach(array, callback);
//     expect(result).toEqual(expected);
//   })
// });


// // FILTER
// describe('testing Fp.filter null argument', () => {
//   let expected = undefined;
//   it('it should return undefined', () => {
//     let array = null;
//     let callback = (item) => {
//       if (item > 4) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//     let result = Fp.filter(array, callback);
//     expect(result).toEqual(expected);
//   })
// });

// describe('testing Fp.filter with empty array', () => {
//   let expected = undefined;
//   it('it should return undefined', () => {
//     let array = [];
//     let callback = (item) => {
//       if (item > 4) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//     let result = Fp.filter(array, callback);
//     expect(result).toEqual(expected);
//   })
// });

// describe('testing Fp.filter with array that has one item that is passing', () => {
//   let expected = [5];
//   it('it should return the array with the element', () => {
//     let array = [5];
//     let callback = (item) => {
//       if (item > 4) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//     let result = Fp.filter(array, callback);
//     expect(result).toEqual(expected);
//   })
// });

// describe('testing Fp.filter with array that has one item that is NOT passing', () => {
//   let expected = [];
//   it('it should return an empty array', () => {
//     let array = [3];
//     let callback = (item) => {
//       if (item > 4) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//     let result = Fp.filter(array, callback);
//     expect(result).toEqual(expected);
//   })
// });

// describe('testing Fp.filter with array that has two items that has two passing', () => {
//   let expected = [5, 6];
//   it('it should return the same array', () => {
//     let array = [5, 6];
//     let callback = (item) => {
//       if (item > 4) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//     let result = Fp.filter(array, callback);
//     expect(result).toEqual(expected);
//   })
// });

// describe('testing Fp.filter with more entries', () => {
//   let expected = [5, 6, 7, 8];
//   it('it should return all numbers greater than 4', () => {
//     let array = [1, 2, 3, 4, 5, 6, 7, 8];
//     let callback = (item) => {
//       if (item > 4) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//     let result = Fp.filter(array, callback);
//     expect(result).toEqual(expected);
//   })
// });

// describe('testing Fp.filter with more entries that includes negative numbers', () => {
//   let expected = [5, 6, 7, 8];
//   it('it should return all numbers greater than 4', () => {
//     let array = [1, 2, 3, 4, 5, 6, 7, 8, -1, -2];
//     let callback = (item) => {
//       if (item > 4) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//     let result = Fp.filter(array, callback);
//     expect(result).toEqual(expected);
//   })
// });


// // REDUCE
// describe('testing Fp.reduce null argument for array', () => {
//   let expected = undefined;
//   it('it should return undefined', () => {
//     let array = null;
//     let callback = (accumulator, item) => {
//       return accumulator + item;
//     }
//     let result = Fp.reduce(array, callback);
//     expect(result).toEqual(expected);
//   })
// });

// describe('testing Fp.reduce for empty array', () => {
//   let expected = 0;
//   it('it should return 0', () => {
//     let array = [];
//     let callback = (accumulator, item) => {
//       return accumulator + item;
//     }
//     let result = Fp.reduce(array, callback);
//     expect(result).toEqual(expected);
//   })
// });

// describe('testing Fp.reduce with array that has one item', () => {
//   let expected = 1;
//   it('it should return the same first item', () => {
//     let array = [1];
//     let callback = (accumulator, item) => {
//       return accumulator + item;
//     }
//     let result = Fp.reduce(array, callback);
//     expect(result).toBe(expected);
//   })
// });

// describe('testing Fp.reduce with array that has two items', () => {
//   let expected = 3;
//   it('it should return 3', () => {
//     let array = [1, 2];
//     let callback = (accumulator, item) => {
//       return accumulator + item;
//     }
//     let result = Fp.reduce(array, callback);
//     expect(result).toBe(expected);
//   })
// });

// describe('testing Fp.reduce with more entries with simple sum callback and no initial state', () => {
//   let expected = 10;
//   it('it should return 10', () => {
//     let array = [1, 2, 3, 4];
//     let callback = (accumulator, item) => {
//       return accumulator + item;
//     }
//     let result = Fp.reduce(array, callback);
//     expect(result).toEqual(expected);
//   })
// });

// describe('testing Fp.reduce with more entries and negative numbers with simple sum callback and no initial state', () => {
//   let expected = -2;
//   it('it should return 10', () => {
//     let array = [1, -2, 3, -4];
//     let callback = (accumulator, item) => {
//       return accumulator + item;
//     }
//     let result = Fp.reduce(array, callback);
//     expect(result).toEqual(expected);
//   })
// });

// describe('testing Fp.reduce with more entries and negative numbers with simple sum callback and initial state of 2', () => {
//   let expected = 0;
//   it('it should return 0', () => {
//     let array = [1, -2, 3, -4];
//     let callback = (accumulator, item) => {
//       return accumulator + item;
//     }
//     let initialState = 2;
//     let result = Fp.reduce(array, callback, initialState);
//     expect(result).toEqual(expected);
//   })
// });

// describe('testing Fp.reduce with more entries and negative numbers with simple subtraction callback and no initial state', () => {
//   let expected = 2;
//   it('it should return 2', () => {
//     let array = [1, -2, 3, -4];
//     let callback = (accumulator, item) => {
//       return accumulator - item;
//     }
//     let result = Fp.reduce(array, callback);
//     expect(result).toEqual(expected);
//   })
// });