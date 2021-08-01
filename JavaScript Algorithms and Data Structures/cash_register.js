function checkCashRegister(price, cash, cid) {
    let obj = {status: null, change: [] };
    let diff = cash - price;
    let totalCID = cid.reduce((acc, element) => acc + element[1], 0 );

    if (totalCID < diff) {
      obj.status = "INSUFFICIENT_FUNDS";
      return obj;
    }
    else if (totalCID === diff) {
      obj.status = "CLOSED";
      obj.change = cid;
      return obj;
    }

    let cidObj = {};
    cid.forEach((element) => cidObj[element[0]] = element[1]);
    let changeObj = {
      "ONE HUNDRED" : 0,
      "TWENTY": 0,
      "TEN": 0,
      "FIVE": 0,
      "ONE": 0,
      "QUARTER": 0,
      "DIME": 0,
      "NICKEL": 0,
      "PENNY": 0
    };

    while (diff != 0) {

      if (diff >= 100 && cidObj["ONE HUNDRED"] >= 100) {
        diff -= 100;
        cidObj["ONE HUNDRED"] -= 100;
        changeObj["ONE HUNDRED"] = changeObj["ONE HUNDRED"] + 100
      }
      else if (diff >= 20 && cidObj["TWENTY"] >= 20) {
        diff -= 20;
        cidObj["TWENTY"] -= 20;
        changeObj["TWENTY"] += 20;
      }
      else if (diff >= 10 && cidObj["TEN"] >= 10) {
        diff -= 10;
        cidObj["TEN"] -= 10;
        if (changeObj.hasOwnProperty("TEN"))
          changeObj["TEN"] += 10;
        else
          changeObj["TEN"] = 10;
      }
      else if (diff >= 5 && cidObj["FIVE"] >= 5) {
        diff -= 5;
        cidObj["FIVE"] -= 5;
        if (changeObj.hasOwnProperty("FIVE"))
          changeObj["FIVE"] += 5;
        else
          changeObj["FIVE"] = 5;
      }
      else if (diff >= 1 && cidObj["ONE"] >= 1) {
        diff -= 1;
        cidObj["ONE"] -= 1;
        if (changeObj.hasOwnProperty("ONE"))
          changeObj["ONE"] += 1;
        else
          changeObj["ONE"] = 1;
      }
      else if (diff >= 0.25 && cidObj["QUARTER"] >= 0.25) {
        diff -= 0.25;
        cidObj["QUARTER"] -= 0.25;
        if (changeObj.hasOwnProperty("QUARTER"))
          changeObj["QUARTER"] += 0.25;
        else
          changeObj["QUARTER"] = 0.25;
      }
      else if (diff >= 0.1 && cidObj["DIME"] >= 0.1) {
        diff -= 0.1;
        cidObj["DIME"] -= 0.1;
        if (changeObj.hasOwnProperty("DIME"))
          changeObj["DIME"] += 0.1;
        else
          changeObj["DIME"] = 0.1;
      }
      else if (diff >= 0.05 && cidObj["NICKEL"] >= 0.05) {
        diff -= 0.05;
        cidObj["NICKEL"] -= 0.05;
        if (changeObj.hasOwnProperty("NICKEL"))
          changeObj["NICKEL"] += 0.05;
        else
          changeObj["NICKEL"] = 0.05;
      }
      else if (diff >= 0.01 && cidObj["PENNY"] > 0.01) {
        diff -= 0.01;
        cidObj["PENNY"] -= 0.01;
        if (changeObj.hasOwnProperty("PENNY"))
          changeObj["PENNY"] += 0.01;
        else
          changeObj["PENNY"] = 0.01;
      }
      else {
        obj.status = "INSUFFICIENT_FUNDS";
        return obj;
      }

      diff = Math.round( diff * 100 ) / 100;
    }

    obj.status = "OPEN";

    if (changeObj["ONE HUNDRED"] > 0)
      obj.change.push(["ONE HUNDRED", changeObj["ONE HUNDRED"]]);
    if (changeObj["TWENTY"] > 0)
      obj.change.push(["TWENTY", changeObj["TWENTY"]]);
    if (changeObj["TEN"] > 0)
      obj.change.push(["TEN", changeObj["TEN"]]);
    if (changeObj["FIVE"] > 0)
      obj.change.push(["FIVE", changeObj["FIVE"]]);
    if (changeObj["ONE"] > 0)
      obj.change.push(["ONE", changeObj["ONE"]]);
    if (changeObj["QUARTER"] > 0)
      obj.change.push(["QUARTER", changeObj["QUARTER"]]);
    if (changeObj["DIME"] > 0)
      obj.change.push(["DIME", changeObj["DIME"]]);
    if (changeObj["NICKEL"] > 0)
      obj.change.push(["NICKEL", changeObj["NICKEL"]]);
    if (changeObj["PENNY"] > 0)
      obj.change.push(["PENNY", changeObj["PENNY"]]);

    return obj;

}