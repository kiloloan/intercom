function Appel () {
    basic.clearScreen()
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    if (input.buttonIsPressed(Button.A)) {
        Communication()
    }
}
function Communication () {
    basic.showLeds(`
        . . . # #
        . # # # #
        . # . . .
        . # # # #
        . . . # #
        `)
    var_communication_etat = 1
}
let var_communication_etat = 0
let DEBUG = 0
let var_reveil_etat = 1
var_communication_etat = 0
let param_reveil_time = 100
let param_seuil_audioIn = 128
let var_reveil_time = param_reveil_time
basic.showString("T")
basic.forever(function () {
    // fonction de debugage
    if (DEBUG == 0) {
        if (var_reveil_etat == 0) {
            basic.clearScreen()
        } else if (var_reveil_time <= 0) {
            var_reveil_etat = 0
            var_reveil_time = param_reveil_time
        } else {
            var_reveil_time += -1
        }
        if (pins.analogReadPin(AnalogPin.P0) >= param_seuil_audioIn) {
            Appel()
        }
    } else {
        Appel()
    }
})
