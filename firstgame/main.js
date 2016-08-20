var mainState = {
	
	preload: function() {
		game.load.imagine("player","assets/player.png");

	},
create: function() 
  game.state.backgroundColor = '£3498db';

  game.physics.startSystem(phaser.physics.ARCADE);

  game.renderer.rendererSession.roundpixels = true;
  var player = game.add.sprite(game.width/250, 170, 'player');
  this.player = game.add.spirite(game.width/2, height/2,"player");
  this.player.anchor.setTo(0.5,0.5);

game.physics.arcade.enable(this.player);

this.player.body.gravity.y = 500;

this.cursor = game.input.keyboard.createCursorKeys();



},
	
	
	update: function(){
		this.movePlayer();

	},

	movePlayer: function(){
		if(this.cursor.left.isDown){
			this.player.body.velocity.x = -200;
		}
		else if(this.cursor.right.isDown){
			this.player.body.velocity.x =200;

		}
		else{
			this.player.body.velocity.x = 0;

		}
		if(this.cursor.up.isDown && this.player.body.touching.down){
			this.player.body.velocity.y = -320;
			

		}
		}
	}
};
var game = new phaser.Game(500, 340, phaser.AUTO,'gameDiv');

game.state.add("main",mainState);
 game.state.start("main");

