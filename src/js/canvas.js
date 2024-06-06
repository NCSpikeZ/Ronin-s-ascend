import gsap from 'gsap'
import {isOnTopOfPlatform, collisionTop, isColliding, createImage, createImageAsync, hitBottomOfPlatform, hitSideOfPlatform, objectsTouch} from './utils.js'

import platform from '../img/platform.png'
import hills from '../img/hills.png'
import background from '../img/background.png'
import platformSmallTall from '../img/platformSmallTall.png'
import block from '../img/block.png'
import blockTri from '../img/blockTri.png'
import blockSix from '../img/blockSix.png'

import mdPlatform from '../img/mdPlatform.png'
import lgPlatform from '../img/lgPlatform.png'
import tPlatform from '../img/tPlatform.png'
import xtPlatform from '../img/xtPlatform.png'
import flagPoleSprite from '../img/flagPole.png'

import bowIcn from '../img/bowIcn.png'
import arrowIcn from '../img/arrow.png'
import spriteShootRight from '../img/spriteShotRight.png'
import spriteShootLeft from '../img/spriteShotLeft.png'

import spriteRunLeft from '../img/spriteRunLeft.png'
import spriteRunRight from '../img/spriteRunRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png'
import spriteStandRight from '../img/spriteStandRight.png'
import spriteEnemy from '../img/spriteEnemy.png'
import spriteEnemyReverse from '../img/spriteEnemyReverse.png'
import spriteEnemyDeath from '../img/SpriteEnemyDeath.png'
import spriteAttaqueRight from '../img/spriteAttaque.png'
import spriteAttaqueLeft from '../img/spriteAttaqueLeft.png'
import spriteBow from '../img/spriteBow.png'

import { audio } from './audio.js'

import logo from '../img/logo.svg'
import Genjiro from '../font/Genjiro.otf';

const menu = document.createElement('div');
menu.id = 'menu';
const menuImage = document.createElement('img');
menuImage.src = logo
const startButton = document.createElement('button');
startButton.id = 'startButton';
startButton.textContent = 'Start';
menu.appendChild(menuImage);
menu.appendChild(startButton);
document.body.appendChild(menu);

const style = document.createElement('style');
style.innerHTML = `
    #menu {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }

    #menu img {
        max-width: 15%;
        height: auto;
        margin-bottom: 50px;
    }

    #menu button {
        padding: 15px 30px;
        font-size: 28px;
        cursor: pointer;
        border-radius: 5px;
        background-color: #74a6ff;
        color: black;
        font-family: 'Genjiro', sans-serif;
        letter-spacing: 5px;
    }

    canvas {
        display: block;
    }
`;
document.head.appendChild(style);


startButton.addEventListener('click', () => {
  audio.audioLevel.volume = audio.audioLevel.volume * 0.03
  audio.audioLevel.loop = true;
  audio.audioLevel.play();
});

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

let gameStarted = false;

startButton.addEventListener('click', () => {
  menu.style.display = 'none';
  gameStarted = true;
});

canvas.width = 1024
canvas.height = 576

let gravity = 1

class Player {
  constructor() {
    this.speed = 5
    this.lastJumpTime = 0
    this.position = {
      x: 100,
      y: 100
    }
    this.velocity = {
      x: 0,
      y: 0
    }

    this.width = 200  // taille player
    this.height = 200
    this.direction = 'right'
    this.isJumping = false // jump?
    this.iconImage = createImage(bowIcn)

    this.image = createImage(spriteStandRight)
    this.frames = 0
    this.sprites = {
      stand: {
        right: createImage(spriteStandRight),
        left: createImage(spriteStandLeft)
      },
      run: {
        right: createImage(spriteRunRight),
        left: createImage(spriteRunLeft)
      },
      attaque: {
        right: createImage(spriteAttaqueRight),
        left: createImage(spriteAttaqueLeft)
      },
      shoot: {
        right: createImage(spriteShootRight),
        left: createImage(spriteShootLeft)
      }
    }
    
    this.currentSprite = this.sprites.stand.right
    this.frameTimer = 0
    this.frameInterval = 20
    this.attacking = false
    this.invincible = false
    this.powerUps = { Bow: false }
    this.opacity = 1
  }

