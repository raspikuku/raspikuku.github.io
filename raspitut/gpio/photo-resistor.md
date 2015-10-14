---
layout: post
title:  "Photo Resistor"
categories: GPIO
resource: true
---

### Plan

<div class="schaltplan">
	<img src="/images/fritzing/photo-resistor_Schaltplan.svg" width="800" height="600" alt="wiring plan" /><br />
</div>

### Board

![bread board](/images/fritzing/photo-resistor_Steckplatine.svg)

<p class="advert">Made with <a href="http://fritzing.org">Fritzing</a></p>

### Code

{% highlight python %}
#!/usr/bin/env python

# http://learn.adafruit.com/basic-resistor-sensor-reading-on-raspberry-pi

# Example for RC timing reading for Raspberry Pi
# Must be used with GPIO 0.3.1a or later - earlier verions
# are not fast enough!

import RPi.GPIO as GPIO
from time import sleep

GPIO.setmode(GPIO.BCM)
GPIO.setup(25, GPIO.OUT)

def RCtime (RCpin):
        reading = 0

        ### Charge
        GPIO.setup(RCpin, GPIO.OUT)
        GPIO.output(RCpin, GPIO.LOW)
        sleep(0.1)

		### Discharge
        GPIO.setup(RCpin, GPIO.IN)

        # This takes about 1 millisecond per loop cycle
        while (GPIO.input(RCpin) == GPIO.LOW):
                reading += 1

        return reading

try:
    while True:
        # Read RC timing using pin #18
        val = RCtime(18)

        print val
        if val > 1000:
            print("Lights ON")
            GPIO.output(25, GPIO.HIGH)
        else:
            print("OFF")
            GPIO.output(25, GPIO.LOW)

        # Do a reading every three seconds
        sleep(3)

except KeyboardInterrupt:
    pass

GPIO.cleanup()
{% endhighlight %}

### Scratch

TBD

### Download

* Fritzing: [photo-resistor.fzz](/images/fritzing/photo-resistor.fzz)
