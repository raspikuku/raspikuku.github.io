---
layout: post
title:  "Blink an LED"
categories: Arduino
resource: true
---

### Plan

<div class="schaltplan">
	<img src="/images/fritzing/arduino/led_blink_Schaltplan.svg" width="800" height="600" alt="wiring plan" />
</div>

### Board

<img src="/images/fritzing/arduino/led_blink_Steckplatine.svg" width="584" height="409" alt="bread board" />

### Code

{% highlight c %}
int pinLED = 13;

void setup() {
  pinMode(pinLED, OUTPUT);
}

void loop() {
  digitalWrite(pinLED, HIGH);
  delay(1000);

  digitalWrite(pinLED, LOW);
  delay(1000);
}
{% endhighlight %}

### Download

Fritzing: [X.fzz](/images/fritzing/X.fzz)
