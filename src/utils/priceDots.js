export default function priceDots() {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return {
    numberWithCommas,
  };
}
