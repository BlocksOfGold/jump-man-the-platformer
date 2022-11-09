namespace SpriteKind {
    export const spawner = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.slash)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    Level += 1
    Level_Start()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    Level += 1
    Level_Start()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.spawner, function (sprite, otherSprite) {
    otherSprite.destroy()
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f . f f f f . . . 
        . . . . f 1 1 f . f 1 1 f . . . 
        . . . . f 1 1 f . f 1 1 f . . . 
        . . . f f f f f f f f f f . . . 
        . . f 5 5 5 5 5 f 5 5 5 5 f . . 
        . . f 5 5 5 5 5 f 5 5 5 5 f . . 
        . . f f 5 5 5 5 f 5 5 5 f f . . 
        . . f 5 5 5 5 5 f 5 5 5 5 f . . 
        . . f 5 5 5 5 5 f 5 5 5 5 f . . 
        . . . f f f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f 5 5 5 5 5 f 5 5 5 5 f . . 
        . . f 5 5 5 5 5 f 5 5 5 5 f . . 
        . . f f 5 5 5 5 f 5 5 5 f f . . 
        . . f 5 5 5 5 5 f 5 5 5 5 f . . 
        . . f 5 5 5 5 5 f 5 5 5 5 f . . 
        . . . f f f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    true
    )
    bee.setPosition(jump_man.x + 55, jump_man.y - 55)
    bee.follow(jump_man, 50)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump_man.vy == 0) {
        jump_man.vy = -150
    }
})
function Level_Start () {
    if (Level == 1) {
        game.showLongText("    1-1", DialogLayout.Bottom)
        tiles.placeOnRandomTile(jump_man, assets.tile`myTile4`)
        info.setLife(5)
        tiles.setCurrentTilemap(tilemap`level1`)
        scene.cameraFollowSprite(jump_man)
        for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
            coin = sprites.create(img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `, SpriteKind.Food)
            animation.runImageAnimation(
            coin,
            [img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `,img`
                . . b b b . . . 
                . b 5 5 5 b . . 
                b 5 d 3 d 5 b . 
                b 5 3 5 1 5 b . 
                c 5 3 5 1 d c . 
                c 5 d 1 d d c . 
                . f d d d f . . 
                . . f f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 d 1 5 b . 
                . b 5 3 1 5 b . 
                . c 5 3 1 d c . 
                . c 5 1 d d c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . . b 1 1 b . . 
                . . b 5 5 b . . 
                . . b d d b . . 
                . . c d d c . . 
                . . c 3 3 c . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 1 d 5 b . 
                . b 5 1 3 5 b . 
                . c d 1 3 5 c . 
                . c d d 1 5 c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b b . . 
                . . b 5 5 5 b . 
                . b 5 d 3 d 5 b 
                . b 5 1 5 3 5 b 
                . c d 1 5 3 5 c 
                . c d d 1 d 5 c 
                . . f d d d f . 
                . . . f f f . . 
                `],
            150,
            true
            )
            tiles.placeOnTile(coin, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
            flower = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . 3 5 . . 5 3 . . . . . . 
                . . . . 3 3 5 5 3 3 . . . . . . 
                . . . . 3 3 3 3 3 3 . . . . . . 
                . . . . 3 3 3 3 3 3 . . . . . . 
                . . . . . 3 3 3 3 . . . . . . . 
                . . . . . . 7 . 7 . . . . . . . 
                . . . . 7 . 7 7 7 7 . . . . . . 
                . . . 7 7 7 7 . 7 . . . . . . . 
                . . . . 7 . 7 . . . . . . . . . 
                . . . . . . 7 . . . . . . . . . 
                . . 7 7 . . 7 . . 7 7 . . . . . 
                . . 6 7 7 7 7 7 7 7 6 . . . . . 
                . . . 6 7 7 7 7 7 6 . . . . . . 
                . . . . 6 7 7 7 8 . . . . . . . 
                . . . . . 8 7 8 . . . . . . . . 
                `, SpriteKind.spawner)
            tiles.placeOnTile(flower, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
    }
    if (Level == 2) {
        game.showLongText("1-2", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level5`)
        tiles.placeOnRandomTile(jump_man, assets.tile`myTile4`)
        for (let value of sprites.allOfKind(SpriteKind.spawner)) {
            value.destroy()
        }
        for (let value of sprites.allOfKind(SpriteKind.Food)) {
            value.destroy()
        }
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.destroy()
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
            flower = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . 3 5 . . 5 3 . . . . . . 
                . . . . 3 3 5 5 3 3 . . . . . . 
                . . . . 3 3 3 3 3 3 . . . . . . 
                . . . . 3 3 3 3 3 3 . . . . . . 
                . . . . . 3 3 3 3 . . . . . . . 
                . . . . . . 7 . 7 . . . . . . . 
                . . . . 7 . 7 7 7 7 . . . . . . 
                . . . 7 7 7 7 . 7 . . . . . . . 
                . . . . 7 . 7 . . . . . . . . . 
                . . . . . . 7 . . . . . . . . . 
                . . 7 7 . . 7 . . 7 7 . . . . . 
                . . 6 7 7 7 7 7 7 7 6 . . . . . 
                . . . 6 7 7 7 7 7 6 . . . . . . 
                . . . . 6 7 7 7 8 . . . . . . . 
                . . . . . 8 7 8 . . . . . . . . 
                `, SpriteKind.spawner)
            tiles.placeOnTile(flower, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
            coin = sprites.create(img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `, SpriteKind.Food)
            animation.runImageAnimation(
            coin,
            [img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `,img`
                . . b b b . . . 
                . b 5 5 5 b . . 
                b 5 d 3 d 5 b . 
                b 5 3 5 1 5 b . 
                c 5 3 5 1 d c . 
                c 5 d 1 d d c . 
                . f d d d f . . 
                . . f f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 d 1 5 b . 
                . b 5 3 1 5 b . 
                . c 5 3 1 d c . 
                . c 5 1 d d c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . . b 1 1 b . . 
                . . b 5 5 b . . 
                . . b d d b . . 
                . . c d d c . . 
                . . c 3 3 c . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 1 d 5 b . 
                . b 5 1 3 5 b . 
                . c d 1 3 5 c . 
                . c d d 1 5 c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b b . . 
                . . b 5 5 5 b . 
                . b 5 d 3 d 5 b 
                . b 5 1 5 3 5 b 
                . c d 1 5 3 5 c 
                . c d d 1 d 5 c 
                . . f d d d f . 
                . . . f f f . . 
                `],
            150,
            true
            )
            tiles.placeOnTile(coin, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
    }
    if (Level == 3) {
        game.showLongText("1-3", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level7`)
        tiles.placeOnRandomTile(jump_man, assets.tile`myTile4`)
        for (let value of sprites.allOfKind(SpriteKind.Food)) {
            value.destroy()
        }
        for (let value of sprites.allOfKind(SpriteKind.spawner)) {
            value.destroy()
        }
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.destroy()
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
            flower = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . 3 5 . . 5 3 . . . . . . 
                . . . . 3 3 5 5 3 3 . . . . . . 
                . . . . 3 3 3 3 3 3 . . . . . . 
                . . . . 3 3 3 3 3 3 . . . . . . 
                . . . . . 3 3 3 3 . . . . . . . 
                . . . . . . 7 . 7 . . . . . . . 
                . . . . 7 . 7 7 7 7 . . . . . . 
                . . . 7 7 7 7 . 7 . . . . . . . 
                . . . . 7 . 7 . . . . . . . . . 
                . . . . . . 7 . . . . . . . . . 
                . . 7 7 . . 7 . . 7 7 . . . . . 
                . . 6 7 7 7 7 7 7 7 6 . . . . . 
                . . . 6 7 7 7 7 7 6 . . . . . . 
                . . . . 6 7 7 7 8 . . . . . . . 
                . . . . . 8 7 8 . . . . . . . . 
                `, SpriteKind.spawner)
            tiles.placeOnTile(flower, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
            coin = sprites.create(img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `, SpriteKind.Food)
            animation.runImageAnimation(
            coin,
            [img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `,img`
                . . b b b . . . 
                . b 5 5 5 b . . 
                b 5 d 3 d 5 b . 
                b 5 3 5 1 5 b . 
                c 5 3 5 1 d c . 
                c 5 d 1 d d c . 
                . f d d d f . . 
                . . f f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 d 1 5 b . 
                . b 5 3 1 5 b . 
                . c 5 3 1 d c . 
                . c 5 1 d d c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . . b 1 1 b . . 
                . . b 5 5 b . . 
                . . b d d b . . 
                . . c d d c . . 
                . . c 3 3 c . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 1 d 5 b . 
                . b 5 1 3 5 b . 
                . c d 1 3 5 c . 
                . c d d 1 5 c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b b . . 
                . . b 5 5 5 b . 
                . b 5 d 3 d 5 b 
                . b 5 1 5 3 5 b 
                . c d 1 5 3 5 c 
                . c d d 1 d 5 c 
                . . f d d d f . 
                . . . f f f . . 
                `],
            150,
            true
            )
            tiles.placeOnTile(coin, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
    }
    if (Level == 4) {
        game.over(true)
    }
}
info.onLifeZero(function () {
    game.over(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.halo, 500)
    if (jump_man.y < bee.y) {
        info.changeScoreBy(3)
        jump_man.vy = -150
    } else {
        info.changeLifeBy(-1)
        tiles.placeOnRandomTile(jump_man, assets.tile`myTile4`)
    }
})
let flower: Sprite = null
let coin: Sprite = null
let bee: Sprite = null
let Level = 0
let jump_man: Sprite = null
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...........................11...................................................................................................................................
    .......................11111111.................................................................................................1111111.........................
    ......................11111111111......1111..................................................................................11111111111........................
    .....................11111111111111....1111111..............................................................................111111111111111.....................
    ....................1111111111111111.1111111111111.........................................................................11111111111111111....................
    ..................111111111111111111111111111111111.................................11.....................................111111111111111111..11...............
    ..............11111111111111111111111111111111111111...............................1111......1111111......................111111111111111111111111..............
    ............1111111111111111111111111111111111111111...11.........................111111..11111111111.....................11111111111111111111111111............
    ..........11111111111111111111111111111111111111111111111........................1111111.1111111111111....................111111111111111111111111111...........
    .........1111111111111111111111111111111111111111111111111.....................1111111111111111111111111111................11111111111111111111111111...........
    ..........111111111111111111111111111111111111111111111111.....................111111111111111111111111111111...............1111111111111111111111111...........
    ...........111111111111111111111111111111111111111111111111...................1111111111111111111111111111111..................11111111111111111111111..........
    ...........11.....11111111111111111111111111111111111111111...................11111111111111111111111111111111..................111111111111111111111111........
    .........................1111111111111111111111111111111111....................111111111111111111111111111111......................1111111111111111111111.......
    ........................................1111111111111111111....................111111111111111111111111111111..........................1111111111111111111......
    ..................................................111111111....................111111111111111111111111111111................................1111111111111......
    ..............................................................................11..................................................................11111111......
    .............................................................................................................................666......................1111......
    ............................................................................................................................6666................................
    ............................................................................................................................6666................................
    ...........................................................................................................................666666...............................
    ..........................................................................................................................6666666...............................
    ..........................................................................................................................6666666...............................
    .........................................................................................................................666666666..............................
    ........................................................................................................................6666666666..............................
    ........................................................................................................................6666666666..............................
    ......................................................................................................................666666666666..............................
    ......................................................................6...............................................666666666666..............................
    ......................................................................66.............................................66666666666666.............................
    ......................................................................66.............................................66666666666666.............................
    .....................................................................6666............................................666666666666666............................
    .....................................................................6666............................................666666666666666............................
    ....................................................................666666..........................................66666666666666666...........................
    ........................6666666.....................................666666..........................................66666666666666666...........................
    .....................6666666666666.................................6666666.........................................666666666666666666...........................
    ..................666666666666666666..............................66666666.........................................666666666666666666...........................
    .................66666666666666666666.............................666666666........................................6666666666666666666..........................
    ................66666666666666666666666..........................6666666666.......................................666666666666666666666.........................
    ...............666666666666666666666666.........................666666666666.....................................6666666666666666666666.........................
    ..............66666666666666666666666666........................666666666666.....6666............................666666666666666666666666.......................
    .............6666666666666666666666666666......................66666666666666..6666666..........................6666666666666666666666666.......................
    .............666666666666666666666666666666...................666666666666666666666666.........................666666666666666666666666666......................
    ............666666666666666666666666666666666................66666666666666666666666666.......................66666666666666666666666666666.....................
    ...........666666666666666666666666666666666666..............6666666666666666666666666666.....................666666666666666666666666666666....................
    ...........66666666666666666666666666666666666666...........66666666666666666666666666666666.................66666666666666666666666666666666...................
    ..........6666666666666666666666666666666666666666.........666666666666666666666666666666666666.............6666666666666666666666666666666666..................
    .........6666666666666666666666666666666666666666666......666666666666666666666666666666666666666..........66666666666666666666666666666666666..................
    ......6666666666666666666666666666666666666666666666666...66666666666666666666666666666666666666666........6666666666666666666666666666666666666................
    ....66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666.66666666666666666666666666666666666666................
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666..............
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666.............
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666.........
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666....
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666....
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666...
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666...
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666..
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666..
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666.
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
jump_man = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(jump_man, 100, 0)
Level = 1
Level_Start()
game.onUpdate(function () {
    jump_man.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    if (jump_man.vy < 0) {
        jump_man.setImage(img`
            ......ffff......
            ....fff22fff....
            ...fff2222fff...
            ..fffeeeeeefff..
            ..ffe222222eef..
            ..fe2ffffff2ef..
            ..ffffeeeeffff..
            .ffefbf44fbfeff.
            .fee41fddf14eef.
            ..feeddddddeeff.
            ...fee4444eef...
            ....f222222f4e..
            ....f222222fd4..
            ..e4f222222f44..
            ..4df445544f....
            ..44f222222f....
            .....ffffff.....
            .....ffffff.....
            .....ff..ff.....
            ................
            .....1.1.1.1....
            .....1.1.1.1....
            .....1.1.1.1....
            ................
            ................
            `)
    } else {
    	
    }
    if (jump_man.isHittingTile(CollisionDirection.Left) || jump_man.isHittingTile(CollisionDirection.Right)) {
        jump_man.vy = 0
        jump_man.ay = 0
    } else {
        jump_man.ay = 300
    }
    if (jump_man.isHittingTile(CollisionDirection.Left)) {
        jump_man.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e 4 f b 4 4 f b f e f f . 
            . f e e 4 f 1 d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f . . . . 
            . . 4 d f 2 2 2 2 2 2 f . . . . 
            . . 4 4 f 4 4 5 5 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    } else if (jump_man.isHittingTile(CollisionDirection.Right)) {
        jump_man.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 b f 4 e f f . 
            . f e e 4 1 f d d 1 f 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . . . f 2 2 2 2 2 2 f 4 e . . 
            . . . . f 2 2 2 2 2 2 f d 4 . . 
            . . . . f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    }
})
