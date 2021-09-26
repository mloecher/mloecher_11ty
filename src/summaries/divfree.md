---
layout: base-layout.njk 
title: Divergence Minimization as a Phase Regularization in Compressed Sensing for Flow Imaging
tags: ['summary']
date: 2013-01-01
---

This work introduces the use of a divergence constrain in a compressed sensing optimization of velocity encoded MR images.  Using separate magnitude and phase regularization, the magnitude of the dataset is regularized with a traditional $\ell 1$ constraint, while the phase regularizer minimizes the $\ell 1$ of the velocity divergence.  This allows for a greater weighting, and better regularization because blood is known to be mostly incompressible, so the velocity field *should* be completely divergence free.

<img src = "/images/divfree_summary.png" class="responsive"/>

[Paper](https://onlinelibrary.wiley.com/doi/10.1002/mrm.25563)