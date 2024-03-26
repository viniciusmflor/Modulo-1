// Esse arquivo funciona apenas para a organizacao de cenas
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 320 }, // Gravidade aplicada no eixo Y
      debug: false,
    },
  },
  scene: [StartGame, Game],
};

//Funcoes padroes do Phaser Game
var game = new Phaser.Game(config);

function init() {}

function preoload() {}

function create() {
  this.scene.start("Game");
}

function update() {}
