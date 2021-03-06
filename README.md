![./src/imgs/plain.png](./src/imgs/plain.png)

## Quick Install

### Production

```html
<script src="https://cdn.jsdelivr.net/npm/slickscript@latest/src/slickscript.min.js"></script>
```

### Development

```html
<script src="https://cdn.jsdelivr.net/npm/slickscript@latest/src/slickscript.js"></script>
```

## Guide

If a value is null or not

```js
let string = null;
isNull(string); // ===> true
```

Generate a random number.

```js
randNum(10, 100);
```

Generate a random string, can be used to make random ids.

```js
randString(10, true); // string length, use int or not
```

Convert string/number to boolean, for integer, 0 will return false 1 wil return true.

```js
Number.toBool();
String.toBool();
```

Convert hex to rgb code.

```js
String.toRGB();
"#4269f5".toHex(); // ===> "rgb(66, 105, 245)"
```

Format an integer with commas as `number_format()` in php.

```js
Number.Format();
(99999999).Format(); // ===> "99,999,999"
```

Convert rgb to hex.

```js
String.toHex();
"(66, 105, 245)".toHex(); // ===> "#4269f5"
```

Encrypt a string with the provided salt.

```js
String.Encrypt("StrongSalt");
"Password".Encrypt("StrongSalt"); // ====> "49786a6a6e766b7d"
```

Decrypt a string with the provided salt.

```js
String.Decrypt("StrongSalt");
"49786a6a6e766b7d".Decrypt("StrongSalt"); // ====> "Password"
```

Get unique value(s) from array.

```js
Array.toUnique();
["Bob", "Alice", "James", "James"].remove("James"); // ===> ["Bob", "Alice", "James"]
```

Remove a certain value from an array.

```js
Array.remove(value);
["Bob", "Alice", "James", "James"].remove("James"); // ===> ["Bob", "Alice"]
```

Encode html entities.

```js
String.encodeEntities();
```

Decode html entities.

```js
String.decodeEntities();
```

Get the highest integer value from an array

```js
Array.highest();
[1, 2, 3, 4, 5, 6].lowest(); // ===> 6
```

Get the lowest integer value from an array

```js
Array.lowest();
[1, 2, 3, 4, 5, 6].lowest(); // ===> 1
```

Get a random value from an array.

```js
Array.random();
["Bob", "Alice", "James"].random(); // ===> "Bob"
```

Checks whether string is email or not.

```js
String.isEmail();
"slickscript@gmail.com".isEmail(); // ===> true
```

Gets the number of elements with the provided class.

```js
String.count();
document.getElementsByClassName("flex").count(); // ===> 3
```

Merge two arrays together.

```js
[1, 2, 3].merge([4, 5, 6]);
```

Log colored text to the console.

```js
console.color(value, color);
console.color("Wow My Text Is Colored", "#d1463f");
```
