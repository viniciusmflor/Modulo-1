var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scaleMode: Phaser.Scale.EXPAND,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

//variavel do tubarao
var tubarao;

function preload() {
  // Carregar o background
  this.load.image("mar", "assets/bg_azul-escuro.png");

  //Carregar a logo
  this.load.image("logo", "assets/logo-inteli_branco.png");

  // Carregar o peixe
  this.load.image("tubarao", "assets/peixes/tubarao.png");

  //Imagem adicional
  this.load.image("png.png", "assets/1826003.png");
}

function create() {
  this.add.image(400, 300, "mar");

  //adicionar logo na tela
  this.add.image(400, 525, "logo").setScale(0.5);

  //guardando o tubarao numa variavel
  tubarao = this.add.image(400, 300, "tubarao");

  this.add.image(600, 300, "png.png").setScale(0.3);
}

tubarao.setFlip(true, false);

function update() {
  tubarao.x = this.input.x;
  tubarao.y = this.input.y;
}

Phaser.Scale.FIT


