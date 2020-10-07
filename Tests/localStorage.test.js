import LocalStorage from '../src/objects/localStorage';

test('Data should be saved to localStorage', () => {
  LocalStorage.saveLocalStorage('Brittany');
  expect(JSON.parse(localStorage.getItem('score'))).toBe('Tayo');
});

test('Should retrieve data from localStorage', () => {
  localStorage.setItem('score', JSON.stringify('Tayo'));
  expect(JSON.parse(localStorage.getItem('score'))).toBe('Tayo');
});
