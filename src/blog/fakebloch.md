---
layout: base-layout.njk 
title: FakeBloch
date: 2014-02-15T21:59:46-07:00
tags: ['blog']
---

This project was conceived purely as a pun on George Michael's software from season 4 of Arrested Development 

<img src = "/images/maebe.gif" width="300px"/>

In 1946 Felix Bloch introduced what are now known as the [Bloch equations](https://en.wikipedia.org/wiki/Bloch_equations), for which he was awarded the Nobel prize in Physics in 1952.  These equations describe (more or less) every single phenomenon used to create MR images.  Understanding the nature of these are important in understanding how MRI works, as well as testing and researching new ideas in the field.

The idea behind the website was to create an entirely web based MRI simulator.  It can be found at [www.fakebloch.com](http://www.fakebloch.com).

## What’s there ##

The 3D plot on the website represents the magnetization of a bunch of protons in a magnetic field.  The different spins have different levels of off-resonance.  On the right of the page, you can see that two rf pulses are being played at 90-degrees, and then 180 degrees.  This represents a classic NMR technique called a [spin echo]( https://en.wikipedia.org/wiki/Spin_echo).  T1 decay is also included.

It is not a stored animation, the magnetization over time is being solved for in real-time in javascript on the client computer.  The code keeps a list of magnetization vectors and calculates their change in time given the B field in the pulse sequence.

## Future ##

The simulator should probably be doing a better form of approximation for the ODE, as right now it is only using the Euler method.  Alternatively, it could be re-written to use rotation matrices instead of the true Bloch equations, which would probably make the results more precise, but not as robust to weird B fields.

After implementing the simulator itself, I got pretty bored with the idea of frontend development for all of the future plans, so it’s unlikely to become fully functional any time soon.  Though if I ever do more teaching of MRI lectures I could see rewriting this into a lesson or homework aid.   It would be cool to able to modify the pulse sequence and see the results in real-time, to change the distribution of spins.

## Code ##

The code can be found on github here: [github.com/mloecher/fakebloch](https://github.com/mloecher/fakebloch)

And it is hosted at [www.fakebloch.com](http://www.fakebloch.com).

