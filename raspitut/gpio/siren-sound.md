---
layout: post
title:  "Siren Sound"
categories: GPIO
resource: true
---

This will produce a siren sound.

### Plan

<div class="schaltplan">
	<img src="/images/fritzing/speaker_Schaltplan.svg" width="400" alt="wiring plan" /><br />
</div>

### Board

<img src="/images/fritzing/speaker_Steckplatine.svg" width="800" height="600" alt="bread board" />

<p class="advert">Made with <a href="http://fritzing.org">Fritzing</a></p>

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

Please raise your volume =;)

<iframe width="420" height="315" src="//www.youtube.com/embed/jep-qCn5bCE" frameborder="0" allowfullscreen></iframe>

### Download

* Fritzing: [speaker.fzz](/images/fritzing/speaker.fzz)
