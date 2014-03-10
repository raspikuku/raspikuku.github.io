---
layout: post
title:  "Charlieplexing"
date:   2014-03-09 17:00:47
categories: raspi gpio
---

Inspired by [razzpisampler.oreilly.com/ch04](http://razzpisampler.oreilly.com/ch04.html)

Se also [wikipedia.org/Charlieplexing](http://en.wikipedia.org/wiki/Charlieplexing)

### Board

<img src="/images/charlieplexing_Steckplatine.svg" width="800" height="600" alt="bread board" />
Fritzing: [charlieplexing.fzz](/images/fritzing/charlieplexing.fzz)

### Code

{% highlight python %}
#!/usr/bin/env python

import RPi.GPIO as GPIO

from time import sleep

# Define pins
pins = [18, 23, 24]

# Define LED states
pin_led_states = [
  [-1, 0, 1], # 0
  [-1, 1, 0], # 1
  [0, -1, 1], # 2
  [0, 1, -1], # 3
  [1, 0, -1], # 4
  [1, -1, 0]  # 5
]

GPIO.setmode(GPIO.BCM)

def set_pin(pin_index, pin_state):
    if pin_state == -1:
        GPIO.setup(pins[pin_index], GPIO.IN)
    else:
        GPIO.setup(pins[pin_index], GPIO.OUT)
        GPIO.output(pins[pin_index], pin_state)

def light_led(led_number):
    for pin_index, pin_state in enumerate(pin_led_states[led_number]):
        set_pin(pin_index, pin_state)

set_pin(0, -1)
set_pin(1, -1)
set_pin(2, -1)

try:
    while True:
        for led in [0, 1, 2, 3, 4, 5]:
            light_led(led)
            sleep(0.1)

except KeyboardInterrupt:
    pass

GPIO.cleanup()
{% endhighlight %}

### Video

[![Charlieplexing](http://img.youtube.com/vi/rhG9w-7aowM/0.jpg)](http://www.youtube.com/watch?v=rhG9w-7aowM)

