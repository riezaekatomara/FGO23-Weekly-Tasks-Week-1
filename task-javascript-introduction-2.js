function hitungDiskon(totalBelanja) {
  diskon = 0;
  if (typeof totalBelanja !== "number") {
    console.log("Data yang dimasukkan harus angka");
    return;
  } else {
    if (totalBelanja >= 1000000) {
      diskon = 0.1;
      totalSetelahDiskon = totalBelanja - totalBelanja * diskon;
      console.log(
        `Anda mendapatkan diskon 10%, total belanja anda menjadi ${totalSetelahDiskon}`
      );
    } else if (totalBelanja >= 500000 && totalBelanja < 1000000) {
      diskon = 0.05;
      totalSetelahDiskon = totalBelanja - totalBelanja * diskon;
      console.log(
        `Anda mendapatkan diskon 5%, total belanja anda menjadi ${totalSetelahDiskon}`
      );
    } else {
      diskon = 0;
      totalSetelahDiskon = totalBelanja - totalBelanja * diskon;
      console.log(
        `Anda tidak mendapatkan diskon, total belanja anda ${totalSetelahDiskon}`
      );
    }
  }
}

hitungDiskon(600000);
