import platform from '../img/platform.png'
import hills from '../img/hills.png'
import background from '../img/background.png'
import platformSmallTall from '../img/platformSmallTall.png'

import spriteRunLeft from '../img/spriteRunLeft.png'
import spriteRunRight from '../img/spriteRunRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png'
import spriteStandRight from '../img/spriteStandRight.png'
import spriteJumpLeft from '../img/spriteJumpLeft.png'
import spriteJumpRight from '../img/spriteJumpRight.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = 1
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
    this.isJumping = false // jump?

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
      jump: {
        right: createImage(spriteJumpRight),
        left: createImage(spriteJumpLeft)
      }
    }
    
    this.currentSprite = this.sprites.stand.right
  }

  draw() {
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
  }

  update() {
    this.frames++
    if (this.frames >9) this.frames = 0

    this.draw()

    // gestion jump
    if (this.isJumping && this.position.y + this.height >= canvas.height - 500) {
      this.velocity.y = -25
      this.isJumping = false
    }

    this.position.y += this.velocity.y
    this.position.x += this.velocity.x

    // gravité
    if (this.position.y + this.height < canvas.height) {
      this.velocity.y += gravity
    }
  }

  drawCollisionBox() {
    c.strokeStyle = 'red'
    c.strokeRect(
      this.position.x + 75,     // Décalage vers la droite pour ajuster la position
      this.position.y + 85,    // Décalage vers le bas pour ajuster la position
      this.width - 150,       // Largeur réduite pour correspondre à la taille du sprite
      this.height - 80       // Hauteur réduite pour correspondre à la taille du sprite
    )
  }
}

class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    }

    this.image = image
    this.width = image.width // taille platforms
    this.height = image.height
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }

  drawCollisionBox() {
    c.strokeStyle = 'blue'
    c.strokeRect(this.position.x, this.position.y, this.width, this.height)
  }
}

// décoration
class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    }

    this.image = image
    this.width = image.width
    this.height = image.height
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }

  drawCollisionBox() {
    c.strokeStyle = 'green'
    c.strokeRect(this.position.x, this.position.y, this.width, this.height)
  }
}

class Ennemy {
  constructor({position,velocity}) {
    this.position = {
      x: position.x,
      y: position.y
    }

    this.velocity = {
      x: velocity.x,
      y: velocity.y
    }

    this.width = 50
    this.height = 50
  }
  draw() {
   c.fillStyle = 'red'
   c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.height + this.velocity.y <= canvas.height)
    this.velocity.y += gravity
  }
}

function createImage(imageSrc){
  const image = new Image()
  image.src = imageSrc
  return image
}

function createImageAsync(imageSrc){
  return new Promise((resolve) => {
    const image = new Image()
    image.onload = () => {
      resolve(image)
    }
    image.src = imageSrc
  })
}

let platformImage
let platformSmallTallImage
let player = new Player()
// array platforms + positions
let platforms = []
let genericObjects = []
let ennemies = []

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

function isOnTopOfPlatform({ object,platform }) {
  return (
    object.position.x + 75 < platform.position.x + platform.width &&
    object.position.x + object.width - 75 > platform.position.x &&
    object.position.y < platform.position.y + platform.height &&
    object.position.y + object.height > platform.position.y &&
    object.position.y < platform.position.y &&
    object.velocity.y >= 0
  )
}

async function init(){
  platformImage = await createImageAsync(platform)
  platformSmallTallImage = await createImageAsync(platformSmallTall)
  player = new Player()
  ennemies = [new Ennemy({position: {
    x: 400, 
    y: 100,
  },
  velocity: {
    x: -0.3,
    y: 0,
  }
})]
  // array platforms + positions
  platforms = [new Platform({
    x:platformImage.width *4 + 300 -2 + platformImage.width - platformSmallTallImage.width, y:270, image: platformSmallTallImage
  }), new Platform({
    x: -1, y: 470, image: platformImage
  }), new Platform({
    x:platformImage.width -3, y:470, image: platformImage
  }), new Platform({
    x:platformImage.width *2 + 100 , y:470, image: platformImage
  }),new Platform({
    x:platformImage.width *3 + 300 , y:470, image: platformImage
  }),new Platform({
    x:platformImage.width *4 + 300 -2, y:470, image: platformImage
  }), new Platform({
    x:platformImage.width *5 + 600 -2, y:470, image: platformImage
  })]

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
}

function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = 'white'
  c.fillRect(0, 0, canvas.width, canvas.height)

  genericObjects.forEach(genericObject => {
    genericObject.draw()
    genericObject.drawCollisionBox() // Dessine la zone de collision pour le débogage
  })

  platforms.forEach(platform => {
    platform.draw()
    platform.drawCollisionBox() // Dessine la zone de collision pour le débogage
  })

  ennemies.forEach((Ennemy) => {
    Ennemy.update()
  }) 
  player.update()
  player.drawCollisionBox() // Dessine la zone de collision pour le débogage

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed
  } else if ((keys.left.pressed && player.position.x > 50)
    || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed
  } else {
    player.velocity.x = 0


  // code de scroll
    if (keys.right.pressed) {
      scrollOffset += player.speed
      platforms.forEach(platform => {
        platform.position.x -= player.speed
      })
      genericObjects.forEach(genericObject =>{
        genericObject.position.x -= player.speed * .66
      })

      ennemies.forEach(Ennemy => {
        Ennemy.position.x -= player.speed
      })
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed
      platforms.forEach(platform => {
        platform.position.x += player.speed 
      })
      genericObjects.forEach(genericObject =>{
        genericObject.position.x += player.speed * .66
      })
    }
  }

  // collision platform
  platforms.forEach(platform => {
    if (
      isOnTopOfPlatform({
        object: player,
        platform
      })
    ) {
      player.velocity.y = 0
      player.position.y = platform.position.y - player.height
    }

    ennemies.forEach(Ennemy => {
      if (isOnTopOfPlatform({
        object: Ennemy,
        platform
        })
      )
        Ennemy.velocity.y = 0    
    })
  })
  

  if (
    keys.right.pressed &&
    lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1
    player.currentSprite = player.sprites.run.right
  } else if (
    keys.left.pressed &&
    lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left
  } else if (
    !keys.left.pressed &&
    lastKey === 'left' && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left
  } else if (
    !keys.right.pressed &&
    lastKey === 'right' && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right
  }

  if (platformImage && scrollOffset > platformImage.width *5 + 300 -2){
    console.log('you win')
  }

  if (player.position.y > canvas.height) {
    console.log('you lose')
    init()
  }
}
init()
animate()

addEventListener('keydown', ({ keyCode }) => {
  switch (keyCode) {
    case 81:
      console.log('left')
      keys.left.pressed = true
      lastKey = 'left'
      break
    case 83:
      console.log('down')
      break
    case 68:
      console.log('right')
      keys.right.pressed = true
      lastKey = 'right'
      break
    case 90:
      console.log('up')
      keys.up.pressed = true
      if (!player.isJumping && (Date.now() - player.lastJumpTime) > 350) {
        player.isJumping = true
        player.lastJumpTime = Date.now()
      }
      lastKey = 'up'
      break
  }
})

addEventListener('keyup', ({ keyCode }) => {
  switch (keyCode) {
    case 81:
      console.log('left')
      keys.left.pressed = false
      player.currentSprite = player.sprites.stand.left
      break
    case 83:
      console.log('down')
      break
    case 68:
      console.log('right')
      keys.right.pressed = false
      break
    case 90:
      console.log('up')
      keys.up.pressed = false
      break
  }
})