  draw() {
    c.save()
    c.drawImage(
      this.currentSprite,
      128 * this.frames,
      0,
      128,
      128,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
    c.restore()
  }

  updateDirection() {
    if (keys.left.pressed) {
      this.direction = 'left';
    } else if (keys.right.pressed) {
      this.direction = 'right';
    }
  }

  drawIcon() {
    if (this.powerUps.Bow) {
      c.drawImage(this.iconImage, 10, 10, 50, 50)
    }
  }

  attack() {
    audio.audioKatana.play();
    function createHitImpact(target) {
        gsap.to(target.position, {
            x: target.position.x - 10,
            duration: 0.05,
            yoyo: true,
            repeat: 5
        });
    }

    // Fonction pour faire trembler l'écran
    function screenShake() {
        gsap.to(canvas, {
            x: Math.random() * 10 - 5, // Tremblement horizontal aléatoire
            y: Math.random() * 10 - 5, // Tremblement vertical aléatoire
            duration: 0.1, // Durée du tremblement
            repeat: 5, // Nombre de répétitions
            yoyo: true, // Effet de retour
            ease: "power1.out" // Effet d'accélération
        });
    }

    if (!this.attacking) {
        this.attacking = true;
        const currentDirection = this.currentSprite === this.sprites.stand.left || this.currentSprite === this.sprites.run.left ? 'left' : 'right';
        if (this.powerUps.Bow) {
            this.currentSprite = this.sprites.shoot[currentDirection];
            this.frames = 10;
        } else {
            this.currentSprite = this.sprites.attaque[currentDirection];
            this.frames = 0;
        }

        ennemies.forEach(ennemy => {
            if (
                isColliding(this, ennemy) &&
                Math.abs(this.position.x - ennemy.position.x) < 120
            ) {
                ennemy.die();
                createHitImpact(ennemy);
                audio.audioHit.volume = audio.audioHit.volume * 0.5;
                audio.audioHit.play();
                screenShake(); // Appel de la fonction pour faire trembler l'écran
            }
        });

        setTimeout(() => {
            this.attacking = false;
            if (keys.left.pressed) {
                this.currentSprite = this.sprites.run.left;
            } else if (keys.right.pressed) {
                this.currentSprite = this.sprites.run.right;
            } else {
                this.currentSprite = this.sprites.stand[currentDirection];
            }
        }, 600);
    }
}

  shootArrow() {
    if (this.powerUps.Bow) {
      let arrowDirection = this.direction === 'right' ? 1 : -1
      let arrowStartPositionX = this.position.x + this.width / 2 + (arrowDirection === 1 ? 30 : -110)
      let arrowStartPositionY = this.position.y + this.height / 2 - 5
      audio.audioBow.play()
      arrows.push(new Arrow({
        position: { x: arrowStartPositionX, y: arrowStartPositionY },
        velocity: { x: 8 * arrowDirection, y: 0 }
      }));
    }
  }
  
  
  update() {
    this.updateDirection()
    if (this.attacking) {
      if (this.frameTimer >= this.frameInterval) {
        this.frameTimer = 0;
        this.frames = (this.frames + 1) % 5;
      }
      this.frameTimer++;
    } else {
      this.frameTimer++;
      if (this.frameTimer >= this.frameInterval) {
        this.frameTimer = 0;
        this.frames = (this.frames + 1) % 5;
      }
    }
  
    this.draw()
  
    // gestion jump
    if (this.isJumping && this.position.y + this.height >= canvas.height - 500) {
      this.velocity.y = -25
      audio.audioJump.play();
      this.isJumping = false
    }
  
    this.position.y += this.velocity.y
    this.position.x += this.velocity.x
  
    // gravité
    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity

    if (this.invincible) {
      if (this.opacity === 1) this.opacity = 0
      else this.opacity = 1
    } else this.opacity = 1
  }
}  

class Platform {
  constructor({ x, y, image, block, text }) {
    this.position = {
      x,
      y
    }

    this.velocity = {
      x: 0
    }

    this.image = image
    this.width = image.width // taille platforms
    this.height = image.height
    this.block = block
    this.text = text
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x 
  }
}

// décoration
class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    }

    this.velocity = {
      x: 0
    }
    
    this.image = image
    this.width = image.width
    this.height = image.height
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x 
  }
}

