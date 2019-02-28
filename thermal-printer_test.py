#!/usr/bin/env python
# -*- coding: utf-8 -*-

import numpy

import PIL.Image
import PIL.ImageDraw
import PIL.ImageFont

from escpos.printer import Usb

p = Usb(0x0416, 0x5011, out_ep=3)
p.image('output.png')
p.text('\n\n\n\n\n\n')
