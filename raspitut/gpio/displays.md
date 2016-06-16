---
layout: post
title:  "Displays"
categories: GPIO
resource: true
---

# Displays

## 7 segment 4 digit display

http://articulo.mercadolibre.com.ec/MEC-407695249-display-de-reloj-para-arduino-_JM

http://www.forum-raspberrypi.de/Thread-led-4-segment-i2c-display?pid=137411#pid137411

http://www.sc2web.net/Downloads/tm1637.zip

Read the state of a button.

If the button is pressed, an LED lights up.

### Plan

<div class="schaltplan">
	<img src="/images/fritzing/Button-Test_Schaltplan.svg" width="800" height="600" alt="wiring plan" /><br />
</div>

### Board

<img src="/images/fritzing/Button-Test_Steckplatine.svg" width="800" height="600" alt="bread board" /><br />

<p class="advert">Made with <a href="http://fritzing.org">Fritzing</a></p>

### Code

```python
#!/usr/bin/env python

import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BOARD)

GPIO.setup(11, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

GPIO.setup(7, GPIO.OUT)

try:
         while True:
                 if (GPIO.input(11) == 1):
                        GPIO.output(7, 1)
                 else:
                        GPIO.output(7, 0)
except KeyboardInterrupt:
    GPIO.cleanup()
```

### Download

* Fritzing: [Button-Test.fzz](/images/fritzing/Button-Test.fzz)
