function rot13(str) {
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let afterText = "";

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (alphabets.includes(char))
        afterText += alphabets[(alphabets.indexOf(char) + 13) % 26];
      else
        afterText += char;
    }

    return afterText;
}