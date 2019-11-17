@invoke alphabetize();
@invoke toc();

#### Abbreviations

-   Write a program to find the minimum, same-length_ abbreviation for an array that would preserve each element's uniqueness.

**Solution:**

```typescript
@import "./abbreviations.ts";
```

**Sample Output:**

```
["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] can be abbreviated to ["We", "Th", "Sa", "Tu", "Su", "Mo", "Fr"]
["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"] can be abbreviated to ["Mi", "Do", "Vi", "Ma", "Ju", "Sá", "Lu"]
["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"] can be abbreviated to ["Di", "Me", "Ve", "Sa", "Lu", "Ma", "Je"]
["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"] can be abbreviated to ["Me", "Do", "Ma", "Gi", "Ve", "Lu", "Sa"]
["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"] can be abbreviated to ["Du", "Mi", "Sa", "Vi", "Ma", "Lu", "Jo"]
```

**Variants:**

-   Produce an array of minimal-length strings instead of same-length strings.

**References:**

-   <http://rosettacode.org/wiki/Abbreviations,_automatic>

#

#### Letter Blocks

-   Write a program that determines whether a word can be spelled with a given collection of blocks.
-   Blocks are guaranteed to have the same letter pairs on them.

**Solution:**

```typescript
@import "./letterBlocks.ts";
```

**Sample Output:**

```
The word "A" can be spelled with these blocks.
The word "BARK" can be spelled with these blocks.
The word "BOOK" can NOT be spelled with these blocks.
The word "TREAT" can be spelled with these blocks.
The word "COMMON" can NOT be spelled with these blocks.
The word "SQUAD" can be spelled with these blocks.
The word "CONFUSE" can be spelled with these blocks.
```

**Variants:**

-   Blocks are not guaranteed to have the same letter pairs on them.

**References:**

-   <http://rosettacode.org/wiki/ABC_Problem>

#

#### Align Columns

-   Write a program that aligns words into columns, ensuring that the words in each column are separated by at least one space. Further, allow for each word in a column to be either left a justified, right justified, or center justified within its column.

**Solution:**

```typescript
@import "./alignColumns.ts";
```

**Sample Output:**

```
Left:
Write    a         program,  that   aligns     words   into       columns,
ensuring that      the       words  in         each    column
are      separated by        at     least      one     space.
Further, allow     for       each   word       in      a          column
to       be        either    left   justified, right   justified,
or       center    justified within its        column.

Right:
   Write         a  program,   that     aligns   words       into columns,
ensuring      that       the  words         in    each     column
     are separated        by     at      least     one     space.
Further,     allow       for   each       word      in          a   column
      to        be    either   left justified,   right justified,
      or    center justified within        its column.

Center:
 Write       a     program,   that    aligns    words     into    columns,
ensuring   that       the    words      in      each     column
  are    separated    by       at     least      one     space.
Further,   allow      for     each     word      in        a       column
   to       be      either    left  justified,  right  justified,
   or     center   justified within    its     column.
```

**Variants:**

-   Word wrap to some number of columns.
-   Justify words to some number of columns.
-   Preserve punctuation, but don't align by it.

**References:**

-   <https://www.rosettacode.org/wiki/Align_columns>

#

#### Balanced Brackets

-   Determine whether the generated string is balanced; that is, whether it consists entirely of pairs of opening/closing brackets (in that order), none of which mis-nest.

**Solution:**

```typescript
@import "./balancedBrackets.ts";
```

**Sample Output:**

```
[[]][[]]]] is NOT balanced.
        ^
][]][[][][ is NOT balanced.
^
[][]]][[[] is NOT balanced.
    ^
][][[[][[] is NOT balanced.
^
[[[][]]][] is balanced.

][][]][[[[ is NOT balanced.
^
][][[[[]][ is NOT balanced.
^
][[][]][[] is NOT balanced.
^
[[]][[]][] is balanced.

[][]]][]]] is NOT balanced.
    ^
```

**References:**

-   <http://rosettacode.org/wiki/Balanced_brackets>

#

#### Caesar Cipher

