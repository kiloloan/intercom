def Appel():
    basic.clear_screen()
    basic.show_icon(IconNames.SMALL_SQUARE)
    basic.show_icon(IconNames.SQUARE)
    if input.button_is_pressed(Button.A):
        Communication()
def Communication():
    basic.show_leds("""
        . . . # #
        . # # # #
        . # . . .
        . # # # #
        . . . # #
        """)
DEBUG = 1
var_reveil_etat = 1
param_reveil_time = 100
param_seuil_audioIn = 128
var_reveil_time = param_reveil_time
basic.show_string("T")

def on_forever():
    global var_reveil_etat, var_reveil_time
    if DEBUG == 0:
        if var_reveil_etat == 0:
            basic.clear_screen()
        elif var_reveil_time <= 0:
            var_reveil_etat = 0
            var_reveil_time = param_reveil_time
        else:
            var_reveil_time += -1
        if pins.analog_read_pin(AnalogPin.P0) >= param_seuil_audioIn:
            Appel()
    else:
        Appel()
basic.forever(on_forever)
