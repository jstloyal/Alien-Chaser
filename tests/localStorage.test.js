import LocalStorage from '../src/objects/localStorage';

test('Should save data to localStorage', () => {
  LocalStorage.saveLocalStorage('Tayo');
  expect(JSON.parse(localStorage.getItem('score'))).toBe('Tayo');
});

test('Should retrieve data from localStorage', () => {
  localStorage.setItem('score', JSON.stringify('Tayo'));
  expect(JSON.parse(localStorage.getItem('score'))).toBe('Tayo');
});
