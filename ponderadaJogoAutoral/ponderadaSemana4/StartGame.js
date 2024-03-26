class StartGame extends Phaser.Scene {
  constructor() {
    super("StartGame");
  }


  preload() {
    this.load.image("startBackground", "assets/start-background.jpg");
    this.load.image("startButton", "assets/start-button.png");
  }

  create() {
    
    //Adiciona o background do jogo
    const background = this.add
      .image(400, 300, "startBackground")
      .setScale(1.4, 1.5);

    this.input.on("pointerdown", (pointer) => {
      // dev iniciar a cena quando clicar sobre o botao

      this.scene.start("Game");
    });

    //Texto de bem vindo da tela de inicio
    const welcomeText = this.add
      .text(400, 200, "Bem vindo!", {
        fontSize: "64px",
        fill: "#000000",
        align: "center",
      })
      .setOrigin(0.5);
    
    //Texto dizendo para o jogador clicar em qualquer lugar da tela
    const startText = this.add
      .text(400, 350, "Clique em qualquer lugar para começar!", {
        fontSize: "32px",
        fill: "#ffffff",
        align: "center",
      })
      .setOrigin(0.5);

    //Texto que diz para o jogador usar as setas para movimentar a nave
    const keysToUse = this.add
      .text(200, 450, "Use as setas do teclado para movimentar a nave", {
        fontSize: "26px",
        fill: "#000000",
      })
      .setOrigin(0.22);
  }
}
