---
layout: base-layout.njk 
title: CMR Tag Tracking with Machine Learning
tags: ['summary']
date: 2021-01-01
---
This work uses a deep learning neural network to track the motion of the heart in grid-tagged cardiac MR images.  To train the network, only synthetic data was used from a custom designed simulation framework that can easily make millions of training datasets with randomized motion patterns.  The network is seen to track the motion with high accuracy in volunteers and patients, with good cardiac strain measurements 

<img src = "/images/tag_patch_gen.gif" class="responsive"/>

[Code](https://github.com/mloecher/tag_tracking)
[Paper](https://www.sciencedirect.com/science/article/abs/pii/S1361841521002681)