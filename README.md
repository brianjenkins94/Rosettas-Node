<img height="128px" width="128px" align="right" />

# Rosetta's Node

> Interesting problems. Quickly described.

<table>
	<thead>
		<tr>
			<th align="center"><strong>Contents</strong></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<ol>
					<li><a href="#obligatory">Obligatory</a></li>
					<li><a href="#second-category">Second Category</a></li>
					<ol>
						<li><a href="#item">Item</a></li>
						<li><a href="#acknowledgements">Acknowledgements</a></li>
					</ol>
					<li><a href="#license">License</a></li>
				</ol>
			</td>
		</tr>
	</tbody>
</table>

### Obligatory

<table>
	<thead>
		<tr>
			<th align="center"><strong>Contents</strong></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<ol>
					<li><a href="#fizzbuzz">FizzBuzz</a></li>
					<li><a href="#fibonacci-iterative">Fibonacci (Iterative)</a></li>
					<li><a href="#fibonacci-recursive">Fibonacci (Recursive)</a></li>
				</ol>
			</td>
		</tr>
	</tbody>
</table>

#### FizzBuzz

```typescript
for (let i = 1; i <= 100; i++) {
	if (i % 15 === 0) {
		console.log("FizzBuzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}
```

#### Fibonacci (Iterative)

```typescript
function fibonacci(n) {
	const array = [0, 1];

	for (let i = 2; i <= n; i++) {
		console.log(i);

		array.push(array[i - 2] + array[i - 1]);
	}

	return array[n];
}

console.log(fibonacci(10));
```

#### Fibonacci (Recursive)

```typescript
function fibonacci(n) {
	console.log(n);

	if (n < 2) {
		return n;
	}

	return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));
```

### Second Category

#### Item

### Acknowledgements

-   [Rosetta Code](http://rosettacode.org/wiki/Rosetta_Code)

### License

`Rosettas-Node` is licensed under the [MIT License](https://github.com/brianjenkins94/Rosettas-Node/blob/master/LICENSE).

All files located in the `node_modules` directory are externally maintained libraries used by this software which have their own licenses; it is recommend that you read them, as their terms may differ from the terms in the MIT License.
