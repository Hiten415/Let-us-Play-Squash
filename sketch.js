                                                                                                                                      var paddle, playerScore, gameState, ball, rand, img;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=0;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  rand = Math.round(random(1,3));
  playerScore = 0;    
}

function draw() {
  background("yellow");
  

  
  

 
  
  if (keyDown("space")) {
    ball.velocityX = 5;
    switch(rand) {
      case 1: ball.velocityY = ball.velocityY + 1;
              break;
      case 2: ball.velocityY = ball.velocityY + 2;
              break;
      case 3: ball.velocityY = ball.velocityY + 3;
              break;
       default: break;}
   
  }
  
   if (ball.x > 400) {
    ball.x = 200;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
    gameState = "serve";  
  }

  //make the ball bounce off the user paddle
  if(ball.isTouching(paddle)){
    //hitSound.play();
  
    
    
    ball.velocityY = ball.velocityY - rand;
    switch(rand) {
      case 1: ball.velocityY = ball.velocityY + 1;
              break;
      case 2: ball.velocityY = ball.velocityY + 2;
              break;
      case 3: ball.velocityY = ball.velocityY + 3;
              break;
       default: break;}
  }

  

  
  
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  ball.bounceOff(paddle);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.collide(edges);
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}

