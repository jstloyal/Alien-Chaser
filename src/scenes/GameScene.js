import Phaser from 'phaser';

import star from "../../assets/images/star.png";
import lumb from "../../assets/images/lumb.png";
import light from "../../assets/images/light.png";
import ground2 from "../../assets/images/plant.png";
import flower2 from "../../assets/images/flower2.png";
import flower1 from "../../assets/images/flower1.png";
import rock3 from "../../assets/images/rock3.png";
import rock2 from "../../assets/images/rock2.png";
import rock1 from "../../assets/images/rock1.png";
import cloud4 from "../../assets/images/cloud4.png";
import cloud3 from "../../assets/images/cloud3.png";
import cloud2 from "../../assets/images/cloud2.png";
import cloud1 from "../../assets/images/cloud1.png";
import tree from "../../assets/images/tree.png";
import ground from "../../assets/images/ground.png";
import grass3 from "../../assets/images/grass3.png";
import grass2 from "../../assets/images/grass2.png";
import grass1 from "../../assets/images/grass1.png";
import mountain from "../../assets/images/layer.png";
import sky from "../../assets/images/sky.png";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  init() {
    this.height = this.scale.height;
    this.width = this.scale.width;
  }

  preload() {
    this.load.image("sky", sky);
    this.load.image("mountain", mountain);
    this.load.image("grass1", grass1);
    this.load.image("grass2", grass2);
    this.load.image("grass3", grass3);
    this.load.image("ground", ground);
    this.load.image("tree", tree);
    this.load.image("cloud1", cloud1);
    this.load.image("cloud2", cloud2);
    this.load.image("cloud3", cloud3);
    this.load.image("cloud4", cloud4);
    this.load.image("rock1", rock1);
    this.load.image("rock2", rock2);
    this.load.image("rock3", rock3);
    this.load.image("light", light);
    this.load.image("lumb", lumb);
    this.load.image("flower1", flower1);
    this.load.image("flower2", flower2);
    this.load.image("ground2", ground2);
    this.load.spritesheet("star", star, { frameWidth: 70, frameHeight: 69 });
    this.load.spritesheet("enemy", enemy, {
      frameWidth: 139,
      frameHeight: 145,
    });
    this.load.spritesheet("enemyAttack", test, {
      frameWidth: 202,
      frameHeight: 142,
    });

    this.load.spritesheet("player", player, {
      frameWidth: 145,
      frameHeight: 190,
      margin: 2,
      spacing: 2,
    });

    this.load.spritesheet("playerAttack", playerAttack, {
      frameWidth: 120,
      frameHeight: 105,
    });
  }

  create() {
    const height = this.scale.height;
    const width = this.scale.width;

    this.add.image(width * 0.5, height * 0.5, 'sky');

    this.cloud3 = this.add.image(width / 2.5, height * 0.25, "cloud3").setOrigin(0, 1);
    this.cloud3.setScale(0.5, 0.5);

     this.cloud4 = this.add.image(0, height * 0.35, "cloud4").setOrigin(0, 1);
     this.cloud4.setScale(0.5, 0.5);

    this.mountain = this.add.image(0, height, "mountain").setOrigin(0, 1);
    this.mountain.setScale(0.5, 0.5);


     this.grass3 = this.add.image(width / 2.4, height / 1.5, "grass1");
     this.grass3.setScale(0.4, 0.4);

     this.grass2 = this.add.image(width / 1.4, height / 1.5, "grass2");
     this.grass2.setScale(0.4, 0.4);

      this.grass1 = this.add.image(width / 7.5, height / 1.5, "grass3");
      this.grass1.setScale(0.4, 0.4);







    this.ground = this.add.image(0, height / 1.1, "ground").setOrigin(0, 1);
    this.ground.setScale(0.5, 0.5);

    this.frontgrass = this.add.image(0, height / 1, "frontgrass").setOrigin(0, 1);
    this.frontgrass.setScale(0.5, 0.5);

     this.tree1 = this.add.image(width / 5, height / 1.6, "tree");
     this.tree1.setScale(0.35, 0.35);

     this.tree2 = this.add.image(width / 1.3, height / 1.8, "tree");
     this.tree2.setScale(0.5, 0.5);

     this.rock1 = this.add.image(width / 1.8, height / 1.3, "rock2");
     this.rock1.setScale(0.4, 0.4);

     this.rock2 = this.add.image(width / 3.5, height / 1.3, "rock1");
     this.rock2.setScale(0.4, 0.4);

     this.rock3 = this.add.image(width / 1.1, height / 1.3, "rock3");
     this.rock3.setScale(0.4, 0.4);

     this.flower1 = this.add.image(width / 1.7, height / 1.25, "flower1");
     this.flower1.setScale(0.4, 0.4);

     this.flower2 = this.add.image(width / 2.5, height / 1.3, "flower2");
     this.flower2.setScale(0.4, 0.4);

     this.lumb = this.add.image(width / 2.5, height / 1.25, "lumb").setOrigin(0, 1);
     this.lumb.setScale(0.5, 0.5);

     this.light = this.add.image(width / 2.86, height / 1.20, "light").setOrigin(0, 1);
     this.light.setScale(0.5, 0.5);
  }
}
