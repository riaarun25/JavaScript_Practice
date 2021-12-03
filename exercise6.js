function checkNum() {
    var num = document.getElementById("num").value;
    var numArr = num.split("");
    var numArr1 = numArr.slice(0, numArr.length / 2);
    var numArr1str = numArr1.join("");
  
    var numArr2 = numArr.slice(numArr.length / 2, numArr.length);
    var numArr2str = numArr2.join("");
  
    var numArr1Sorted = numArr1.sort().join("");
    var numArr2Sorted = numArr2.sort().reverse().join("");
  
    numArr1rev = numArr1.reverse().join("");
    numArr2rev = numArr2.reverse().join("");
  
    if (numArr1Sorted == numArr1str && numArr2Sorted == numArr2str) {
      document.getElementById(
        "result"
      ).innerHTML += `<br><br>The number "${num}" is half increasing and half decreasing`;
      console.log("A");
    } else if (numArr1str == numArr1rev && numArr2str == numArr2rev) {
      document.getElementById(
        "result"
      ).innerHTML += `<br><br>The number "${num}" is half increasing and half decreasing`;
      console.log("B");
    } else {
      document.getElementById(
        "result"
      ).innerHTML += `<br><br>The number "${num}" is not half increasing and half decreasing`;
      console.log("C");
    }
  }