-   Write a program that can encode and decode a string using a Caesar cipher given a key (an integer from 1 to 25).
    - The [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) is a type of [substitution cipher](https://en.wikipedia.org/wiki/Substitution_cipher) in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.

**Solution:**

```typescript
@import "./caesarCipher.ts";
```

**Sample Output:**

```
Encoded:
Dro combod vsoc gsdr Mrkbvyddo.
Decoded:
The secret lies with Charlotte.
```

**References:**

-   http://rosettacode.org/wiki/Caesar_cipher
-   https://en.wikipedia.org/wiki/Caesar_cipher
-   https://en.wikipedia.org/wiki/Substitution_cipher

#

#### Caesar Cipher Solver

-   Use a dictionary to attempt to decode the message encoded by your [Caesar cipher](#caesar-cipher).
    -   Windows users must bring their own dictionary or match against a dictionary containing the decoded message.

**Solution:**

```typescript
@import "./caesarCipherSolver.ts";
```

**Sample Output:**

```
Encoded:
Dro combod vsoc gsdr Mrkbvyddo.
Decoded:
The secret lies with Charlotte.

20% match with a shift of 4.
    Dro -> Znk
    combod -> ykixkz
    vsoc -> roky
    gsdr -> cozn
    Mrkbvyddo. -> Ingxruzzk.

60% match with a shift of 10.
    Dro -> The
    combod -> secret
    vsoc -> lies
    gsdr -> with
    Mrkbvyddo. -> Charlotte.

20% match with a shift of 17.
    Dro -> Max
    combod -> lxvkxm
    vsoc -> ebxl
    gsdr -> pbma
    Mrkbvyddo. -> Vatkehmmx.
```

**References:**

-   http://rosettacode.org/wiki/Caesar_cipher

#

#### Recursion Limit

-   Find the limit of [recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science)).

**Solution:**

```typescript
import "./recursionLimit.ts";
```

**Sample Output:**

```
The recursion limit is: 12569
```

**References:**

-   http://rosettacode.org/wiki/Find_limit_of_recursion
-   https://en.wikipedia.org/wiki/Recursion_(computer_science)

#

#### History Variables

- Implement history variables.
    - History variables are variables in a programming language which store not only their current value, but also the values they have contained in the past.

**Solution:**

```typescript
@import "./historyVariables.ts";
```

**Sample Output:**

```
> Print the history
[
  'uno',   'dos',
  'tres',  'cuatro',
  'cinco', 'cinco',
  'seis'
]

> Print the previous value
cinco

> Roll back twice

> Set the value to "seis"

> Get the value we just added
seis

> Print the history
[ 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis' ]
```

**References:**

-   http://rosettacode.org/wiki/History_variables

#

#### Last Letter-First Letter

-

**Solution:**

```typescript
//@import "./lastLetterFirstLetter.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Linear Congruential Generator

-

**Solution:**

```typescript
//@import "./linearCongruentialGenerator.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Ordered Words

-

**Solution:**

```typescript
//@import "./orderedWords.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Pangram Checker

-

**Solution:**

```typescript
//@import "./pangramChecker.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Pascal's Triangle

-

**Solution:**

```typescript
//@import "./pangramChecker.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Pascal's Triangle Puzzle

-

**Solution:**

```typescript
//@import "./pangramChecker.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### International Bank Account Number (IBAN) Validator

-

**Solution:**

```typescript
//@import "./ibanValidator.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Luhn Algorithm

-

**Solution:**

```typescript
//@import "./luhnAlgorithm.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Maximum Triangle Path Sum

-

**Solution:**

```typescript
//@import "./maximumTrianglePathSum.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Poker Hand Analyzer

-

**Solution:**

```typescript
//@import "./pokerHandAnalyzer.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Perfect Shuffle

-

**Solution:**

```typescript
//@import "./perfectShuffle.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Quine

-   Write a quine.
    -   A [Quine](https://en.wikipedia.org/wiki/Quine_(computing)) a computer program which takes no input and produces a copy of its own source code as its only output.

**Solution:**

```typescript
@import "./quine.ts";
```

**Sample Output:**

```
@import "./quine.ts";
```

**References:**

-   http://rosettacode.org/wiki/Quine
-   https://en.wikipedia.org/wiki/Quine_(computing)

#

#### Remove Duplicate Elements

-

**Solution:**

```typescript
//@import "./removeDuplicateElements.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Semordnilap

-

**Solution:**

```typescript
//@import "./semordnilap.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Sparkline

-

**Solution:**

```typescript
//@import "./sparkline.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Textonyms

-

**Solution:**

```typescript
//@import "./textonyms.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Towers of Hanoi

-

**Solution:**

```typescript
//@import "./textonyms.ts";
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

#
