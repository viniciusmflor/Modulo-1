class Game extends Phaser.Scene {
  constructor() {
    super("Game"); // Nome da cena
    this.cursors = null; // Input do teclado
    this.player = null;
    this.flores = null;
    this.bombs = null;
    this.platforms = null;
    this.score = 0;
    this.gameOver = false;
    this.centerX = null;
    this.centerY = null;
    this.scoreText = null;
    //lista de ferramentas utilizadas no projeto
    this.tools = ["Phaser 3", "Javascript", "HTML", "CSS", "Me da 10 Kizzy S2"];
  }

  //carregando as imagens ao jogo
  preload() {
    this.load.image("background", "assets/background.jpeg");
    this.load.image("ground", "assets/platform.png");
    this.load.image("flor", "assets/flor.png");
    this.load.image("bomb", "assets/bomb.png");
    this.load.image("nave", "assets/nave.png");
  }

  create() {
    // Background do jogo
    this.add.image(400, 300, "background").setScale(1.4, 1.5);

    //  O grupo de plataformas contém o chão e as 2 plataformas em que podemos pular
    this.platforms = this.physics.add.staticGroup();

    // Criando as plataformas

    this.platforms
      .create(100, 568, "ground")
      .setScale(1)
      .refreshBody()
      .setSize(300, 80)
      .body.setOffset(30, 50);
    this.platforms
      .create(450, 400, "ground")
      .setSize(320, 80)
      .body.setOffset(30, 50);
    this.platforms
      .create(50, 250, "ground")
      .setSize(320, 80)
      .body.setOffset(30, 50);
    this.platforms
      .create(750, 220, "ground")
      .setSize(300, 80)
      .body.setOffset(30, 50);

    this.player = this.physics.add
      .sprite(100, 450, "nave")
      .setScale(0.3, 0.3)
      .setSize(300, 150);
    // Define a escala do sprite do jogador (nave)
    this.player.body.setOffset(30, 90);

    //  Propriedades físicas do jogador
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true); //Impede a nave de sair do campo visivel do jogo

    //  Eventos de entrada do teclado
    this.cursors = this.input.keyboard.createCursorKeys();

    //  12 flores para serem coletadas pelo jogador
    this.flores = this.physics.add.group({
      key: "flor",
      repeat: 8,
      setXY: { x: 100, y: 0, stepX: 70 }, // Define a posição inicial da primeira flor
    });

    this.flores.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
      child.setScale(0.17, 0.17); // Define a escala do sprite da flor
      this.physics.add.collider(child, this.platforms); // Adiciona colisão entre as flor e as plataformas
      child.setSize(300, 300).body.setOffset(50, 50);
    }, this);

    this.bombs = this.physics.add.group();

    //  O numero de flores coletadas pelo jogador
    this.scoreText = this.add.text(16, 16, "Flores: 0", {
      fontSize: "32px",
      fill: "#000f00",
    });

    //  Colide o jogador e as flores com as plataformas
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.flores, this.platforms);
    this.physics.add.collider(this.bombs, this.platforms);

    //  Verifica se a nave encosta a alguma das flores, se sim, chama a função collectFlor
    this.physics.add.overlap(
      this.player,
      this.flores,
      this.collectFlor,
      null,
      this
    );

    //adiciona colisao entre as variáveis
    this.physics.add.collider(
      this.player,
      this.bombs,
      this.hitBomb,
      null,
      this
    );
  }

  update() {
    if (this.gameOver) {
      return;
    }

    //Configura as teclas para movimentar a nave
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
    } else {
      this.player.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-330);
    }

    if (this.cursors.down.isDown) {
      this.player.setVelocityY(330);
    }
  }

  //funcao para coletar as flores
  collectFlor(player, flor) {
    flor.disableBody(true, true);

    //Estrutura de repeticao do codigo
    //Para cada flor coletada, um elemento do array tools ("Ferramentas utilizadas") é exibido no console
    for (let i = 0; i < this.score; i++) {
      let randomIndex = Math.floor(Math.random() * this.tools.length);
      console.log("Ferramentas utilizadas: " + this.tools[randomIndex]);
    }

    //  Adiciona e atualiza a pontuação
    this.score += 1;
    this.scoreText.setText("Flores: " + this.score);

    //  Verifica se todas as primeiras 12 flores foram coletadas e gera mais flores
    if (this.flores.countActive(true) === 0) {
      //  Novas plantas para coletar
      this.flores.children.iterate(function (child) {
        child.enableBody(true, child.x, 0, true, true);
      });

      //Spawna as flores em alguma posicao aleatoria
      var x =
        player.x < 400
          ? Phaser.Math.Between(400, 800)
          : Phaser.Math.Between(0, 400);

      //Criando a variavel da bomba e setando suas propriedades
      var bomb = this.bombs.create(x, 16, "bomb");
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
      bomb.allowGravity = false;
      bomb.setScale(0.1);
    }
  }


  //Funcao para quando o jogador encostar na bomba
  hitBomb() {
    this.physics.pause(); //Pausa a fisica do jogo quando o jogador morre

    this.player.setTint(0xff0000); //Deixa a nave vermelha quando é atingida pela bomba

    //Cria o texto de gameOver quando o jogador morre
    const gameOverText = this.add
      .text(400, 350, "Game Over!", {
        fontSize: "70px",
        fill: "#000000",
        align: "center",
      })
      .setOrigin(0.5);
  }
}
