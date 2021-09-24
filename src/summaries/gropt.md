---
layout: base-layout.njk 
title: Gradient Optimization Toolbox
tags: ['summary']
date: 2021-05-01
---
The Gradient Optimization Toolbox is an effort to combine all of our findings on optimizing MR gradient waveforms into an open source software package.  ADMM based methods (specifically SDMM with adaptive relaxation techniques) are used to very quickly (1-100ms) solve the problems for on the fly usage on a scanner.

<img src = "/images/gropt_summary.png" width="650px"/>

[Code](https://github.com/mloecher/gropt)
[Paper](https://onlinelibrary.wiley.com/doi/full/10.1002/mrm.28384)