class Ennemy {
  constructor({ position, velocity, distance = { limit: 200, traveled: 0 } }) {
    this.position = {
      x: position.x,
      y: position.y
    }

    this.velocity = {
      x: velocity.x,
      y: velocity.y
    }

    this.width = 200
    this.height = 200

    this.image = createImage(spriteEnemy)
    this.frames = 0

    this.direction = 'left'
    this.distance = distance

    this.frameTimer = 0
    this.frameInterval = 20
    this.dying = false
    this.collidable = true
  }

  draw() {
    c.drawImage(
      this.image,
      128 * this.frames,
      0,
      128,
      128,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }

  update() {
    if (this.dying) {
      this.velocity.x = 0
      this.velocity.y = 0
      this.frameTimer++
      if (this.frameTimer >= this.frameInterval) {
        this.frameTimer = 0
        this.frames = (this.frames + 1) % 12
      }
    } else {
      this.frameTimer++
      if (this.frameTimer >= this.frameInterval) {
        this.frameTimer = 0
        this.frames = (this.frames + 1) % 5
      }
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y

      if (this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity

      // marche avant-arrière
      this.distance.traveled += Math.abs(this.velocity.x)

      if (this.distance.traveled > this.distance.limit) {
        this.distance.traveled = 0
        this.velocity.x = -this.velocity.x
        this.direction = (this.direction === 'left') ? 'right' : 'left'
        this.image = (this.direction === 'left') ? createImage(spriteEnemy) : createImage(spriteEnemyReverse)
      }
    }

    this.draw()
  }

  die() {
    this.dying = true
    this.collidable = false
    this.image = createImage(spriteEnemyDeath)
    score += 100
    updateScore()
    setTimeout(() => {
      const index = ennemies.indexOf(this)
      if (index !== -1) {
        ennemies.splice(index, 1)
      }
    }, 1000)
  }
}

class Bow {
  constructor({ position, velocity}) {
    this.position = {
      x: position.x,
      y: position.y
    }

    this.velocity = {
      x: velocity.x,
      y: velocity.y
    }

    this.width = 64
    this.height = 64

    this.image = createImage(spriteBow)
    this.frames = 0

    this.frameTimer = 0
    this.frameInterval = 30
  }

  draw() {
    c.drawImage(
      this.image,
      32 * this.frames,
      0,
      32,
      32,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }

  update() {
    if (this.dying) {
      this.velocity.x = 0
      this.velocity.y = 0
      this.frameTimer++
      if (this.frameTimer >= this.frameInterval) {
        this.frameTimer = 0
        this.frames = (this.frames + 1) % 12
      }
    } else {
      this.frameTimer++
      if (this.frameTimer >= this.frameInterval) {
        this.frameTimer = 0
        this.frames = (this.frames + 1) % 5
      }
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y

      if (this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity
    }
    this.draw()
  }
}

class Arrow {
  constructor({ position, velocity}) {
    this.position = {
      x: position.x,
      y: position.y
    }

    this.velocity = {
      x: velocity.x,
      y: velocity.y
    }

    this.width = 64
    this.height = 64

    this.image = createImage(arrowIcn)
  }

  draw() {
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }

  update() {
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    this.draw()
  }
}

let lgPlatformImage
let mdPlatformImage
let tPlatformImage
let xtPlatformImage
let platformImage
let platformSmallTallImage
let blockTriImage
let blockSixImage
let blockImage

let player = new Player()
let platforms = []
let genericObjects = []
let ennemies = []
let bows = []
let arrows = []

let lastKey
const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed:false
  }
}

let scrollOffset = 0
let flagPole
let flagPoleImage
let game
async function init(){
  game = {
    disableUserInput: false
  }

  audio.audioLevel.play()

  gravity = 1

  player.velocity.x = 0
  player.velocity.y = 0
  lastKey = 'up'

  timer = 0
  score = 0
  platformImage = await createImageAsync(platform)
  platformSmallTallImage = await createImageAsync(platformSmallTall)
  blockTriImage = await createImageAsync(blockTri)
  blockSixImage = await createImageAsync(blockSix)
  blockImage = await createImageAsync(block)

  lgPlatformImage = await createImageAsync(lgPlatform)
  mdPlatformImage = await createImageAsync(mdPlatform)
  tPlatformImage = await createImageAsync(tPlatform)
  xtPlatformImage = await createImageAsync(xtPlatform)
  flagPoleImage = await createImageAsync(flagPoleSprite)

  flagPole = new GenericObject({
    x: 10885,
    y: canvas.height - lgPlatformImage.height - flagPoleImage.height + 22,
    image : flagPoleImage
  })

  bows = [
    new Bow({
      position: {
        x: 730,
        y: 220,
      },
      velocity: {
        x:0,
        y:0
      }
    }),
    new Bow({
      position: {
        x: 4000,
        y: 220,
      },
      velocity: {
        x:0,
        y:0
      }
    })
  ]

  player = new Player()
  ennemies = [
    new Ennemy({
      position: {
        x: 700, 
        y: 250,
      },
      velocity: {
        x: -0.3,
        y: 0,
      },
      distance: {
        limit: 250,
        traveled: 0
      }
    }),
    new Ennemy({
      position: {
        x: 2000, 
        y: 250,
      },
      velocity: {
        x: -0.3,
        y: 0,
      },
      distance: {
        limit: 250,
        traveled: 0
      }
    }),
    new Ennemy({
      position: {
        x: 2320, 
        y: -25,
      },
      distance: {
        limit: 100,
        traveled: 0
      },
      velocity: {
        x: -0.3,
        y: 0,
      }
    }),
    new Ennemy({
      position: {
        x: 3400, 
        y: 250,
      },
      velocity: {
        x: -0.3,
        y: 0,
      },
      distance: {
        limit: 250,
        traveled: 0
      }
    }),
    new Ennemy({
      position: {
        x: 3900, 
        y: 250,
      },
      velocity: {
        x: -0.3,
        y: 0,
      },
      distance: {
        limit: 250,
        traveled: 0
      }
    }),
    new Ennemy({
      position: {
        x: 4900, 
        y: 0,
      },
      velocity: {
        x: -0.3,
        y: 0,
      },
      distance: {
        limit: 100,
        traveled: 0
      }
    }),
    new Ennemy({
      position: {
        x: 6000, 
        y: 0,
      },
      velocity: {
        x: -0.3,
        y: 0,
      },
      distance: {
        limit: 100,
        traveled: 0
      }
    }),
    new Ennemy({
      position: {
        x: 7350, 
        y: 250,
      },
      velocity: {
        x: -0.3,
        y: 0,
      },
      distance: {
        limit: 100,
        traveled: 0
      }
    }),
    new Ennemy({
      position: {
        x: 9800, 
        y: 250,
      },
      velocity: {
        x: -0.3,
        y: 0,
      },
      distance: {
        limit: 250,
        traveled: 0
      }
    }),
  ]
  // array platforms + positions
  platforms = [   
    new Platform({
      x: 600,
      y: 180,
      image: createImage(blockSix),
      block: true
    }),
    new Platform({
      x: 2700,
      y: 180,
      image: createImage(block),
      block: true
    }),
    new Platform({
      x: 2220,
      y: 250,
      image: createImage(tPlatform)
    }),
    new Platform({
      x: 7250,
      y: 180,
      image: createImage(blockSix)
    }),
    new Platform({
      x: 7800,
      y: 250,
      image: createImage(tPlatform)
    }),
    new Platform({
      x: 3350,
      y: 220,
      image: createImage(blockTri),
      block: true
    }),
    new Platform({
      x: 3800,
      y: 220,
      image: createImage(blockTri),
      block: true
    }),
    new Platform({
      x: 8300,
      y: 400,
      image: createImage(blockTri),
      block: true
    }),
    new Platform({
      x: 8600,
      y: 300,
      image: createImage(block),
      block: true
    }),
    new Platform({
      x: 8800,
      y: 300,
      image: createImage(block),
      block: true
    }),
    new Platform({
      x: 9000,
      y: 400,
      image: createImage(blockTri),
      block: true
    }),
    new Platform({
      x: 9400,
      y: 400,
      image: createImage(block),
      block: true
    }),
    new Platform({
      x: 9900,
      y: 250,
      image: createImage(tPlatform)
    }),
    new Platform({
      x: 10400,
      y: 200,
      image: createImage(block),
      block: true
    }),
    new Platform({
      x: 10600,
      y: 200,
      image: createImage(block),
      block: true
    }),
  ]

  genericObjects = [
    new GenericObject({
      x: -1,
      y: -1,
      image: createImage(background)
    }),
    new GenericObject({
      x: -1,
      y: -1,
      image: createImage(hills)
    }),
  ]

  scrollOffset = 0

  const platformsMap = ['lg','gap','lg','gap','gap','lg','gap','t','gap','xt','gap','t','gap','t','gap','xt','gap','lg','gap','gap','gap','gap','gap','gap','gap','md','gap','gap','gap', 'lg']

  let platformDistance = 0

  platformsMap.forEach(symbol => {
    switch(symbol) {
      case 'lg': 
        platforms.push(new Platform({
          x: platformDistance,
          y: canvas.height - lgPlatformImage.height + 20,
          image: lgPlatformImage,
          block: true,
        })
      )

      platformDistance += lgPlatformImage.width

      break

      case 'md': 
        platforms.push(new Platform({
          x: platformDistance,
          y: canvas.height - mdPlatformImage.height + 20,
          image: mdPlatformImage,
          block: true,
        })
      )

      platformDistance += mdPlatformImage.width

      break

      case 'gap': 
        platformDistance += 220

        break
      
      case 't':
        platforms.push(new Platform({
          x: platformDistance,
          y: canvas.height - tPlatformImage.height,
          image: tPlatformImage,
          block: true,
        })
      )

      platformDistance += tPlatformImage.width

      break

      case 'xt':
        platforms.push(new Platform({
          x: platformDistance,
          y: canvas.height - xtPlatformImage.height,
          image: xtPlatformImage,
          block: true,
        })
      )

      platformDistance += xtPlatformImage.width

      break
    }
  })
}
let score = 0;

const scoreDisplay = document.createElement('div');
scoreDisplay.id = 'scoreDisplay';  
scoreDisplay.style.position = 'absolute';
scoreDisplay.style.fontFamily = 'Genjiro';
scoreDisplay.style.top = '30%';
scoreDisplay.style.left = '70%';
scoreDisplay.style.transform = 'translateX(-50%)';
scoreDisplay.style.fontSize = '24px';
document.body.appendChild(scoreDisplay);

function updateScore() {
  scoreDisplay.textContent = `Score: ${score}`;
}

const timerDisplay = document.createElement('div');
timerDisplay.id = 'timerDisplay';  
timerDisplay.style.position = 'absolute';
timerDisplay.style.fontFamily = 'Genjiro';
timerDisplay.style.top = '25%';
timerDisplay.style.left = '70%';
timerDisplay.style.transform = 'translateX(-50%)';
timerDisplay.style.fontSize = '24px';
document.body.appendChild(timerDisplay);

let timer = 0;

function updateTimer() {
  const seconds = Math.floor(timer / 144);
  timerDisplay.textContent = `Timer: ${seconds}`;
}


function animate() {
  requestAnimationFrame(animate);

  if (gameStarted) {
    timer++;
    updateTimer();
    updateScore()
  }

  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);

  genericObjects.forEach(genericObject => {
    genericObject.update()
    genericObject.velocity.x = 0
  });

  platforms.forEach(platform => {
    platform.update()
    platform.velocity.x = 0
  })

  if (flagPole) {
    flagPole.update()
    flagPole.velocity.x = 0

    // player touche le flag
    if (
      !game.disableUserInput &&
      objectsTouch({
        object1: player,
        object2: flagPole
      })
    ){
      game.disableUserInput = true
      player.velocity.x = 0      
      player.velocity.y = 0
      player.currentSprite = player.sprites.stand.right
      gravity = 0
      audio.audioLevel.pause();
      audio.audioComplete.play();

      gsap.to(player.position, {
        y: canvas.height - lgPlatformImage.height - player.height + 20, duration: 1,
        onComplete(){
          player.currentSprite = player.sprites.run.right
        }
      })

      gsap.to(player.position, {
        delay: 1,
        x: canvas.width,
        duration: 2,
        ease: 'power1.in',
        onComplete: () => {
          init()
        }
      })
    }
  }

  bows.forEach((Bow, i) => {
    if (objectsTouch({
      object1: player,
      object2: Bow
    })) {
      setTimeout(() => {
        bows.splice(i, 1)
        audio.audioBonus.volume = audio.audioBonus.volume * 0.2;
        audio.audioBonus.play()
        player.powerUps.Bow = true
        score += 300
      }, 0);
    } else Bow.update()
  })

  ennemies.forEach((ennemy, index) => {
    ennemy.update()

    if (collisionTop({
      object1: player,
      object2: ennemy
    })) {
      if (!ennemy.dying) {
        player.velocity.y -= 40
        ennemy.die()
        audio.audioEnemyJump.volume = audio.audioEnemyJump.volume * 0.5;
        audio.audioEnemyJump.play()
      }
    } else if (
      ennemy.collidable &&
      player.position.x + player.width - 140 >= ennemy.position.x &&
      player.position.y + player.height - 128 >= ennemy.position.y &&
      player.position.x <= ennemy.position.x + ennemy.width - 105 &&
      player.position.y <= ennemy.position.y + ennemy.height
    ) {
      if (player.powerUps.Bow) {
        player.invincible = true
        player.powerUps.Bow = false
        audio.audioHurt.play()

        setTimeout(() => {
          player.invincible = false
        }, 1000);
      } else if (!player.invincible) {
        audio.audioHurt.play()
        init();
      }
    }
})
  
  player.updateDirection()
  player.update()
  player.drawIcon()

  if (game.disableUserInput) return

  let hitSide = false

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if ((keys.left.pressed && player.position.x > 50)
    || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    // code de scroll
    if (keys.right.pressed) {
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        platform.velocity.x = -player.speed

        if (
          platform.block &&
          hitSideOfPlatform({
            object: player,
            platform
          })
        ) {
          platforms.forEach((platform) => {
            platform.velocity.x = 0
          })

          hitSide = true
          break
        }
      }

      if (!hitSide) {
        scrollOffset += player.speed

        flagPole.velocity.x = -player.speed

        genericObjects.forEach(genericObject => {
          genericObject.velocity.x = -player.speed * 0.66
        })

        ennemies.forEach(ennemy => {
          ennemy.position.x -= player.speed
        })
        
        bows.forEach(Bow => {
          Bow.position.x -= player.speed
        })
      }
    } else if (keys.left.pressed && scrollOffset > 0) {
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        platform.velocity.x = player.speed

        if (
          platform.block && 
          hitSideOfPlatform({
            object: player,
            platform
          })
        ) {
          platforms.forEach((platform) => {
            platform.velocity.x = 0
          })
  
          hitSide = true
          break
        }
      }

      if (!hitSide) {
        scrollOffset -= player.speed

        flagPole.velocity.x = player.speed

        genericObjects.forEach(genericObject => {
          genericObject.velocity.x = player.speed * .66
        })
  
        ennemies.forEach(ennemy => {
          ennemy.position.x += player.speed
        })

        bows.forEach(Bow => {
          Bow.position.x += player.speed
        })
      }
    }
  }

  arrows.forEach((arrow, index) => {
    arrow.update();
  
    if (arrow.position.x > canvas.width || arrow.position.y > canvas.height) {
      arrows.splice(index, 1);
    } else {
      ennemies.forEach(ennemy => {
        if (isColliding(arrow, ennemy)) {
          audio.audioArrow.play()
          ennemy.die();
          arrows.splice(index, 1)
        }
      })
    }
  })

  // collision platform
  platforms.forEach(platform => {
    if (isOnTopOfPlatform({ object: player, platform })) {
      player.velocity.y = 0;
      player.position.y = platform.position.y - player.height;
    }

    if (platform.block && hitBottomOfPlatform({
      object: player,
      platform
    })) {
      player.velocity.y = -player.velocity.y
    }

    if (platform.block && hitSideOfPlatform({
      object: player,
      platform
    })) {
      player.velocity.x = 0
    }

    ennemies.forEach(ennemy => {
      if (ennemy.collidable && isOnTopOfPlatform({ object: ennemy, platform })) {
        ennemy.velocity.y = 0;
      }
    })

    bows.forEach(Bow => {
      if (isOnTopOfPlatform({ object: Bow, platform })) {
        Bow.velocity.y = 0;
      }
    })
  });

  if (keys.right.pressed && lastKey === 'right' && !player.attacking && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
  } else if (keys.left.pressed && lastKey === 'left' && !player.attacking && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
  } else if (!keys.left.pressed && lastKey === 'left' && !player.attacking && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
  } else if (!keys.right.pressed && lastKey === 'right' && !player.attacking && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
  }

  if (platformImage && scrollOffset > platformImage.width * 5 + 300 - 2) {
    console.log('you win');
  }

  if (player.position.y > canvas.height) {
    console.log('you lose');
    init();
  }
}

