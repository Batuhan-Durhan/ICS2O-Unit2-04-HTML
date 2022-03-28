// Copyright (c) 2022 Batuhan Durhan All rights reserved
//
// Created by: Batuhan Durhan
// Created on: Batuhan Durhan
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate() {
  // input
  const sideleft = parseInt(document.getElementById('sideleft-of-triangle').value)
  const base = parseInt(document.getElementById('base-of-triangle').value)
  const sideright = parseInt(document.getElementById('sideright-of-triangle').value)
  const height = parseInt(document.getElementById('height-of-triangle').value)

  // process
  const area = (height * base) / 2
  const perimeter = sideleft + base + sideright

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm'
}
