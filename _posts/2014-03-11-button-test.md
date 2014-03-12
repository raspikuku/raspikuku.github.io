---
layout: post
title:  "Button Test"
date:   2014-03-11 17:00:00
categories: raspi gpio
---

### Board

<img src="/images/Button-Test_Steckplatine.svg" width="800" height="600" alt="bread board" /><br />
Fritzing: [Button-Test.fzz](/images/fritzing/Button-Test.fzz)

### Code

{% highlight python %}
#!/usr/bin/env python

import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BOARD)

GPIO.setup(11, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

GPIO.setup(7, GPIO.OUT)

try:
         while True:
                 if (GPIO.input(11) ==1):
                        GPIO.output(7, 1)
                 else:
                        GPIO.output(7, 0)
except KeyboardInterrupt:
    GPIO.cleanup()
{% endhighlight %}
