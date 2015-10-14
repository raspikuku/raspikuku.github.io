---
layout: post
title:  "Button Test"
categories: GPIO
resource: true
---

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

{% highlight python %}
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
{% endhighlight %}

### Download

* Fritzing: [Button-Test.fzz](/images/fritzing/Button-Test.fzz)
