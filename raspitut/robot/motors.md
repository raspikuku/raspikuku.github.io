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

* Fritzing: [motors.fzz](/images/fritzing/robot/motors.fzz)
* Fritzing: [motors-leds.fzz](/images/fritzing/robot/motors-leds.fzz)
