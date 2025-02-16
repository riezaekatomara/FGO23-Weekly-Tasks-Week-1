function printSquare(n) {
  if (typeof n !== "number") {
    console.log("Data yang dimasukkan harus angka");
    return;
  }
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

printSquare(5);
printSquare(3);
printSquare("1");
