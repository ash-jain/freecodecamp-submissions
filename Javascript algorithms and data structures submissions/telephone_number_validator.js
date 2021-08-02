function telephoneCheck(str) {
  let parenthesisCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == ")")
      parenthesisCounter++;
  }

  if (parenthesisCounter % 2 == 1)
    return false;

  if (/[A-Za-z?]/g.test(str) || str[0] == "-")
    return false;

  str = str.replace(/[-\(\)\s]/g, "");

  if (str.length == 11 && str[0] != 1)
    return false;
  else if (str.length == 11 || (str.length == 10 && str[0] != "6") )
    return true;

  console.log(str);
  return false;
}