import type { Matrix } from "./_types.ts";

export function sumRows(m: Matrix): number[] {
  const sum = new Array(m.length).fill(0);
  let i = 0;
  while (i < m.length) {
    let j = 0;
    while (j < m[i].length) {
      sum[i] += m[i][j];
      j += 1;
    }
    i += 1;
  }
  return sum;
}

export function sumCols(m: Matrix): number[] {
  const sum = new Array(m[0].length).fill(0);
  let i = 0;
  while (i < m.length) {
    let j = 0;
    while (j < m[i].length) {
      sum[j] += m[i][j];
      j += 1;
    }
    i += 1;
  }
  return sum;
}

export function sumAll(m: Matrix): number {
  let sum = 0;
  let i = 0;
  while (i < m.length) {
    let j = 0;
    while (j < m[i].length) {
      sum += m[i][j];
      j += 1;
    }
    i += 1;
  }
  return sum;
}



export function productRows(m: Matrix): number[] {
  const product = new Array(m.length).fill(1);
  let i = 0;
  while (i < m.length) {
    let j = 0;
    while (j < m[i].length) {
      product[i] *= m[i][j];
      j += 1;
    }
    i += 1;
  }
  return product;
}

export function productCols(m: Matrix): number[] {
  const product = new Array(m[0].length).fill(1);
  let i = 0;
  while (i < m.length) {
    let j = 0;
    while (j < m[i].length) {
      product[j] *= m[i][j];
      j += 1;
    }
    i += 1;
  }
  return product;
}

export function productAll(m: Matrix): number {
  let product = 1;
  let i = 0;
  while (i < m.length) {
    let j = 0;
    while (j < m[i].length) {
      product *= m[i][j];
      j += 1;
    }
    i += 1;
  }
  return product;
}

export function meanRows(m: Matrix): number[] {
  const sum = sumRows(m);
  const n_cols = m[0].length;
  const mean = [];
  let i = 0;
  while(i < m.length) {
    mean[i] = sum[i] / n_cols;
    i += 1;
  }
  return mean;
}

export function meanCols(m: Matrix): number[] {
  const sum = sumCols(m);
  const n_rows = m.length;
  const mean = [];
  let i = 0;
  while(i < m.length) {
    mean[i] = sum[i] / n_rows;
    i += 1;
  }
  return mean;
}

export function meanAll(m: Matrix): number {
  const sum = sumAll(m);
  const n_items = m.length * m[0].length;
  return sum / n_items;
}

