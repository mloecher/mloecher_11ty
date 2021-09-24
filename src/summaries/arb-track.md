---
layout: base-layout.njk 
title: Arbitrary Point Tracking in CMR Tagged Images
tags: ['summary']
date: 2021-08-01
---
This work extends our tag tracking network in a unique way by utilizing the extra information provided by the synthetic training data.  By training the network for arbitrary point locations (rather on taglines or tagline intersections), more points can be tracked giving better spatial localization of displacements and strain.

<img src = "/images/arb_track.gif" width="650px"/>

[Code](https://github.com/mloecher/tag_tracking)
[Paper](https://link.springer.com/chapter/10.1007%2F978-3-030-78710-3_21)