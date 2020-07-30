var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var RightBox, CenterBox, LeftBox, RightBody, LeftBody, CenterBody;

function preload() {
  helicopterIMG = loadImage("helicopter.png");
  packageIMG = loadImage("package.png");
}

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);

  packageSprite = createSprite(width / 2, 80, 10, 10);
  packageSprite.addImage(packageIMG);
  packageSprite.scale = 0.2;

  helicopterSprite = createSprite(width / 2, 200, 10, 10);
  helicopterSprite.addImage(helicopterIMG);
  helicopterSprite.scale = 0.6;

  groundSprite = createSprite(width / 2, height - 35, width, 10);
  groundSprite.shapeColor = color(255);

  engine = Engine.create();
  world = engine.world;

  packageBody = Bodies.circle(width / 2, 200, 5, {
    restitution: 0.6,
    isStatic: true,
  });
  World.add(world, packageBody);

  var options = {
    isStatic: true,
  };

  //Create a Ground
  ground = Bodies.rectangle(width / 2, 650, width, 10, options);
  World.add(world, ground);

  LeftBox = createSprite(300, 610, 20, 100);
  LeftBox.shapeColor = color(255, 0, 0);

  LeftBody = Bodies.rectangle(300, 610, 20, 100, options);
  World.add(world, LeftBody);

  CenterBox = createSprite(400, 650, 200, 20);
  CenterBox.shapeColor = color(255, 0, 0);

  CenterBody = Bodies.rectangle(400, 635, 200, 20, options);
  World.add(world, CenterBody);

  RightBox = createSprite(500, 610, 20, 100);
  RightBox.shapeColor = color(255, 0, 0);

  RightBody = Bodies.rectangle(500, 610, 20, 100, options);
  World.add(world, RightBody);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  drawSprites();
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}
