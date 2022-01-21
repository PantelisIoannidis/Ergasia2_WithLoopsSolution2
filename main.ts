let Μετρητής = 0
input.onButtonPressed(Button.A, function () {
    Μετρητής = 9
    while (Μετρητής >= 0) {
        basic.showNumber(Μετρητής)
        Μετρητής += -1
    }
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
