---
layout: base-layout.njk 
title: Nonconvex Optimization for Multidirectional and Multi-Venc Flow Encoding
tags: ['summary']
date: 2018-01-01
---
This work formulates the low-Venc phase unwrapping problem as a nonconvex optimization, allowing for better and more accurate combinations of the encoding data.  It also leverages the magnitude data as a weighting vector in the optimization to "ignore" velocity encodes with too much intravoxel dephasing, or other errors.

<img src = "/images/velsolve_summary.png" width="650px"/>

[Code](https://github.com/mloecher/nc_vel_solver)
[Paper](https://onlinelibrary.wiley.com/doi/10.1002/mrm.26997)