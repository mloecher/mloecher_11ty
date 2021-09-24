---
layout: base-layout.njk 
title: N-Dimensional Laplacian Unwrapping for 4D Flow Datasets
tags: ['summary']
date: 2014-01-01
---
The phase of complex MR signal is used in a variety of imaging techniques, however when it is used quantitatively it is limited by the presence of phase wraps (when the measured value exceeds the $-\pi$ to $\pi$ dynamic range).  This work introduces a phase unwrapping algorithm for high dimensionality data that leverages a Laplacian representation to perform the operation.  Using FFTs for spectral analysis, the problem can be solved quickly and automatically, with very good unwrapping performance. 

<img src = "/images/unwrap_summary.png" width="650px"/>

[Code](https://github.com/mloecher/4dflow-lapunwrap)
[Paper](https://onlinelibrary.wiley.com/doi/10.1002/jmri.25045)