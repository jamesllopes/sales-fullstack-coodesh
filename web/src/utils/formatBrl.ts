export function formatBrl(valor: number) {
  const format = Number(valor);

  const tmp = new Intl.NumberFormat("pt", {
    style: "currency",
    currency: `BRL`,
  }).format(format);

  return tmp;
}
