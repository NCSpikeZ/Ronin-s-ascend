function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

export function isOnTopOfPlatform({ object,platform }) {
  return (
    object.position.x + 75 < platform.position.x + platform.width &&
    object.position.x + object.width - 75 > platform.position.x &&
    object.position.y < platform.position.y + platform.height &&
    object.position.y + object.height > platform.position.y &&
    object.position.y < platform.position.y &&
    object.velocity.y >= 0
  )
}

export function collisionTop({ object1, object2 }) {
  return (
    object2.collidable && // Check if the enemy is collidable
    object1.position.x + 75 < object2.position.x + object2.width &&
    object1.position.x + object1.width - 75 > object2.position.x &&
    object1.position.y + object1.height <= object2.position.y &&
    object1.position.y + object1.height + object1.velocity.y >= object2.position.y
  )
}

export function isColliding(rect1, rect2) {
  return (
    rect1.position.x < rect2.position.x + rect2.width &&
    rect1.position.x + rect1.width > rect2.position.x &&
    rect1.position.y < rect2.position.y + rect2.height &&
    rect1.position.y + rect1.height > rect2.position.y
  );
}

export function createImage(imageSrc){
  const image = new Image()
  image.src = imageSrc
  return image
}

export function createImageAsync(imageSrc){
  return new Promise((resolve) => {
    const image = new Image()
    image.onload = () => {
      resolve(image)
    }
    image.src = imageSrc
  })
}

export function hitBottomOfPlatform({object, platform}) {
  const verticalAdjustment = - 50
  const horizontalAdjustment = 90

  return object.position.y <= platform.position.y + platform.height + verticalAdjustment
    && object.position.y - object.velocity.y >= platform.position.y + platform.height + verticalAdjustment
    && object.position.x + object.width >= platform.position.x + horizontalAdjustment
    && object.position.x <= platform.position.x + platform.width - horizontalAdjustment;
}


export function hitSideOfPlatform({object, platform}) {
  const verticalAdjustment = - 50;
  const horizontalAdjustment = - 90;

  return (
    object.position.x + object.width + object.velocity.x - platform.velocity.x >= platform.position.x - horizontalAdjustment
    && object.position.x + object.velocity.x <= platform.position.x + platform.width + horizontalAdjustment
    && object.position.y <= platform.position.y + platform.height + verticalAdjustment
    && object.position.y + object.height >= platform.position.y - verticalAdjustment
  )
}

export function objectsTouch({object1, object2}) {
  const verticalAdjustment = - 50;
  const horizontalAdjustment = - 90;

  return (
    object1.position.x + object1.width >= object2.position.x - horizontalAdjustment
    && object1.position.x <= object2.position.x + object2.width + horizontalAdjustment
    && object1.position.y + object1.height >+ object2.position.x + verticalAdjustment
    && object1.position.y <= object2.position.x + object2.height - verticalAdjustment
  )
}

