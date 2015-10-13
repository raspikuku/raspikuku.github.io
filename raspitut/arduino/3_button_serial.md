---
layout: post
title:  "3 - Un Pulsador"
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

void setup() {
  Serial.begin(9600);
  pinMode(pinButton, INPUT);
}

void loop() {

  int buttonState = digitalRead(pinButton);
  Serial.println(buttonState);
  delay(10);
}
{% endhighlight %}

### Download

Fritzing: [button_led.fzz](/images/fritzing/arduino/button_led.fzz)
