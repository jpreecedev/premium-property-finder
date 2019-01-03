/* eslint-disable import/prefer-default-export */

export function asCurrency(amount) {
  if (!amount) {
    return ''
  }

  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
