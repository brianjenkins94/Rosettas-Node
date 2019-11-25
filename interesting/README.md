@invoke alphabetize();
@insert toc();

#### Abbreviations

-   Write a program to find the minimum, _same-length_ abbreviation for an array that would preserve each element's uniqueness.

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Abbreviations");

@insert expandableCodeBlock("typescript", "./abbreviations.ts");

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Abbreviations");

@insert expandableOutputBlock("./output/abbreviations.output.txt");

**Variants:**

-   Produce an array of minimal-length strings instead of same-length strings.

**References:**

-   <http://rosettacode.org/wiki/Abbreviations,_automatic>

#

#### Letter Blocks

-   Write a program that determines whether a word can be spelled with a given collection of blocks.
-   Blocks are guaranteed to have the same letter pairs on them.

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Letter Blocks");

@insert expandableCodeBlock("typescript", "./letterBlocks.ts");

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Letter Blocks");

@insert expandableOutputBlock("./output/letterBlocks.output.txt");

**References:**

-   <http://rosettacode.org/wiki/ABC_Problem>

#

#### Align Columns

-   Write a program that aligns words into columns, ensuring that the words in each column are separated by at least one space. Further, allow for each word in a column to be either left a justified, right justified, or center justified within its column.

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Align Columns");

@insert expandableCodeBlock("typescript", "./alignColumns.ts");

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Align Columns");

@insert expandableOutputBlock("./output/alignColumns.output.txt");

**Variants:**

-   [Word wrap](#word-wrap) to some number of columns.
-   Justify words to some number of columns.
-   Preserve punctuation, but don't align by it.

**References:**

-   <https://www.rosettacode.org/wiki/Align_columns>

#

#### Balanced Brackets

-   Determine whether a given string is balanced; that is, whether it consists entirely of pairs of opening/closing brackets (in that order), none of which mis-nest.

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Balanced Brackets");

@insert expandableCodeBlock("typescript", "./balancedBrackets.ts");

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Balanced Brackets");

@insert expandableOutputBlock("./output/balancedBrackets.output.txt");

**References:**

-   <http://rosettacode.org/wiki/Balanced_brackets>

#

#### Caesar Cipher

-   Write a program that can encode and decode a string using the [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher), given a key (an integer from 1 to 25).
    -   The Caesar cipher is a type of [substitution cipher](https://en.wikipedia.org/wiki/Substitution_cipher) in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Caesar Cipher");

@insert expandableCodeBlock("typescript", "./caesarCipher.ts");

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Caesar Cipher");

@insert expandableOutputBlock("./output/caesarCipher.output.txt");

**References:**

-   <http://rosettacode.org/wiki/Caesar_cipher>
-   <https://en.wikipedia.org/wiki/Caesar_cipher>
-   <https://en.wikipedia.org/wiki/Substitution_cipher>

#

#### Caesar Cipher Solver

-   Use a dictionary to attempt to decode the message encoded by your [Caesar cipher](#caesar-cipher).
-   Windows users must bring their own dictionary or match against a dictionary containing the decoded message.

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Caesar Cipher Solver");

@insert expandableCodeBlock("typescript", "./caesarCipherSolver.ts");

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Caesar Cipher Solver");

@insert expandableOutputBlock("./output/caesarCipherSolver.output.txt");

**References:**

-   <http://rosettacode.org/wiki/Caesar_cipher>

#

#### Recursion Limit

-   Find the limit of [recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science)).

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Recursion Limit");

@insert expandableCodeBlock("typescript", "./recursionLimit.ts");

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Recursion Limit");

@insert expandableOutputBlock("./output/recursionLimit.output.txt");

**References:**

-   <http://rosettacode.org/wiki/Find_limit_of_recursion>
-   <https://en.wikipedia.org/wiki/Recursion_(computer_science)>

#

#### History Variables

-   Implement history variables.
    -   History variables are variables which store not only their current value, but also the values they have contained in the past.

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "History Variables");

@insert expandableCodeBlock("typescript", "./historyVariables.ts");

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "History Variables");

@insert expandableOutputBlock("./output/historyVariables.output.txt");

**References:**

-   <http://rosettacode.org/wiki/History_variables>

#

#### Last Letter-First Letter

-   Given a collection of words and a starting value, chain as many answers together that start with the last letter of the previous word without repeating.

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Last Letter-First Letter");

@insert expandableCodeBlock("typescript", "./lastLetterFirstLetter.ts");

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Last Letter-First Letter");

@insert expandableOutputBlock("./output/lastLetterFirstLetter.output.txt");

**References:**

-   <http://rosettacode.org/wiki/Last_letter-first_letter>

#

#### Ordered Words

-   Write a program to find all the ordered words from a given dictionary.
    -   An ordered word is a word in which the letters appear in alphabetic order.
-   Windows users must bring their own dictionary.

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Ordered Words");

@insert expandableCodeBlock("typescript", "./orderedWords.ts");

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Ordered Words");

@insert expandableOutputBlock("./output/orderedWords.output.txt");

**References:**

