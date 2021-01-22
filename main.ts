input.onButtonPressed(Button.A, function () {
    Ship.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    Shoot = game.createSprite(Ship.get(LedSpriteProperty.X), Ship.get(LedSpriteProperty.Y))
    Shoot.change(LedSpriteProperty.Brightness, 80)
    for (let index = 0; index < 4; index++) {
        Shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(150)
        if (Shoot.isTouching(Enemy)) {
            game.addScore(1)
            Enemy.delete()
            Shoot.delete()
        }
    }
    if (Shoot.get(LedSpriteProperty.Y) <= 0) {
        Shoot.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    Ship.move(1)
})
let Enemy: game.LedSprite = null
let Shoot: game.LedSprite = null
let Ship: game.LedSprite = null
Ship = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    Enemy = game.createSprite(randint(0, 4), 0)
    Enemy.set(LedSpriteProperty.Brightness, 150)
    basic.pause(100)
    Enemy.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        Enemy.move(1)
        basic.pause(1000)
        if (Enemy.isTouching(Ship)) {
            game.gameOver()
        }
    }
    if (Enemy.isTouchingEdge()) {
        Enemy.delete()
    }
})
