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
  const sidea = parseInt(document.getElementById('a-of-triangle').value)
  const sideb = parseInt(document.getElementById('b-of-triangle').value)
  const sidec = parseInt(document.getElementById('c-of-triangle').value)

  // process
  const area = (a * b) ÷ 2
  const perimeter = a + b + c

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm'
}