-   <https://rosettacode.org/wiki/Ordered_words>

#

#### Pangram Checker

-   Write a program that checks whether a given string is a [pangram](https://en.wikipedia.org/wiki/Pangram).
    -   A pangram is a word or phrase that contains every letter of the alphabet.

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Pangram Checker");

@insert expandableCodeBlock("typescript", "./isPangram.ts");

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Pangram Checker");

@insert expandableOutputBlock("./output/isPangram.output.txt");

**References:**

-   <https://rosettacode.org/wiki/Pangram_checker>
-   <https://en.wikipedia.org/wiki/Pangram>

#

#### Pascal's Triangle

-   Print the first 10 rows of [Pascal's Triangle](https://en.wikipedia.org/wiki/Pascal%27s_triangle).
    -   Pascal's Triangle is a triangular array where each successive element is the sum of the two above it.

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Pascal's Triangle");

@insert expandableCodeBlock("typescript", "./pascalsTriangle.ts");

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Pascal's Triangle");

@insert expandableOutputBlock("./output/pascalsTriangle.output.txt");

**References:**

-   <https://rosettacode.org/wiki/Pascal%27s_triangle>
-   <https://en.wikipedia.org/wiki/Pascal%27s_triangle>

#### Quine

-   Write a [quine](https://en.wikipedia.org/wiki/Quine_(computing)).
    -   A quine a computer program which takes no input and produces a copy of its own source code as its only output.

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Quine");

@insert expandableCodeBlock("typescript", "./quine.ts");

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Quine");

@insert expandableOutputBlock("./output/quine.output.txt");

**References:**

-   <http://rosettacode.org/wiki/Quine>
-   <https://en.wikipedia.org/wiki/Quine_(computing)>

#

#### Remove Duplicate Elements

-   Given an array with duplicates, remove the duplicates.

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Remove Duplicate Elements");

@insert expandableCodeBlock("typescript", "./removeDuplicateElements.ts");

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Remove Duplicate Elements");

@insert expandableOutputBlock("./output/removeDuplicateElements.output.txt");

**References:**

-   <https://www.rosettacode.org/wiki/Remove_duplicate_elements>

#

#### Semordnilap

-   Write a program that determines whether a word is a [semordnilap](https://en.wikipedia.org/wiki/Palindrome#Semordnilap).
    -   A semordnilap is a word that spells a different word in reverse.
-   Windows users must bring their own dictionary

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Semordnilap");

@insert expandableCodeBlock("typescript", "./isSemordnilap.ts");

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Semordnilap");

@insert expandableOutputBlock("./output/isSemordnilap.output.txt");

**References:**

-   <https://rosettacode.org/wiki/Semordnilap>
-   <https://en.wikipedia.org/wiki/Palindrome#Semordnilap>

#

#### Sparkline

-   Write a program to draw a [sparkline](https://en.wikipedia.org/wiki/Sparkline).
    -   A sparkline is a very small line chart that presents the general shape of a variation.

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Sparkline");

@insert expandableCodeBlock("typescript", "./sparkline.ts");

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Sparkline");

@insert expandableOutputBlock("./output/sparkline.output.txt");

**References:**

-   <https://www.rosettacode.org/wiki/Sparkline_in_unicode>
-   <https://en.wikipedia.org/wiki/Sparkline>

#

#### Textonyms

-   Use a dictionary to find all of the words that are [textonyms](https://en.wikipedia.org/wiki/Predictive_text#Textonyms).
    -   Textonyms are words produced by the same combination of keypresses on a phone keypad.

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Textonyms");

@insert expandableCodeBlock("typescript", "./textonyms.ts");

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Textonyms");

@insert expandableOutputBlock("./output/textonyms.output.txt");

**References:**

-   <https://www.rosettacode.org/wiki/Textonyms>
-   <https://en.wikipedia.org/wiki/Predictive_text#Textonyms>

#

#### Towers of Hanoi

-

**Solution:**

```typescript
//@import "./towersOfHanoi.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Truth Tables

-

**Solution:**

```typescript
//@import "./truthTables.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Ulam spiral

-

**Solution:**

```typescript
//@import "./ulamSpiral.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Vigenère cipher

-

**Solution:**

```typescript
//@import "./vigenereCipher.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Visualize a Tree

-

**Solution:**

```typescript
//@import "./visualizeATree.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Water Collected Between Towers

-

**Solution:**

```typescript
//@import "./visualizeATree.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Word Search Generator

-

**Solution:**

```typescript
//@import "./wordSearchGenerator.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Word Search Solver

-

**Solution:**

```typescript
//@import "./wordSearchSolver.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Word Wrap

-

**Solution:**

```typescript
//@import "./wordWrap.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Birthday Problem

-

**Solution:**

```typescript
//@import "./birthdayProblem.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Substitution Cipher

-

**Solution:**

```typescript
//@import "./subtitutionCipher.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Suffix Tree Generator

-

**Solution:**

```typescript
//@import "./suffixTreeGenerator.ts";
```

**Sample Output:**

```
```

**References:**

-
