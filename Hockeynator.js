let distance = 0
loops.forever(function () {
    if (distance >= 10 && distance <= 50) {
        music.setVolume(255)
        music.playMelody("F E D C D E F G ", 120)
    } else {
        music.stopAllSounds()
    }
    console.logValue("distancecm", distance)
    pins.A2.digitalWrite(false)
    control.waitMicros(2)
    pins.A2.digitalWrite(true)
    control.waitMicros(10)
    pins.A2.digitalWrite(false)
    distance = pins.A1.pulseIn(PulseValue.High) / 58
    light.graph(distance, 50)
})
