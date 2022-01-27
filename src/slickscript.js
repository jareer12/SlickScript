const crypt = (salt, text) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);

  return text
    .split("")
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join("");
};

const decrypt = (salt, encoded) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);
  return encoded
    .match(/.{1,2}/g)
    .map((hex) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join("");
};
function rgbToHex(rgb) {
  return (
    "#" +
    rgb
      .match(/[0-9|.]+/g)
      .map((x, i) =>
        i === 3
          ? parseInt(255 * parseFloat(x)).toString(16)
          : parseInt(x).toString(16)
      )
      .join("")
  );
}

function hexToRGB(hex, alpha) {
  r = parseInt(hex.slice(1, 3), 16);
  g = parseInt(hex.slice(3, 5), 16);
  b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
}

function toUnique(array) {
  return [...new Set(array)];
}

function randString(length, use_int) {
  if (use_int) {
    randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  } else {
    randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  }
  let result = "";
  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
}

function randNumber(min, max) {
  return Math.random() * (max - min) + min;
}

Number.prototype.toBool = function () {
  let val_ = JSON.parse(JSON.stringify(this));
  if (val_ == 1) {
    return true;
  } else {
    return false;
  }
};

String.prototype.toBool = function () {
  let val_ = JSON.parse(JSON.stringify(this));
  if (val_ == "true") {
    return true;
  } else {
    return false;
  }
};

String.prototype.toHex = function () {
  return rgbToHex(this);
};

String.prototype.toRGB = function () {
  return hexToRGB(this);
};

String.prototype.Encrypt = function (salt) {
  return crypt(salt, this);
};

String.prototype.Decrypt = function (salt) {
  return decrypt(salt, this);
};

Array.prototype.toUnique = function () {
  return toUnique(this);
};

randStr = randString;
randNum = randNumber;
