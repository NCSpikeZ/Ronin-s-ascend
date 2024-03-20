import platform from '../img/platform.png'
import platformSmallTall from '../img/platformSmallTall.png'
import hills from '../img/hills.png'
import background from '../img/background.png'
console.log(platform)
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

    this.width = 30  // taille player
    this.height = 30
    this.isJumping = false; // jump?
  }

  draw() {
    c.fillStyle = "red"; // couleur player
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw()

    // gestion jump
    if (this.isJumping && this.position.y + this.height >= canvas.height - 500) {
      this.velocity.y = -25;
      this.isJumping = false;
    }

    this.position.y += this.velocity.y
    this.position.x += this.velocity.x

    // gravité
    if (this.position.y + this.height < canvas.height) {
      this.velocity.y += gravity;
    }
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
}

function createImage(imageSrc){
  const image = new Image()
  image.src = imageSrc
  return image
}

let platformImage = createImage(platform)
let platformSmallTallImage = createImage(platformSmallTall)
let player = new Player()
// array platforms + positions
let platforms = []
let genericObjects = []

const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
}

let scrollOffset = 0

function init(){
  platformImage = createImage(platform)
  player = new Player()
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
    x:platformImage.width *5 + 620 -2, y:470, image: platformImage
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

  genericObjects.forEach(genericObjects => {
    genericObjects.draw()
  })

  platforms.forEach(platform => {
    platform.draw()
  })
  player.update()

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed
  } else if ((keys.left.pressed && player.position.x > 50)
    || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed
  } else {
    player.velocity.x = 0
  
    if (keys.right.pressed) {
      scrollOffset += player.speed
      platforms.forEach(platform => {
        platform.position.x -= player.speed
      })
      genericObjects.forEach(genericObject =>{
        genericObject.position.x -= player.speed * .66
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

  // collision avec les platforms
  platforms.forEach(platform => {
    if (
      player.position.y + player.height 
      <= platform.position.y && player.position.y + player.height
      + player.velocity.y >= platform.position.y && player.position.x 
      + player.width >= platform.position.x && player.position.x <+ platform.position.x
      + platform.width) {
      player.velocity.y = 0 
    }
  })

// victoire!
  if (scrollOffset > platformImage.width *5 + 300 -2){
    console.log('you win')
  }

//défaite
  if (player.position.y > canvas.height) {
    console.log('you lose')
    init()
  }
}
init()
animate()

addEventListener('keydown', ({ keyCode }) => {
  // console.log(keyCode)
  switch (keyCode) {
    case 81:
      console.log('left')
      keys.left.pressed = true
      break
    case 83:
      console.log('down')
      break
    case 68:
      console.log('right')
      keys.right.pressed = true
      break
    case 90:
      console.log('up')
      if (!player.isJumping && (Date.now() - player.lastJumpTime) > 300) {
        player.isJumping = true;
        player.lastJumpTime = Date.now();
      }
      break
  }
})

addEventListener('keyup', ({ keyCode }) => {
  // console.log(keyCode)
  switch (keyCode) {
    case 81:
      console.log('left')
      keys.left.pressed = false
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
      break
  }
})
