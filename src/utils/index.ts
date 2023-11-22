export function moneyFormatting(money: number) {
  return new Intl.NumberFormat().format(money);
}
