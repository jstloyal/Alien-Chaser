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
  }
}
