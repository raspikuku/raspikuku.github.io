---
layout: post
title:  "2 - A button"
categories: Arduino
resource: true
---

### Plan

<div class="schaltplan">
	<img src="/images/fritzing/arduino/button_led_Schaltplan.svg" width="800" height="600" alt="wiring plan" />
</div>

### Board

<img src="/images/fritzing/arduino/button_led_Steckplatine.svg" width="584" height="409" alt="bread board" />

### Code

{% highlight c %}
int pinButton = 9;
int pinLED = 13;

void setup() {
  pinMode(pinLED, OUTPUT);
  pinMode(pinButton, INPUT);
}

void loop() {

  int buttonState = digitalRead(pinButton);

  if (buttonState == HIGH) {
    digitalWrite(pinLED, HIGH);
  }
  else {
    digitalWrite(pinLED, LOW);
  }
}
{% endhighlight %}

### Download

Fritzing: [button_led.fzz](/images/fritzing/arduino/button_led.fzz)
