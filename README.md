![./src/imgs/plain.png](./src/imgs/plain.png)

## Quick Install

```yaml
// Cdnjs Coming Soon
```

```yaml
// jsDelivr Coming Soon
```

## Guide

If a value is null or not

```js
isNull(string);
```

Convert string/integer to boolean, for integer, 0 will return false 1 wil return true.

```js
(1).toBool();
"true".toBool();
```

Generate a random number.

```js
randNum(10, 100);
```

Convert hex to rgb code.

```js
"#eb4034".toRGB();
```

Format an integer with commas as `number_format()` in php.

```js
(99999999).Format(); // 99,999,999
```

Generate a random string, can be used to make random ids.

```js
randString(10, true); // string length, use int or not
```

Convert rgb to hex.

```js
"235, 64, 52".toHex();
```

Encrypt a string with the provided salt.

```js
String.Encrypt("StrongSalt");
```

Decrypt a string with the provided salt.

```js
String.Decrypt("StrongSalt");
```

Get unique value(s) from array.

```js
Array.toUnique();
```

Remove a certain value from an array.

```js
Array.remove("James");
["Bob", "James", "Bob"].remove("James");
```

Encode html entities.

```js
console.log(`<!DOCTYPE html>`.encodeEntities());
```

Decode html entities.

```js
console.log(`<!DOCTYPE html>`.decodeEntities());
```
