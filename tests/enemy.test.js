import Phaser from 'phaser';
import Enemy from '../src/helper/enemy';

test('Enemy is a subclass of Phaser.Scene', () => {
  expect(Enemy).toBeSubclassOf(Phaser.Physics.Arcade.Sprite);
});
