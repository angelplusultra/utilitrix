[utilitrix](README.md) / Exports

# utilitrix

## Table of contents

### Interfaces

- [ExistsReturn](interfaces/ExistsReturn.md)
- [LogOpts](interfaces/LogOpts.md)
- [NormalMode](interfaces/NormalMode.md)
- [PrecisionMode](interfaces/PrecisionMode.md)
- [WholeMode](interfaces/WholeMode.md)

### Type Aliases

- [Dict](modules.md#dict)
- [TotalizeOpts](modules.md#totalizeopts)

### Variables

- [homeDir](modules.md#homedir)
- [storage](modules.md#storage)

### Functions

- [cloneDir](modules.md#clonedir)
- [delay](modules.md#delay)
- [exists](modules.md#exists)
- [gigalog](modules.md#gigalog)
- [isEven](modules.md#iseven)
- [pluck](modules.md#pluck)
- [random](modules.md#random)
- [titleCase](modules.md#titlecase)
- [totalize](modules.md#totalize)

## Arrays

### pluck

▸ **pluck**<`T`, `K`\>(`arr`, `key`): `T`[`K`][]

Plucks a specific property from an array of objects and returns an array
containing the values of that property.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`Dict`](modules.md#dict) | The type of objects in the input array. |
| `K` | extends `string` \| `number` \| `symbol` | The type of property key to pluck from the objects. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | The input array of objects. |
| `key` | `K` | The property key to pluck from each object. |

#### Returns

`T`[`K`][]

An array containing the values of the specified property
from each object in the input array.

**`Throws`**

If the input array is empty.

**`Throws`**

If the first object in the array has no keys.

**`Example`**

```ts
// Example usage:
const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const ids = pluck(data, 'id');
// Result: [1, 2, 3]

const names = pluck(data, 'name');
// Result: ['Alice', 'Bob', 'Charlie']
```

#### Defined in

[modules/array/pluck.ts:41](https://github.com/angelplusultra/utilitrix/blob/9d73b51/src/modules/array/pluck.ts#L41)

## Misc

### gigalog

▸ **gigalog**<`LogValue`\>(`opts`, `key?`): `void`

Logs a key-value pair or a single value for debugging or logging purposes.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `LogValue` | The type of the log value. |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `opts` | `LogValue` \| [`LogOpts`](interfaces/LogOpts.md)<`LogValue`\> | `undefined` | An object with a key-value pair or a single value to log. |
| `key?` | `string` | `"Key"` | The key to use for the log entry if `opts` is a single value. |

#### Returns

`void`

**`Example`**

```ts
// Logging a key-value pair
const logEntry = { key: "UserID", value: 123 };
gigalog(logEntry);

// Logging a single value with a custom key
gigalog("Status", "StatusCode");
```

#### Defined in

[modules/misc/gigalog.ts:31](https://github.com/angelplusultra/utilitrix/blob/9d73b51/src/modules/misc/gigalog.ts#L31)

## Other

### Dict

Ƭ **Dict**: `Object`

A dictionary type representing objects with string keys and arbitrary values.

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[modules/array/pluck.ts:5](https://github.com/angelplusultra/utilitrix/blob/9d73b51/src/modules/array/pluck.ts#L5)

___

### TotalizeOpts

Ƭ **TotalizeOpts**: [`PrecisionMode`](interfaces/PrecisionMode.md) \| [`WholeMode`](interfaces/WholeMode.md) \| [`NormalMode`](interfaces/NormalMode.md)

Calculates the total sum of a variable number of numeric values.

**`Param`**

The numeric values to be summed.

**`Example`**

```ts
const result = totalize(1, 2, 3); // Result: 6
```

#### Defined in

[modules/number/totalize.ts:10](https://github.com/angelplusultra/utilitrix/blob/9d73b51/src/modules/number/totalize.ts#L10)

___

### homeDir

• `Const` **homeDir**: `undefined` \| `string`

#### Defined in

modules/fs/constants.ts:1

___

### storage

• `Const` **storage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `local` | { `clear`: () => `void` ; `get`: <ReturnValue\>(`key`: `string`) => `ReturnValue` ; `remove`: (`key`: `string`) => `void` ; `set`: <T\>(`key`: `string`, `value`: `T`) => `void`  } |
| `local.clear` | () => `void` |
| `local.get` | <ReturnValue\>(`key`: `string`) => `ReturnValue` |
| `local.remove` | (`key`: `string`) => `void` |
| `local.set` | <T\>(`key`: `string`, `value`: `T`) => `void` |

#### Defined in

[modules/storage/index.ts:3](https://github.com/angelplusultra/utilitrix/blob/9d73b51/src/modules/storage/index.ts#L3)

___

### cloneDir

▸ **cloneDir**(`source`, `dest`): `void`

Recursively clones the contents of a directory from the source path to the destination path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` | The source directory path to be cloned. |
| `dest` | `string` | The destination directory path where the source directory contents will be copied. |

#### Returns

`void`

**`Remarks`**

This function copies all the files and subdirectories from the source directory to the destination directory.

**`Throws`**

Throws an error if the source directory does not exist.

**`Example`**

```typescript
cloneDir('/path/to/source', '/path/to/destination');
```

#### Defined in

modules/fs/functions.ts:19

___

### delay

▸ **delay**(`ms`): `Promise`<`void`\>

Delays the execution of code by a specified number of milliseconds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ms` | `number` | The delay time in milliseconds. |

#### Returns

`Promise`<`void`\>

**`Example`**

```ts
async function delayedFunction() {
  console.log("Start");
  await delay(2000); // Wait for 2 seconds
  console.log("End"); // This will be executed after the delay
}

delayedFunction();
```

#### Defined in

[modules/misc/delay.ts:16](https://github.com/angelplusultra/utilitrix/blob/9d73b51/src/modules/misc/delay.ts#L16)

___

### exists

▸ **exists**<`ValueType`, `K`, `V`\>(`array`, `key`, `value`): [`ExistsReturn`](interfaces/ExistsReturn.md)<`ValueType`\>

Determines if an element with a specific key-value pair exists in an array of objects.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValueType` | extends [`Dict`](modules.md#dict) |
| `K` | extends `string` \| `number` \| `symbol` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ValueType`[] | The array of objects to search. |
| `key` | `K` | The key to match against the value. |
| `value` | `V` | The value to search for within the array. |

#### Returns

[`ExistsReturn`](interfaces/ExistsReturn.md)<`ValueType`\>

An `ExistsReturn` object containing information about the existence and the matching element.

**`Example`**

```typescript
const array = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Check if an element with 'name' equal to 'Bob' exists in the array
const result = exists(array, "name", "Bob");
// result.exists is true, and result.element contains the matching object.
```

#### Defined in

[modules/array/exists.ts:29](https://github.com/angelplusultra/utilitrix/blob/9d73b51/src/modules/array/exists.ts#L29)

___

### isEven

▸ **isEven**(`number`): `boolean`

Takes a number and returns true if the number is even and false if it is odd

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | The number to evaluate |

#### Returns

`boolean`

boolean value on whether the number is even

**`Example`**

```ts
const num = 8
isEven(num) -> true

const num = 5
isEven(num) -> false
```

#### Defined in

[modules/number/isEven.ts:14](https://github.com/angelplusultra/utilitrix/blob/9d73b51/src/modules/number/isEven.ts#L14)

___

### random

▸ **random**<`T`\>(`arr`): `T`

Selects a random element from an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | The array from which to select a random element. |

#### Returns

`T`

**`Throws`**

If the input array is empty.

**`Example`**

```ts
const colors = ["red", "blue", "green", "yellow"];
const randomColor = random(colors); // Returns a random color from the array.
```

#### Defined in

[modules/array/random.ts:10](https://github.com/angelplusultra/utilitrix/blob/9d73b51/src/modules/array/random.ts#L10)

___

### titleCase

▸ **titleCase**(`str`): `string`

Capitalizes the first letter of each word in a string, except for specified minor words.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The input string to be title-cased. |

#### Returns

`string`

The input string title-cased

**`Example`**

```ts
const input = "the lord of the rings";
const result = titleCase(input); // Returns "The Lord of the Rings"
```

#### Defined in

[modules/string/titleCase.ts:10](https://github.com/angelplusultra/utilitrix/blob/9d73b51/src/modules/string/titleCase.ts#L10)

___

### totalize

▸ **totalize**(`nums`, `opts?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nums` | `number`[] |
| `opts` | [`TotalizeOpts`](modules.md#totalizeopts) |

#### Returns

`number`

#### Defined in

[modules/number/totalize.ts:23](https://github.com/angelplusultra/utilitrix/blob/9d73b51/src/modules/number/totalize.ts#L23)
