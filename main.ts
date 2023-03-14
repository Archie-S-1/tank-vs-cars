controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . 2 4 4 4 2 . . . . . . 
        . . . . 2 2 4 5 4 4 2 . . . . . 
        . . . . 2 . 4 5 . 4 2 2 . . . . 
        . . . . . . . . . . 1 . . . . . 
        `, Tank, 0, -200)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 200)
    sprites.destroy(sprite)
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 200)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
})
let Car_2: Sprite = null
let Car: Sprite = null
let Car_3: Sprite = null
let projectile: Sprite = null
let Tank: Sprite = null
scene.setBackgroundImage(img`
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbcbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbcbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbcbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbcbbbbbbbbbb11111bbbbbbbbbbbbbbcbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbccbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbcbbbbbbbbbb11111bbbbbbbbbbbbbcbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbcbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbcbbbbbbbbbbb11111bbbbbbbbbbbcbbbbbbbbbb11111bbbbbbbbbbbbbbcbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbcbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbcbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbcbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbccbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbcbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbcbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbccbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbcbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbccccbbbbbb77777777777777
    777777777bbbbbbbbbbbbcccccbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11dddbbbbbbbbbbbbbbbbbbbbbb111ddbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbb1dddbbbbbbbbbbbbbbbbbbbbbbbb1ddddbbbbbbbbbbbbbbbbbbbbb111ddbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbb1dddbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbdd111bbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbddd11bbbbbbbbbbbbbbbbbbbbbbbddd11bbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbdd11bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbdd111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbcbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbcbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbcccbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbcbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbcbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbcbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11dddbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11dddbbbbbbbbbbbbbbbbbbbbbb1ddbbbbbbbbbbbbbbbbbbbbbbbbb11dddbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbb1ddbbbbbbbbbbbbbbbbbbbbbbb11dddbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbdd11bbbbbbbbbbbbbbbbbbbbbbbdd11bbbbbbbbbcbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbdd111bbbbbbbbbbbbbbbbbbbbbbdd111bbbbbbbbbcbbbbbbbbbbbbbbdd11bbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbcbbbbbbbbbbbbbdd111bbbbbbbbbbbbbbbbbbbbbddd11bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbcbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbcbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbcbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbcbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbcbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbcbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbcbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbcbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbcbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbcbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbcbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbcbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbcbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbcbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbcbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbcbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbcbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbcbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbcbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbcbbbbbb77777777777777
    777777777bbbbbbbbbbcbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbcbbbbbbb77777777777777
    777777777bbbbbbbbbbcbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbcbbbbbbbbbbbbb111ddbbbbbbbbbbbbbbbbbbbbbb111ddbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbcbbbbbbbbbbbbbb1dddbbbbbbbbbbbbbbbbbbbbbbb1dddbbbbbbbbbbbbbbbbbbbbbbbb111ddbbbbbbbbbbbbbbbbbbbbb111ddbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbccbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbb1dddbbbbbbbbbbbbbbbbbbbbbb11ddbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbddd1bbbbbbbbbbbbbbbbbbbbbbbdd11bbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbdd111bbbbbbbbbbbbbbbbbbbbbbdd111bbbbbbbbbbbbbbbbbbbbbbbddd11bbbbbbbbbbbbbbbbbbbbbddd11bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbd1111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbcbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbcbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbcbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbcbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbcbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbcbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbcbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbcbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbcbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbcbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb1111dbbbbbbbbbbbbbbbbbbbbb111ddbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb111ddbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11dddbbbbbbbbbbbbbbbbbbbbb11ddbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb1dddbbbbbbbbbbbbbbbbbbbbbbb11dddbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbdd111bbbbbbbbbbbbbbbbbbbbbbdd111bbbbbbbbbbbbbbbbbbbbbbbdd111bbbbbbbbbbbbbbbbbbbbbbdd11bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbdd111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbdd111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbcbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbcbccbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbccbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbcbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbcbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbcbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbcbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbcbbbbbbbb11111bbbbbbbbbbbbbbbbbbbcbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbccbbbbbbb11111bbbbbbbbbbbbbbbbbbbcbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb1111dbbbbbbbbbbbbbbbbbbbbbb11dddbbbbbbbbbbbbbbbbbbbbbbb11dddbbbbbbbbbbbbbcbbbbbbb11111bbbbbbbbbbbbbbbbbbccbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbb11dddbbbbbbbbbbbbbbbbbbbbbb1ddbbbbbbbbbbbbbbbbbbbbbbbbb1ddbbbbbbbbbbbbbbbbbbbbbbb11dddbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    777777777bbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbdddd1bbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777
    `)
Tank = sprites.create(img`
    .....................
    .....................
    .....................
    .......6666666.......
    .......6666666.......
    .......6666666.......
    .......6666666.......
    .......6666666.......
    .........666.........
    .........666.........
    .........666.........
    .........666.........
    .........666.........
    .........666.........
    .........666.........
    ffff.....666.....ffff
    ffff.....666.....ffff
    dddd.....666.....dddd
    fff777666666666777fff
    fff776666666666677fff
    fff776666666666677fff
    fff766666888666667fff
    fff766688888886667fff
    ddd766888888888667ddd
    fff766888888888667fff
    fff766888888888667fff
    fff766888888888667fff
    fff766888888888667fff
    ddd766888888888667ddd
    fff766888888888667fff
    fff766888888888667fff
    fff766688888886667fff
    fff766666888866667fff
    ddd776666666666677ddd
    fff777666666666777fff
    fff777777777777777fff
    ffff7777777777777ffff
    ffff7777777777777ffff
    dddd..7777777777.dddd
    ffff.............ffff
    ffff.............ffff
    .....................
    .....................
    `, SpriteKind.Player)
controller.moveSprite(Tank, 175, 175)
Tank.setStayInScreen(true)
info.setLife(3)
Tank.setPosition(75, 117)
game.onUpdateInterval(5000, function () {
    Car_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . 2 2 4 4 2 2 2 2 . . . 
        . . . . . c 4 2 2 2 2 2 c . . . 
        . . . . 2 c 4 2 2 2 2 2 c 2 . . 
        . . . e 2 c 4 2 2 2 2 2 c 2 e . 
        . . . f 2 c 4 2 2 2 2 2 c 2 f . 
        . . . f e c 2 2 2 2 2 2 c e f . 
        . . . f 2 c 2 b b b b 2 c 2 f . 
        . . . e 2 2 b c c c c b 2 2 e . 
        . . . e e b c c c c c c b e e . 
        . . . f e 4 4 4 4 4 4 4 4 e f . 
        . . . f e d 2 2 2 2 2 2 d e f . 
        . . . . 2 d d 2 2 2 2 d d 2 f . 
        . . . . f 2 d 2 2 2 2 d 2 f . . 
        . . . . . e 2 2 2 2 2 2 e . . . 
        `, SpriteKind.Enemy)
    Car_3.setVelocity(0, 50)
    Car_3.setPosition(randint(86, 129), 0)
    Car_3.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(2000, function () {
    Car = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 6 6 . . . . 
        . . . . . 6 6 9 9 6 6 6 6 . . . 
        . . . . . c 9 6 6 6 6 6 c . . . 
        . . . . 6 c 9 6 6 6 6 6 c 6 . . 
        . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
        . . . f 6 c 9 6 6 6 6 6 c 6 f . 
        . . . f 8 c 6 6 6 6 6 6 c 8 f . 
        . . . f 6 c 6 b b b b 6 c 6 f . 
        . . . 8 6 6 b c c c c b 6 6 8 . 
        . . . 8 8 b c c c c c c b 8 8 . 
        . . . f 8 9 9 9 9 9 9 9 9 8 f . 
        . . . f 8 d 6 6 6 6 6 6 d 8 f . 
        . . . . 6 d d 6 6 6 6 d d 6 f . 
        . . . . f 6 d 6 6 6 6 d 6 f . . 
        . . . . . 8 6 6 6 6 6 6 8 . . . 
        `, SpriteKind.Enemy)
    Car.setVelocity(0, 100)
    Car.setPosition(randint(13, 43), 0)
    Car.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(3000, function () {
    Car_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 3 3 . . . . 
        . . . . . 3 3 d d 3 3 3 3 . . . 
        . . . . . c d 3 3 3 3 3 c . . . 
        . . . . 3 c d 3 3 3 3 3 c 3 . . 
        . . . a 3 c d 3 3 3 3 3 c 3 a . 
        . . . f 3 c d 3 3 3 3 3 c 3 f . 
        . . . f a c 3 3 3 3 3 3 c a f . 
        . . . f 3 c 3 b b b b 3 c 3 f . 
        . . . a 3 3 b c c c c b 3 3 a . 
        . . . a a b c c c c c c b a a . 
        . . . f a d d d d d d d d a f . 
        . . . f a d 3 3 3 3 3 3 d a f . 
        . . . . 3 d d 3 3 3 3 d d 3 f . 
        . . . . f 3 d 3 3 3 3 d 3 f . . 
        . . . . . a 3 3 3 3 3 3 a . . . 
        `, SpriteKind.Enemy)
    Car_2.setVelocity(0, 75)
    Car_2.setPosition(randint(43, 86), 0)
    Car_2.setFlag(SpriteFlag.AutoDestroy, true)
})
