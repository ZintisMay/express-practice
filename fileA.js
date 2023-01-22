function carBuilder(make, year, model) {
  return {
    make,
    year,
    model,
  };
}

var car = carBuilder("Hyundai", 2010, "Accent");

// console.log(car);

// module.exports = { a: "zintis" };
module.exports = {
  car,
  carBuilder,
};
