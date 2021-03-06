---
layout: post
title:  "Motors"
categories: Robot
resource: true
---

Motor connection and test.

### Board

<img src="/images/fritzing/robot/motors_Steckplatine.svg" width="800" height="600" alt="bread board" />
<img src="/images/fritzing/robot/motors_Steckplatine.png" width="800" height="600" alt="bread board" />

<p class="advert">Made with <a href="http://fritzing.org">Fritzing</a></p>

### Code

```python
#!/usr/bin/env python

import RPi.GPIO as gpio
import time

gpio.setmode(gpio.BOARD)

PIN_IN1 = 16
PIN_IN2 = 15
PIN_IN3 = 13
PIN_IN4 = 11

gpio.setup(PIN_IN1, gpio.OUT)
gpio.setup(PIN_IN2, gpio.OUT)
gpio.setup(PIN_IN3, gpio.OUT)
gpio.setup(PIN_IN4, gpio.OUT)

def adelante(x):
    gpio.output(PIN_IN1, False)
    gpio.output(PIN_IN2, True)
    gpio.output(PIN_IN3, False)
    gpio.output(PIN_IN4, True)

    time.sleep(x)

def atras(x):
    gpio.output(PIN_IN1, True)
    gpio.output(PIN_IN2, False)
    gpio.output(PIN_IN3, True)
    gpio.output(PIN_IN4, False)

    time.sleep(x)

def left(x):
    gpio.output(PIN_IN1, False)
    gpio.output(PIN_IN2, True)
    gpio.output(PIN_IN3, True)
    gpio.output(PIN_IN4, False)

    time.sleep(x)

def right(x):
    gpio.output(PIN_IN1, True)
    gpio.output(PIN_IN2, False)
    gpio.output(PIN_IN3, False)
    gpio.output(PIN_IN4, True)

    time.sleep(x)

print 'Adelante'
adelante(2)
print 'Atras'
atras(2)
print 'Left'
left(2)
print 'Right'
right(2)

gpio.cleanup()

print
print 'finished =;)'
```

### Download

* Fritzing: [motors.fzz](/images/fritzing/robot/motors.fzz)
* Fritzing: [motors-leds.fzz](/images/fritzing/robot/motors-leds.fzz)
