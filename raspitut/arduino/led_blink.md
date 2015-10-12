---
layout: post
title:  "Blink an LED"
categories: Arduino
resource: true
---

### Plan

<div class="schaltplan">
	<img src="/images/fritzing/Button-Test_Schaltplan.svg" width="800" height="600" alt="wiring plan" /><br />
</div>

### Board

<img src="/images/fritzing/X_Steckplatine.svg" width="800" height="600" alt="bread board" /><br />
![bread board](/images/fritzing/X_Steckplatine.svg)

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
