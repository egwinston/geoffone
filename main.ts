input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Silly)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    # . . . #
    . # # # .
    `)
music.playMelody("A A A B C5 C5 C5 B ", 120)
TobbieII.shake_head(5)
TobbieII.dance(5)
basic.forever(function () {
    if (input.lightLevel() > 0 || input.lightLevel() < 75) {
        TobbieII.rightward()
    } else if (input.lightLevel() > 125 || input.lightLevel() < 200) {
        TobbieII.leftward()
    } else {
        TobbieII.stopturn()
    }
})
basic.forever(function () {
    if (input.magneticForce(Dimension.X) > 50) {
        TobbieII.forward()
    } else {
        TobbieII.stopwalk()
    }
})
