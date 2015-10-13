---
layout: post
title:  "1 - Serial Hola"
categories: Arduino
resource: true
---

### Code

{% highlight c %}
void setup() {
  Serial.begin(9600);
}

void loop() {
 
  Serial.println("Hello world!");
  
  while (true) {
  }
}
{% endhighlight %}
