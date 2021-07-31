function convertToRoman(num) {
    let romanNum = "";
    let count;

    while (num > 0) {
      if (num >= 1000) {
        num -= 1000;
        romanNum += "M";
      }
      else if (num >= 900) {
        num -= 900;
        romanNum += "CM";
      }
      else if (num >= 500) {
        num -= 500;
        romanNum += "D";
      }
      else if (num >= 400) {
        num -= 400;
        romanNum += "CD";
      }
      else if (num >= 100) {
        num -= 100;
        romanNum += "C";
      }
      else if (num >= 90) {
        num -= 90;
        romanNum += "XC";
      }
      else if (num >= 50) {
        num -= 50;
        romanNum += "L";
      }
      else if (num >= 40) {
        num -= 40;
        romanNum += "XL";
      }
      else if (num >= 10) {
        num -= 10;
        romanNum += "X";
      }
      else if (num == 9) {
        num -= 9;
        romanNum += "IX";
      }
      else if (num >= 5) {
        num -= 5;
        romanNum += "V";
      }
      else if (num == 4) {
        num -= 4;
        romanNum += "IV";
      }
      else { 
        num -= 1;
        romanNum += "I"
      }

    }

    return romanNum;

}