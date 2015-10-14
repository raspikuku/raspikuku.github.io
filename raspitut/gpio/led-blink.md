---
layout: post
title:  "LED Blink"
categories: GPIO
resource: true
---

### Plan

<div class="schaltplan">
	<img src="/images/fritzing/led-blink_Schaltplan.svg" width="800" height="600" alt="wiring plan" /><br />
</div>

### Board

<img src="/images/fritzing/led-blink_Steckplatine.svg" width="800" height="600" alt="bread board" /><br />

<p class="advert">Made with <a href="http://fritzing.org">Fritzing</a></p>

### Code

{% highlight python %}
#!/usr/bin/env python

## Import GPIO library
import RPi.GPIO as GPIO

## Import 'time' library. Allows us to use 'sleep'
import time

## Use board pin numbering
GPIO.setmode(GPIO.BOARD)

## Setup GPIO Pin 11 to OUT
GPIO.setup(11, GPIO.OUT)

try:
	# Loop forever
    while True:

		## Switch pin 11 on
		GPIO.output(11, True)

		## Wait 1 second
		time.sleep(1)

		## Switch pin 11 off
		GPIO.output(11, False)

		## Wait 1 second
		time.sleep(1)

	# Catch Ctrl-C
	except KeyboardInterrupt:
		pass

# Cleanup used GPIO ports
GPIO.cleanup()
{% endhighlight %}

### Scratch

<img src="/images/scratch/led-blink.png" alt="Scratch script" /><br />

### Download

* Fritzing: [led-blink.fzz](/images/fritzing/led-blink.fzz)
* Scratch: [led-blink.sb](/images/scratch/led-blink.sb)
