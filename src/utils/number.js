/* eslint-disable import/prefer-default-export */

export function asCurrency(amount) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
