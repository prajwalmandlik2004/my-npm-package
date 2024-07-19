# prajwal-money-convert

A simple money converter package to convert between different currencies.

## Installation

You can install this package using npm:

```bash
npm install prajwal-money-convert
```

# Usage

To use the moneyConverter function from the prajwal-money-convert package, you can import it and then call it with the appropriate parameters.

# Importing the Package

First, import the moneyConverter function from the package:

```bash
import { moneyConverter } from 'prajwal-money-convert';
```

# Using the moneyConverter Function

The moneyConverter function takes three parameters:

1. The source currency (e.g., "USD")
2. The target currency (e.g., "INR")
3. The amount to convert

The function returns a promise that resolves with the converted amount. Here's an example of how to use the function:

```bash
moneyConverter('USD', 'INR', 3)
  .then(res => console.log(res))
  .catch(err => console.error(err));
```

# Example

Here's a full example showing how to use the moneyConverter function:

```bash
import { moneyConverter } from 'prajwal-money-convert';

moneyConverter('USD', 'INR', 3)
  .then(res => console.log(`Converted amount: ${res}`))
  .catch(err => console.error(`Error: ${err.message}`));
```

# Output

The output will be the converted amount from USD to INR. For example, if 1 USD is equal to 75 INR, the output will be:


```bash
Converted amount: 225
```