init();
animate();

// Fonction keydown
addEventListener('keydown', ({ keyCode }) => {
  if (game.disableUserInput) return

  if (!gameStarted) return;
  if (!player.attacking) {
    switch (keyCode) {
      case 81: // Q - Gauche
        keys.left.pressed = true;
        lastKey = 'left';
        player.currentSprite = player.sprites.run.left;
        break;
      case 83: // S - Bas
        break;
      case 68: // D - Droite
        keys.right.pressed = true;
        lastKey = 'right';
        player.currentSprite = player.sprites.run.right;
        break;
      case 90: // Z - Haut
        keys.up.pressed = true;
        if (!player.isJumping && (Date.now() - player.lastJumpTime) > 480) {
          player.isJumping = true;
          player.lastJumpTime = Date.now();
        }
        lastKey = 'up';
        break;
      case 32: // Espace - Attaque
        player.attack();
        player.shootArrow();
        // Empêcher le mouvement pendant l'attaque
        keys.left.pressed = false;
        keys.right.pressed = false;
        break;
    }
  }
});

// Fonction keyup
addEventListener('keyup', ({ keyCode }) => {
  if (game.disableUserInput) return

  if (!player.attacking) {
    switch (keyCode) {
      case 81: // Q - Gauche
        keys.left.pressed = false;
        if (keys.right.pressed) {
          player.currentSprite = player.sprites.run.right;
          lastKey = 'right';
        } else {
          player.currentSprite = player.sprites.stand.left;
          lastKey = 'left';
        }
        break;
      case 83: // S - Bas
        break;
      case 68: // D - Droite
        keys.right.pressed = false;
        if (keys.left.pressed) {
          player.currentSprite = player.sprites.run.left;
          lastKey = 'left';
        } else {
          player.currentSprite = player.sprites.stand.right;
          lastKey = 'right';
        }
        break;
      case 90: // Z - Haut
        keys.up.pressed = false;
        break;
    }
  }
})