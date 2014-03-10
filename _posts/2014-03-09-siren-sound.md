---
layout: post
title:  "Siren Sound"
date:   2014-03-09 18:00:00
categories: raspi gpio
---

This will produce a siren sound.

### Board

<img src="/images/speaker_Steckplatine.svg" width="800" height="600" alt="bread board" />
Fritzing: [speaker.fzz](/images/fritzing/speaker.fzz)

### Code

{% highlight python %}
#!/usr/bin/env python

import time
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BOARD)
GPIO.setup(12, GPIO.OUT)

# channel=12 frequency=700Hz
p = GPIO.PWM(12, 700)
p.start(50)

try:
    while True:

		# Frequency is set from 300 Mhz to 700 Mhz,
		# 5 steps, with a pause of 0.002 seconds in between.
		# PLEASE play with those values ;)

        for freq in range(300, 700, 5):
            p.ChangeFrequency(freq)
            time.sleep(0.002)

        for freq in range(700, 300, -5):
            p.ChangeFrequency(freq)
            time.sleep(0.002)

except KeyboardInterrupt:
    pass

p.stop()

GPIO.cleanup()
{% endhighlight %}

### Video

[![Siren sound](http://img.youtube.com/vi/jep-qCn5bCE/0.jpg)](http://www.youtube.com/watch?v=jep-qCn5bCE)

