// C Programming Pack Expansion to 20-25 questions per module
const fs = require('fs');
const path = require('path');

const packPath = path.join(__dirname, 'assets', 'packs', 'pack_c_programming.json');
const pack = JSON.parse(fs.readFileSync(packPath, 'utf8'));

console.log("Original questions:", pack.questions.length);

function addQ(moduleNum, question, a, b, c, d, answer, explanation, level) {
  const mod = pack.modules.find(m => m.number === moduleNum);
  pack.questions.push({
    question,
    a,
    b,
    c,
    d,
    answer,
    explanation,
    level,
    module: moduleNum,
    moduleName: mod.name
  });
}

// -------------------------------------------------------------
// MODULE 1: C Introduction & Syntax (+10 Questions)
// -------------------------------------------------------------
addQ(1, "What does the 'return 0;' statement at the end of the main() function typically signal to the operating system?",
  "The program encountered an unrecoverable error",
  "The program executed and terminated successfully with exit code 0",
  "The program should loop back to the beginning",
  "Zero bytes of memory were allocated",
  "B", "Returning 0 from main() indicates successful program execution (EXIT_SUCCESS) to the parent shell process.", 1);

addQ(1, "In C, which punctuation character is strictly required to terminate every simple statement?",
  "Colon (:)",
  "Semicolon (;)",
  "Period (.)",
  "Comma (,)",
  "B", "Statements in C must end with a semicolon (;) to mark the completion of the statement instruction.", 1);

addQ(1, "Which of the following represents a valid multi-line comment in standard C?",
  "// This is a comment //",
  "/* This is a comment */",
  "# This is a comment",
  "<!-- This is a comment -->",
  "B", "C supports block comments enclosed within /* and */, as well as C99 single-line comments prefixed by //.", 1);

addQ(1, "What is the primary role of the C Preprocessor (cpp)?",
  "To execute the compiled binary executable",
  "To handle macro expansions (#define), file inclusions (#include), and conditional compilation (#ifdef) before compilation begins",
  "To optimize assembly machine instructions",
  "To allocate dynamic heap memory",
  "B", "The preprocessor processes all directives beginning with '#' before lexical analysis and compilation occur.", 2);

addQ(1, "Which compiler toolchain command compiles a source file 'main.c' into an executable named 'app' using GCC?",
  "gcc main.c -o app",
  "gcc compile main.c app",
  "make run main.c app",
  "cc -build main.c",
  "A", "The -o flag in GCC / Clang specifies the target output binary filename.", 1);

addQ(1, "What file extension is standard for C header interface files?",
  ".c",
  ".h",
  ".hpp",
  ".obj",
  "B", "Header files containing function prototypes, macros, and struct definitions use the .h extension.", 1);

addQ(1, "What does the escape sequence '\\n' represent in a C string literal?",
  "Null terminator",
  "Newline character (Line feed)",
  "Tab space",
  "Backspace",
  "B", "The '\\n' escape character moves the console output cursor to the beginning of the next line.", 1);

addQ(1, "What does the escape sequence '\\t' represent in C?",
  "Horizontal Tab",
  "Vertical Tab",
  "Terminate program",
  "Trailing zero",
  "A", "'\\t' advances output to the next horizontal tab stop (typically 4 or 8 spaces).", 1);

addQ(1, "Which standard library function is used to print formatted text to the standard output console?",
  "echo()",
  "printf()",
  "print()",
  "System.out.println()",
  "B", "printf() from <stdio.h> prints formatted character streams to stdout.", 1);

addQ(1, "What is the role of the Linker in the C build process?",
  "Translates C code into assembly",
  "Combines compiled object files (.o/.obj) and external library routines into a final runnable executable binary",
  "Formats source code indentation",
  "Checks code syntax errors",
  "B", "The linker resolves external symbol references across object files and standard runtime libraries (libc).", 2);

// -------------------------------------------------------------
// MODULE 2: C Variables & Data Types (+10 Questions)
// -------------------------------------------------------------
addQ(2, "What is the typical size of a standard 'char' data type in ISO C?",
  "1 byte (8 bits)",
  "2 bytes (16 bits)",
  "4 bytes (32 bits)",
  "8 bytes (64 bits)",
  "A", "In C, sizeof(char) is strictly guaranteed to be exactly 1 byte.", 1);

addQ(2, "Which format specifier is used in printf() to print a floating-point number with double precision ('double')?",
  "%d",
  "%f (or %lf in scanf)",
  "%c",
  "%s",
  "B", "%f is used for double/float in printf(), while %lf is explicitly required for double in scanf().", 1);

addQ(2, "Which format specifier is used to print an unsigned integer in hexadecimal format (lowercase)?",
  "%d",
  "%x",
  "%o",
  "%u",
  "B", "%x formats unsigned integer values as lowercase hexadecimal (e.g. 0x2a); %X produces uppercase.", 2);

addQ(2, "What is the minimum value an 'unsigned int' can hold?",
  "-32768",
  "0",
  "-2147483648",
  "1",
  "B", "Unsigned integer types can only represent non-negative numbers, with a minimum value of 0.", 1);

addQ(2, "Which keyword in C is used to define an alias or alternative name for an existing data type?",
  "alias",
  "typedef",
  "define",
  "rename",
  "B", "typedef creates synonymous identifiers for data types (e.g. typedef unsigned long ulong;).", 2);

addQ(2, "What does the 'sizeof' operator return in C?",
  "The number of elements in a dynamically allocated array",
  "The memory size of a type or variable in bytes (as size_t)",
  "The number of bits in a register",
  "The memory address of the variable",
  "B", "sizeof evaluates the storage size in bytes required for an object representation.", 2);

addQ(2, "Which standard header must be included to use fixed-width integer types like 'uint32_t' and 'int64_t' in C99?",
  "<stdlib.h>",
  "<stdint.h>",
  "<stddef.h>",
  "<limits.h>",
  "B", "<stdint.h> provides exact-width integer types guaranteed across all hardware architectures.", 2);

addQ(2, "What happens when an integer variable exceeds its maximum representable positive value (Integer Overflow) in signed arithmetic?",
  "It raises a compile-time fatal exception",
  "Signed integer overflow invokes Undefined Behavior in ISO C",
  "It automatically converts to a floating point number",
  "It resets to zero safely",
  "B", "Signed overflow is undefined behavior in ISO C, whereas unsigned overflow wraps modulo 2^N.", 3);

addQ(2, "What type does the literal '3.14' default to in C if no suffix is appended?",
  "float",
  "double",
  "long double",
  "int",
  "B", "Floating-point literals without suffixes (like 3.14) are typed as double. Use 3.14f for single-precision float.", 2);

addQ(2, "Which type qualifier prevents a variable from being modified after its initial assignment?",
  "static",
  "const",
  "volatile",
  "register",
  "B", "const marks a variable as read-only, causing compiler errors if reassigned.", 1);

// -------------------------------------------------------------
// MODULE 3: C Constants & Operators (+10 Questions)
// -------------------------------------------------------------
addQ(3, "What is the difference between prefix increment (++x) and postfix increment (x++) in an expression?",
  "Prefix increments the value before evaluating the expression; postfix evaluates the current value first, then increments",
  "Prefix adds 2, postfix adds 1",
  "Prefix works only on pointers; postfix works on integers",
  "There is no functional difference in C",
  "A", "++x returns the incremented result immediately, while x++ yields the original value before mutating x.", 2);

addQ(3, "What is the result of integer division '7 / 2' in C?",
  "3.5",
  "3 (truncated toward zero)",
  "4",
  "Runtime error",
  "B", "Integer division truncates any fractional remainder, returning 3.", 1);

addQ(3, "Which operator returns the remainder of an integer division in C?",
  "//",
  "% (Modulo operator)",
  "rem()",
  "mod",
  "B", "The % modulo operator computes the remainder (e.g. 7 % 2 == 1).", 1);

addQ(3, "What is the bitwise AND operator in C?",
  "&&",
  "&",
  "|",
  "^",
  "B", "& is bitwise AND (operating on individual binary bits), while && is logical boolean AND.", 2);

addQ(3, "What is the bitwise XOR (Exclusive OR) operator in C?",
  "^",
  "~",
  "|",
  "!",
  "A", "^ performs bitwise XOR, returning 1 when operand bits differ and 0 when they match.", 2);

addQ(3, "What does the left bit-shift operator 'x << 1' effectively do to an integer x (assuming no overflow)?",
  "Divides x by 2",
  "Multiplies x by 2",
  "Adds 1 to x",
  "Inverts all bits of x",
  "B", "Shifting binary bits left by 1 position doubles the integer value (multiplication by 2^n).", 2);

addQ(3, "What is the ternary conditional operator syntax in C?",
  "if condition then x else y",
  "condition ? expression_true : expression_false",
  "condition -> x | y",
  "select(condition, x, y)",
  "B", "The ternary operator (? :) evaluates to expression_true if condition is non-zero, else expression_false.", 1);

addQ(3, "What does the comma operator ',' do in a compound C expression?",
  "Throws a syntax error",
  "Evaluates the left operand, discards the result, then evaluates and returns the right operand",
  "Combines two values into an array",
  "Multiplies both values",
  "B", "The comma operator evaluates expressions sequentially from left to right, yielding the value of the rightmost operand.", 3);

addQ(3, "Which operator has higher precedence in C: Multiplication (*) or Addition (+)?",
  "Addition (+)",
  "Multiplication (*)",
  "Both have equal precedence",
  "Depends on compiler flags",
  "B", "Multiplication, division, and modulo have higher precedence than binary addition and subtraction.", 1);

addQ(3, "What is the value of '!0' (logical NOT zero) in C?",
  "0",
  "1 (true)",
  "-1",
  "Undefined",
  "B", "In C, zero represents false; logical NOT on zero evaluates to 1 (true).", 1);

// -------------------------------------------------------------
// MODULE 4: C Booleans & If...Else (+10 Questions)
// -------------------------------------------------------------
addQ(4, "In C, how are truth values evaluated in conditional if() statements?",
  "Only exact value 1 is true",
  "Zero (0) is FALSE; ANY non-zero value (positive or negative) is TRUE",
  "Only boolean true objects are valid",
  "Strings are always false",
  "B", "Any non-zero numerical evaluation is treated as true in control flow expressions.", 1);

addQ(4, "Which header must be included in C99 to use the 'bool', 'true', and 'false' identifiers?",
  "<boolean.h>",
  "<stdbool.h>",
  "<bool.h>",
  "<types.h>",
  "B", "<stdbool.h> defines bool as _Bool, true as 1, and false as 0.", 1);

addQ(4, "What is 'Short-Circuit Evaluation' in logical expressions (&& and ||)?",
  "The second operand is only evaluated if the first operand does not determine the outcome",
  "Both operands are evaluated concurrently in hardware",
  "Expressions are evaluated right-to-left",
  "Syntax error on long lines",
  "A", "In 'A && B', if A is false, B is never evaluated. In 'A || B', if A is true, B is skipped.", 2);

addQ(4, "What is a common semantic bug when writing 'if (x = 5)' instead of 'if (x == 5)'?",
  "It will fail to compile",
  "It assigns 5 to x and always evaluates as TRUE (because 5 is non-zero)",
  "It compares x with 5 correctly",
  "It sets x to 0",
  "B", "= is assignment; == is equality comparison. 'x = 5' assigns 5, which evaluates to non-zero (true).", 2);

addQ(4, "What is the 'Dangling Else' ambiguity in nested if statements resolved by in C?",
  "An 'else' always binds to the closest preceding unmatched 'if' in the same block scope",
  "An 'else' binds to the first 'if' in the file",
  "It causes a compilation error",
  "It binds randomly",
  "A", "C grammar binds an else clause to the nearest inner unclosed if statement.", 2);

addQ(4, "What does the expression '(5 > 3) && (2 < 4)' evaluate to?",
  "0",
  "1 (true)",
  "5",
  "2",
  "B", "Both sub-expressions (5 > 3) and (2 < 4) are true (1); 1 && 1 yields 1.", 1);

addQ(4, "What does the expression '(10 == 20) || (3 != 4)' evaluate to?",
  "0",
  "1 (true)",
  "false",
  "Error",
  "B", "(10 == 20) is false (0), but (3 != 4) is true (1); 0 || 1 yields 1.", 1);

addQ(4, "Why is using curly braces '{}' recommended even for single-line if-statement bodies?",
  "It prevents accidental macro expansion bugs and prevents logic errors when subsequent lines are added",
  "It makes code run 10x faster",
  "C compilers reject if statements without braces",
  "It allocates extra heap memory",
  "A", "Braceless blocks are prone to maintenance errors (e.g. goto fail bug).", 1);

addQ(4, "What is the output of: int x = 0; if (x) printf(\"A\"); else printf(\"B\"); ?",
  "A",
  "B",
  "AB",
  "Compilation error",
  "B", "x is 0 (false), so the else branch executes and prints 'B'.", 1);

addQ(4, "How do you check if an integer 'num' is even in C?",
  "if (num / 2 == 1)",
  "if (num % 2 == 0)",
  "if (num & 2)",
  "if (num.isEven())",
  "B", "num % 2 yields 0 for even numbers and 1 (or -1) for odd numbers.", 1);

// -------------------------------------------------------------
// MODULE 5: C Switch Statements (+10 Questions)
// -------------------------------------------------------------
addQ(5, "What happens if a 'break;' statement is omitted at the end of a switch case block ('Fall-through')?",
  "The program immediately crashes",
  "Execution continues unconditionally into the statements of the next consecutive case",
  "The switch statement resets to case 1",
  "The compiler raises a fatal syntax error",
  "B", "Without break, control falls through and executes following case blocks sequentially.", 2);

addQ(5, "What data types are legally permitted in a C switch expression?",
  "Only integer types (int, char, enum, short, long)",
  "Floating point types (float, double)",
  "String literals and character arrays",
  "Pointers only",
  "A", "Switch expressions in ISO C must evaluate to integral types or enumerations; floats and strings are prohibited.", 2);

addQ(5, "What is the purpose of the 'default:' label in a switch statement?",
  "It is executed first before any case",
  "It executes when none of the explicit 'case' constant values match the switch expression",
  "It declares default variable values",
  "It is mandatory in every switch block",
  "B", "default acts as a fallback catch-all when no case values match.", 1);

addQ(5, "Can case labels in a C switch statement contain variables (e.g. 'case x:')?",
  "Yes, any variable can be used",
  "No, case labels must be compile-time integer constant expressions (e.g. 'case 5:' or 'case 'A':')",
  "Yes, if the variable is declared global",
  "Only if using GCC compiler extensions",
  "B", "Case labels must resolve to compile-time constant integer values.", 2);

addQ(5, "Can multiple case labels share a single code block in a switch statement?",
  "No, each case must have unique duplicate code",
  "Yes, by stacking case labels consecutively (e.g. case 'a': case 'A': doSomething(); break;)",
  "Only in C++",
  "Only using goto",
  "B", "Stacking case labels allows multiple values to trigger the same action via intentional fallthrough.", 1);

addQ(5, "Can a switch statement contain duplicate case values (e.g. two 'case 1:' labels)?",
  "Yes, both will execute",
  "No, duplicate case values cause a compilation error",
  "Yes, only the first one executes",
  "Only if separated by break",
  "B", "Duplicate case constant expressions in the same switch block violate C grammar and fail to compile.", 2);

addQ(5, "What is 'Duff's Device' in advanced C programming?",
  "A debugger hardware tool",
  "An unrolled loop optimization technique interleaving a switch statement inside a do-while loop",
  "A method to allocate virtual memory",
  "A dynamic linking protocol",
  "B", "Duff's Device exploits switch case fall-through inside a loop for high-speed block data copying.", 3);

addQ(5, "Where can the 'default:' label be placed inside a switch block?",
  "Strictly at the very end only",
  "Anywhere inside the switch block (beginning, middle, or end)",
  "Strictly at the beginning before case labels",
  "It must be outside the switch braces",
  "B", "default may appear anywhere inside the switch body, though placing it at the end is standard convention.", 2);

addQ(5, "Why is declaring a new variable with initialization directly inside a case label invalid without enclosing braces?",
  "Case labels are jump targets; jumping past variable initialization into scope violates C scoping rules",
  "Variables cannot be created inside switch statements",
  "Memory cannot be allocated in switch statements",
  "Stack pointer overflows",
  "A", "Jumping over a variable initialization causes scope errors; use '{ ... }' to create a distinct sub-block.", 3);

addQ(5, "What is the output of: int c = 2; switch(c) { case 1: printf(\"1\"); case 2: printf(\"2\"); case 3: printf(\"3\"); } ?",
  "2",
  "23 (due to fall-through)",
  "123",
  "Compilation error",
  "B", "Matching case 2 prints '2', and without a break, falls through to case 3 to print '3', outputting '23'.", 2);

// -------------------------------------------------------------
// MODULE 6: C Loops (While, Do-While & For) (+10 Questions)
// -------------------------------------------------------------
addQ(6, "What is the key functional difference between a 'while' loop and a 'do-while' loop?",
  "while tests condition before execution; do-while executes the loop body AT LEAST ONCE before evaluating the condition",
  "do-while runs faster in memory",
  "while cannot use break",
  "do-while does not support integer counters",
  "A", "do-while is a post-test loop guaranteed to execute its body at least once.", 1);

addQ(6, "What does the 'continue;' statement do inside a loop body?",
  "Terminates the entire loop immediately",
  "Skips the remainder of the current iteration and jumps directly to the next loop iteration test/increment",
  "Restarts the entire program",
  "Pauses execution for 1 second",
  "B", "continue bypasses remaining statements in the current iteration and cycles to the next iteration step.", 1);

addQ(6, "What does the 'break;' statement do when encountered inside an active loop?",
  "Immediately terminates the innermost enclosing loop and transfers control to the statement following the loop",
  "Skips one iteration",
  "Throws an exception",
  "Halts the operating system",
  "A", "break exits the innermost loop structure immediately.", 1);

addQ(6, "What constitutes an intentional infinite loop in C syntax?",
  "for (;;)",
  "while (1)",
  "do { } while (1);",
  "All of the above are valid infinite loops",
  "D", "All three idioms create infinite loops in standard C.", 1);

addQ(6, "In a standard 'for (init; condition; increment)' loop, when is the increment expression executed?",
  "Before the loop body executes",
  "At the end of each iteration cycle, before re-testing the condition",
  "Only when the loop terminates",
  "Concurrently with the condition",
  "B", "The increment step runs after the body statements complete in each iteration.", 1);

addQ(6, "In C99, is declaring loop counter variables inside the for header (e.g. 'for (int i = 0; ...)') permitted?",
  "No, variables must always be declared at the top of the function",
  "Yes, C99 introduced block-scoped loop declarations in for-loop headers",
  "Only with C++ compilers",
  "Only for floating point counters",
  "B", "C99 allows variable declarations directly inside the for loop initialization clause.", 1);

addQ(6, "What is an 'Off-by-One' error (OBOE) in loop index iteration?",
  "A logic error where a loop iterates one time too many or one time too few (e.g. using '<=' instead of '<')",
  "A hardware bit flip",
  "A compiler optimization error",
  "An odd number parity failure",
  "A", "OBOE occurs when boundary limits are miscalculated by 1 index position.", 1);

addQ(6, "How many times will the loop 'for (int i = 0; i < 5; i++)' execute its body?",
  "4 times",
  "5 times (for i = 0, 1, 2, 3, 4)",
  "6 times",
  "Infinite times",
  "B", "The loop runs for indices 0, 1, 2, 3, and 4 (exactly 5 iterations).", 1);

addQ(6, "What is loop unrolling in compiler optimization?",
  "Converting a loop into a recursive function",
  "Replicating the loop body multiple times to reduce loop control branching overhead and exploit instruction-level parallelism",
  "Removing all loops from source code",
  "Replacing while with do-while",
  "B", "Loop unrolling reduces jump/counter overhead by processing multiple array items per iteration.", 3);

addQ(6, "What happens if the condition in a 'while (condition)' loop is never modified inside the loop body and remains non-zero?",
  "The loop becomes an infinite loop and runs indefinitely",
  "The program automatically exits after 100 iterations",
  "A compiler warning terminates execution",
  "Memory is purged",
  "A", "Failure to update condition variables causes indefinite execution.", 1);

// -------------------------------------------------------------
// MODULE 7: C Arrays & Matrices (+10 Questions)
// -------------------------------------------------------------
addQ(7, "In C, array indexing is based on which numbering system?",
  "1-based indexing",
  "0-based indexing (first element is at index 0)",
  "Pointer-based only",
  "Dynamic indexing",
  "B", "Array elements in C are indexed from 0 to N-1.", 1);

addQ(7, "What is the memory layout of elements in a one-dimensional C array?",
  "Scattered randomly across the heap",
  "Contiguous in memory (elements are stored sequentially one after another in a continuous block)",
  "Stored as a linked list",
  "Segmented across different CPU cache lines only",
  "B", "Arrays are guaranteed to occupy contiguous memory locations.", 1);

addQ(7, "How is a 2D array 'int matrix[3][4]' laid out in physical memory in C?",
  "Column-major order",
  "Row-major order (row 0 elements first, followed by row 1, then row 2)",
  "Diagonal-major order",
  "Block tree structure",
  "B", "C stores multi-dimensional arrays in contiguous row-major order.", 2);

addQ(7, "What happens if you access an array out of bounds (e.g. accessing 'arr[10]' on an array of size 5) in C?",
  "An ArrayIndexOutOfBoundsException is thrown",
  "It results in Undefined Behavior (may corrupt memory, read garbage data, or cause a Segmentation Fault)",
  "The array automatically resizes to 11 elements",
  "The program safely returns 0",
  "B", "C does not perform automated array bounds checking at runtime.", 2);

addQ(7, "If an array is declared as 'int arr[5] = {1, 2};', what are the values of the remaining uninitialized elements?",
  "Random garbage values",
  "Automatically initialized to zero (0)",
  "Null pointers",
  "-1",
  "B", "Partial initializer lists cause remaining elements to be zero-initialized.", 2);

addQ(7, "How do you calculate the number of elements in a statically declared array 'int arr[20]' in C?",
  "arr.length",
  "sizeof(arr) / sizeof(arr[0])",
  "count(arr)",
  "length(arr)",
  "B", "Dividing total array byte size by single element byte size yields element count.", 2);

addQ(7, "When an array name is passed as an argument to a function, what does it decay into?",
  "A complete duplicate copy of the entire array",
  "A pointer to its first element (pointer decay)",
  "An integer hash code",
  "A struct wrapper",
  "B", "Array identifiers decay into a pointer to element 0 when passed to functions.", 2);

addQ(7, "In C99, what is a Variable Length Array (VLA)?",
  "An array whose size is determined at runtime based on an integer variable value (allocated on the stack)",
  "An array that can grow dynamically like a vector",
  "An array stored in global memory",
  "A linked list",
  "A", "VLAs allow stack allocation with runtime size expressions (e.g. int arr[n];).", 2);

addQ(7, "Can the size of a standard fixed-size stack array be modified after declaration in C?",
  "Yes, using realloc()",
  "No, stack array sizes are fixed at compile time and cannot be resized",
  "Yes, using the resize keyword",
  "Only if declared volatile",
  "B", "Static array dimensions are immutable; dynamic resizing requires heap pointers with malloc/realloc.", 1);

addQ(7, "What is the value of '*(arr + 3)' identical to in array subscript notation?",
  "arr[3]",
  "arr[4]",
  "&arr[3]",
  "*arr[3]",
  "A", "Array subscripting 'arr[i]' is syntactic sugar for '*(arr + i)'.", 2);

// -------------------------------------------------------------
// MODULE 8: C Strings & String Functions (+10 Questions)
// -------------------------------------------------------------
addQ(8, "What character is used to terminate strings in C?",
  "Newline character ('\\n')",
  "Null terminator byte ('\\0' or ASCII 0)",
  "Dollar sign ('$')",
  "EOF marker",
  "B", "C strings are null-terminated character arrays ending with '\\0'.", 1);

addQ(8, "Which standard library function calculates the length of a string (excluding the null terminator)?",
  "length()",
  "strlen() from <string.h>",
  "strcount()",
  "sizeof()",
  "B", "strlen() counts characters up to (but not including) the terminating '\\0'.", 1);

addQ(8, "Why is the standard library function 'strcpy()' considered unsafe in modern C programming?",
  "It does not perform buffer bounds checking and can cause buffer overflow vulnerabilities if the source string exceeds the destination buffer",
  "It is too slow",
  "It deletes the source string",
  "It only works on ASCII characters",
  "A", "strcpy() writes past buffer limits; strncpy() or safe alternatives should be used.", 2);

addQ(8, "Which function compares two strings lexicographically in C?",
  "strcmp(str1, str2)",
  "strequal(str1, str2)",
  "str1 == str2",
  "compare(str1, str2)",
  "A", "strcmp() returns 0 if strings match, negative if str1 < str2, positive if str1 > str2.", 1);

addQ(8, "Which function concatenates (appends) a source string to the end of a destination string?",
  "stradd()",
  "strcat() from <string.h>",
  "strappend()",
  "strjoin()",
  "B", "strcat() appends source characters to the destination buffer.", 1);

addQ(8, "What does 'strcmp(\"apple\", \"banana\")' return?",
  "0",
  "A negative integer (because 'a' < 'b' in ASCII)",
  "A positive integer",
  "Boolean true",
  "B", "Since 'apple' precedes 'banana' alphabetically, strcmp returns a negative value.", 2);

addQ(8, "What happens if you attempt to modify a string literal (e.g. 'char *s = \"hello\"; s[0] = 'H';') in C?",
  "It updates the string successfully",
  "It causes Undefined Behavior / Segmentation Fault because string literals are stored in read-only memory",
  "It creates a new string copy",
  "It returns null",
  "B", "String literals reside in read-only data segments; mutating them triggers access violations.", 2);

addQ(8, "Which function safely writes formatted data into a character string buffer with size limits?",
  "sprintf()",
  "snprintf()",
  "printf()",
  "strformat()",
  "B", "snprintf() takes a max size parameter to strictly prevent buffer overruns.", 2);

addQ(8, "Which function finds the first occurrence of a character in a string?",
  "strchr()",
  "strstr()",
  "strfind()",
  "strsearch()",
  "A", "strchr() returns a pointer to the first occurrence of character c in string s, or NULL.", 2);

addQ(8, "Which function finds the first occurrence of a substring within another string in C?",
  "strstr()",
  "strchr()",
  "strpos()",
  "strsub()",
  "A", "strstr() locates a target substring within a source string.", 2);

// -------------------------------------------------------------
// MODULE 9: C User Input & I/O (+10 Questions)
// -------------------------------------------------------------
addQ(9, "Why must variable arguments passed to 'scanf()' be prefixed with the address-of operator '&' (e.g. 'scanf(\"%d\", &x)')?",
  "Because scanf requires pointer memory addresses to write parsed input into the caller's variables",
  "To make the code thread-safe",
  "To convert variables to strings",
  "It is optional in C",
  "A", "C is pass-by-value; scanf must receive pointer addresses to mutate caller variables.", 1);

addQ(9, "Why was the standard 'gets()' function permanently removed in the ISO C11 standard?",
  "It was too slow",
  "It lacked buffer size limits, making buffer overflow exploits unavoidable",
  "It conflicted with C++",
  "It only read 10 characters",
  "B", "gets() is intrinsically insecure and was deprecated in C99 and removed in C11.", 2);

addQ(9, "Which safe function should be used instead of 'gets()' to read a line of text from standard input?",
  "fgets(buffer, sizeof(buffer), stdin)",
  "scanf(\"%s\", buffer)",
  "get_line(buffer)",
  "read_text(buffer)",
  "A", "fgets() specifies maximum buffer capacity and reads from stdin safely.", 1);

addQ(9, "What does 'getchar()' return when it reaches the end of the input stream?",
  "0",
  "EOF (End of File constant, typically -1)",
  "Null byte '\\0'",
  "Newline '\\n'",
  "B", "getchar() returns EOF (type int) upon reaching end of file or input error.", 2);

addQ(9, "What is the return value of 'scanf()' upon successful execution?",
  "The number of input items successfully matched and assigned",
  "The total number of characters read",
  "Always 0",
  "Memory address of input",
  "A", "scanf() returns the count of successfully matched conversion items.", 2);

addQ(9, "What is the purpose of 'fflush(stdout)'?",
  "Clears keyboard input buffer",
  "Flushes unwritten buffered output data immediately to the display console",
  "Closes standard output",
  "Resets screen resolution",
  "B", "fflush(stdout) forces buffered stream output to be written immediately to the terminal.", 2);

addQ(9, "Which standard stream in C is dedicated for unbuffered diagnostic error messages?",
  "stdin",
  "stdout",
  "stderr",
  "stdlog",
  "C", "stderr (standard error) writes diagnostic logs unbuffered so errors appear even if program crashes.", 2);

addQ(9, "What happens when 'scanf(\"%s\", str)' encounters whitespace (space, tab, or newline)?",
  "It includes the space in the string",
  "It stops reading and terminates the string with '\\0'",
  "It crashes",
  "It replaces space with underscore",
  "B", "The %s specifier stops reading at the first whitespace character.", 1);

addQ(9, "Which function writes a single character to standard output?",
  "putchar(c)",
  "putc_str(c)",
  "write_char(c)",
  "print_one(c)",
  "A", "putchar() outputs a single character to stdout.", 1);

addQ(9, "How do you read a full line containing spaces using scanf safely?",
  "scanf(\"%s\", buffer)",
  "scanf(\" %49[^\\n]\", buffer)",
  "scanf(\"%line\", buffer)",
  "scanf(\"%all\", buffer)",
  "B", "The scanset %[^\n] with a length limit reads all characters up to the newline character.", 2);

// -------------------------------------------------------------
// MODULE 10: C Functions & Scope (+10 Questions)
// -------------------------------------------------------------
addQ(10, "What is a 'Function Prototype' (forward declaration) in C?",
  "The compiled binary of a function",
  "A declaration specifying the function's name, return type, and parameter types before its actual definition",
  "A recursive function call",
  "A macro definition",
  "B", "Prototypes inform the compiler of function signatures before call sites occur.", 1);

addQ(10, "In C, are function arguments passed by value or by reference by default?",
  "Pass by Reference",
  "Pass by Value (a local copy of each argument is created in the function's stack frame)",
  "Pass by Pointer automatically",
  "Pass by Name",
  "B", "C exclusively uses pass-by-value; pass-by-reference is simulated by passing pointer addresses.", 2);

addQ(10, "What does the 'static' storage class specifier do when applied to a local variable inside a function?",
  "Makes the variable read-only",
  "Preserves the variable's value across multiple function calls, maintaining static lifetime throughout program execution",
  "Allocates the variable on heap",
  "Allows access from other files",
  "B", "Static local variables retain their values across function invocations throughout program lifetime.", 2);

addQ(10, "What does the 'static' keyword do when applied to a global function or variable at file scope?",
  "Restricts its linkage and visibility strictly to that translation unit (file), preventing external access",
  "Makes it thread-safe",
  "Exports it to all C files",
  "Prevents optimization",
  "A", "Internal linkage (static) hides functions and global variables from other source files.", 2);

addQ(10, "What is 'Recursion' in C programming?",
  "A loop that never ends",
  "A programming technique where a function calls itself to solve smaller subproblems until reaching a base case",
  "Dynamic memory allocation",
  "Pointer arithmetic",
  "B", "Recursive functions call themselves until satisfying terminating base conditions.", 1);

addQ(10, "What fatal error occurs if a recursive function lacks a proper base case or recurses too deeply?",
  "Segmentation fault due to Stack Overflow (call stack exhaustion)",
  "Heap corruption",
  "CPU overheating",
  "Syntax warning",
  "A", "Unbounded recursion exhausts stack memory allocation, triggering stack overflow crashes.", 2);

addQ(10, "What does the 'inline' function specifier suggest to the C compiler?",
  "Execute function asynchronously",
  "Suggests replacing function calls with the actual body code to eliminate call overhead",
  "Export function to shared library",
  "Force function to run in kernel mode",
  "B", "inline advises the compiler to inline code at call sites to eliminate call frame overhead.", 2);

addQ(10, "What is the return type of a function that does not return any value?",
  "null",
  "void",
  "empty",
  "int",
  "B", "void denotes an absence of return value.", 1);

addQ(10, "Which standard header defines macros for handling variable-argument functions (variadic functions like printf)?",
  "<stdarg.h>",
  "<varargs.h>",
  "<stdio.h>",
  "<stddef.h>",
  "A", "<stdarg.h> provides va_list, va_start, va_arg, and va_end macros.", 2);

addQ(10, "What is a 'Pure Function' in software design?",
  "A function written without any comments",
  "A function whose return value depends solely on its input arguments, producing no observable side effects",
  "A function that returns void",
  "A function with 0 parameters",
  "B", "Pure functions produce deterministic output from inputs without mutating global state.", 2);

// -------------------------------------------------------------
// MODULE 11: C Memory & Pointers (+10 Questions)
// -------------------------------------------------------------
addQ(11, "What does the dereference operator '*' do when applied to a pointer variable (e.g. '*ptr')?",
  "Multiplies the pointer by 2",
  "Accesses or modifies the value stored at the memory address pointed to by the pointer",
  "Gets the address of the pointer itself",
  "Deallocates the pointer memory",
  "B", "*ptr accesses the target data value at the referenced memory address.", 1);

addQ(11, "What is a 'NULL' pointer in C?",
  "A pointer pointing to random heap data",
  "A pointer assigned a special reserved value (address 0) indicating it does not point to any valid memory object",
  "A pointer to a character array",
  "An uninitialized pointer",
  "B", "NULL indicates a non-pointing reference. Dereferencing NULL causes instant segmentation faults.", 1);

addQ(11, "What is a 'Dangling Pointer' in C memory management?",
  "A pointer pointing to a memory location that has already been deallocated (freed)",
  "A pointer with a value of NULL",
  "A pointer inside a loop",
  "A function pointer",
  "A", "Dangling pointers reference invalidated memory, causing critical use-after-free bugs.", 2);

addQ(11, "What does Pointer Arithmetic 'ptr + 1' do on a pointer of type 'int *' (assuming 4-byte integers)?",
  "Adds 1 byte to the memory address",
  "Advances the memory address by sizeof(int) (4 bytes) to point to the next contiguous integer",
  "Multiplies the address by 2",
  "Increments the integer value stored at ptr",
  "B", "Pointer arithmetic scales automatically by the byte size of the underlying target data type.", 2);

addQ(11, "What is a 'Void Pointer' (void *) in C?",
  "A pointer that cannot point to anything",
  "A generic, typeless pointer that can hold the memory address of any data type without type casting",
  "A pointer to a function returning void",
  "A corrupted pointer",
  "B", "void * is a universal generic pointer type used in memory functions like malloc and memcpy.", 2);

addQ(11, "Which dynamic memory allocation function allocates a contiguous block of bytes from the heap WITHOUT initializing them?",
  "calloc()",
  "malloc()",
  "realloc()",
  "alloca()",
  "B", "malloc(size) allocates uninitialized heap memory containing indeterminate garbage bytes.", 1);

addQ(11, "Which dynamic memory allocation function allocates memory and zeroes out all allocated bytes?",
  "calloc(num_elements, element_size)",
  "malloc()",
  "alloc_zero()",
  "memset()",
  "A", "calloc() allocates memory and initializes all bytes to zero.", 1);

addQ(11, "What is a 'Memory Leak' in C?",
  "When computer RAM overheats",
  "When dynamically allocated heap memory (via malloc/calloc) is no longer referenced but never released with free(), consuming available RAM",
  "When stack overflow occurs",
  "When a file is deleted from hard disk",
  "B", "Memory leaks occur when allocated heap blocks are abandoned without calling free().", 1);

addQ(11, "What is the consequence of 'Double Free' (calling free() twice on the same memory pointer)?",
  "It frees the memory twice as fast",
  "It causes heap corruption and Undefined Behavior, often leading to security exploits or immediate crash",
  "It safely returns 0",
  "It reallocates the memory",
  "B", "Double free corrupts heap allocator metadata and is a major security vulnerability.", 3);

addQ(11, "What is a 'Function Pointer' in C?",
  "A pointer pointing to a variable in main()",
  "A pointer that stores the memory address of executable code (a function) allowing dynamic callback invocation",
  "A function that returns a pointer",
  "A recursive pointer",
  "B", "Function pointers store code addresses and enable callbacks and runtime polymorphism.", 2);

// -------------------------------------------------------------
// MODULE 12: C Structs, Enums & File I/O (+10 Questions)
// -------------------------------------------------------------
addQ(12, "Which operator is used to access struct members through a pointer to that struct (e.g. 'ptr->member')?",
  "Dot operator (.)",
  "Arrow operator (->)",
  "Colon operator (::)",
  "Tilde operator (~)",
  "B", "Arrow operator 'ptr->x' is shorthand for '(*ptr).x'.", 1);

addQ(12, "What is 'Structure Padding' in C memory alignment?",
  "Adding comments inside a struct definition",
  "Unused bytes inserted by the compiler between struct members to align data types with natural hardware word boundaries for fast CPU access",
  "Compressing struct members to save disk space",
  "Converting struct to a string",
  "B", "Compilers insert padding bytes so members align with CPU word boundaries (e.g. 4 or 8 bytes).", 3);

addQ(12, "What is the key difference between a 'struct' and a 'union' in C?",
  "In a struct, each member has its own separate memory; in a union, all members share the exact same memory location (size equals largest member)",
  "Unions can only hold integers",
  "Structs cannot hold pointers",
  "There is no difference in ISO C",
  "A", "Unions overlay all member fields over the same shared memory offset.", 2);

addQ(12, "Which standard library function opens a file stream in C?",
  "open_file()",
  "fopen(filename, mode)",
  "file_open()",
  "fs_open()",
  "B", "fopen() opens a file and returns a FILE * stream handle, or NULL on failure.", 1);

addQ(12, "What does the file open mode '\"rb\"' specify in fopen()?",
  "Open file for writing in text mode",
  "Open an existing file for reading in binary mode",
  "Reboot system",
  "Read and backup file",
  "B", "\"rb\" opens an existing binary file for input reading without newline translation.", 2);

addQ(12, "Which function writes raw binary blocks of memory directly to a file stream?",
  "fprintf()",
  "fwrite(ptr, size, count, stream)",
  "fputs()",
  "write_raw()",
  "B", "fwrite() writes raw binary buffers to streams.", 2);

addQ(12, "Which function reads raw binary data from a file stream into a memory buffer?",
  "fread(ptr, size, count, stream)",
  "fscanf()",
  "fgetc()",
  "read_binary()",
  "A", "fread() reads binary records from a file stream directly into memory.", 2);

addQ(12, "Which function repositions the file position indicator in a file stream to a specific byte offset?",
  "fseek(stream, offset, whence)",
  "ftell()",
  "rewind_file()",
  "set_cursor()",
  "A", "fseek() moves the stream file pointer relative to SEEK_SET, SEEK_CUR, or SEEK_END.", 2);

addQ(12, "What does 'ftell(stream)' return?",
  "The current byte position offset of the file indicator from the beginning of the file",
  "Total number of lines in the file",
  "File permissions",
  "Disk capacity",
  "A", "ftell() reports the current file position offset in bytes.", 2);

addQ(12, "Why must 'fclose(stream)' always be called when file I/O operations are finished?",
  "To prevent file system corruption, flush cached output buffers, and release OS file descriptor handles",
  "To delete the file from disk",
  "To encrypt file data",
  "It is optional and does nothing",
  "A", "Closing files flushes remaining buffer caches and releases OS handle resources.", 1);

// -------------------------------------------------------------
// MODULE 13: Math, Memory Resizing & Advanced I/O (+10 Questions)
// -------------------------------------------------------------
addQ(13, "Which standard library function dynamically changes the size of previously allocated heap memory?",
  "resize()",
  "realloc(ptr, new_size)",
  "calloc()",
  "heap_expand()",
  "B", "realloc() expands or contracts existing heap allocations, migrating data if necessary.", 2);

addQ(13, "What is the safe idiom for realloc() to prevent memory leaks if realloc() fails and returns NULL?",
  "Assign directly to original pointer: 'ptr = realloc(ptr, new_size);'",
  "Use a temporary pointer: 'void *tmp = realloc(ptr, new_size); if (tmp) ptr = tmp;'",
  "Never check for NULL",
  "Call free(ptr) before realloc",
  "B", "If realloc fails, assigning directly to ptr overwrites the pointer with NULL, leaking the original block.", 3);

addQ(13, "Which standard header must be included to use mathematical functions like sqrt(), pow(), and sin()?",
  "<cmath.h>",
  "<math.h>",
  "<numbers.h>",
  "<numeric.h>",
  "B", "<math.h> declares standard floating-point trigonometric and algebraic functions.", 1);

addQ(13, "When compiling a C program using <math.h> with GCC on Linux/Unix, which linker flag must be passed?",
  "-lm (links the standard math library libm)",
  "-lmath",
  "-math",
  "-std=math",
  "A", "-lm instructs the linker to link the system math library (libm.so/libm.a).", 2);

addQ(13, "Which function computes the square root of a double value in C?",
  "sqr()",
  "sqrt()",
  "root()",
  "power(x, 0.5)",
  "B", "sqrt(x) computes the non-negative square root of x.", 1);

addQ(13, "What does 'pow(2.0, 3.0)' evaluate to in <math.h>?",
  "6.0",
  "8.0",
  "5.0",
  "9.0",
  "B", "pow(x, y) raises x to the power y (2^3 = 8.0).", 1);

addQ(13, "Which function in <math.h> rounds a floating-point number UP to the nearest integer?",
  "floor()",
  "ceil()",
  "round()",
  "trunc()",
  "B", "ceil(3.2) returns 4.0 (smallest integer greater than or equal to x).", 1);

addQ(13, "Which function in <math.h> rounds a floating-point number DOWN to the nearest integer?",
  "floor()",
  "ceil()",
  "abs()",
  "down()",
  "A", "floor(3.8) returns 3.0 (largest integer less than or equal to x).", 1);

addQ(13, "Which function computes the absolute value of an integer in <stdlib.h>?",
  "fabs()",
  "abs()",
  "magnitude()",
  "norm()",
  "B", "abs() is for integers (<stdlib.h>); fabs() is for floating-point doubles (<math.h>).", 1);

addQ(13, "What does 'qsort()' from <stdlib.h> require as its 4th argument?",
  "An integer sorting flag",
  "A pointer to a comparator function: 'int (*compar)(const void *, const void *)'",
  "A temporary scratch buffer",
  "An array length multiplier",
  "B", "qsort() is a generic quicksort routine taking a comparator callback.", 2);

// -------------------------------------------------------------
// MODULE 14: Programming Foundations & Architecture (+10 Questions)
// -------------------------------------------------------------
addQ(14, "What are 'Header Guards' (#ifndef HEADER_H, #define HEADER_H, #endif) used for in C?",
  "To encrypt source code",
  "To prevent multiple redundant inclusions of the same header file during preprocessing",
  "To make headers read-only",
  "To speed up runtime CPU execution",
  "B", "Header guards prevent redefinition errors when headers are included transitively.", 2);

addQ(14, "What is '#pragma once' in modern C compilers?",
  "A non-standard but universally supported preprocessor directive serving as a concise header guard",
  "A command to compile the file only once in lifetime",
  "An optimization for single-threaded code",
  "A memory cleanup directive",
  "A", "#pragma once ensures the compiler includes the header file only once per translation unit.", 2);

addQ(14, "What is a 'Segmentation Fault' (SIGSEGV) in C programs?",
  "A disk drive hardware malfunction",
  "An operating system signal raised when a program attempts to access a memory address it does not have permission to read or write",
  "A compilation error",
  "A network timeout",
  "B", "SIGSEGV is triggered by invalid memory accesses like dereferencing NULL or out-of-bounds writes.", 2);

addQ(14, "What is a 'Buffer Overflow' and why is it a critical security risk?",
  "When a program writes data beyond the allocated boundary of a buffer, corrupting adjacent stack memory or return addresses",
  "When the hard drive fills up completely",
  "When video graphics buffer runs out of VRAM",
  "When too many print statements execute",
  "A", "Buffer overflows can overwrite stack frames and enable arbitrary code execution exploits.", 3);

addQ(14, "What tool is widely used on Linux to detect memory leaks, uninitialized memory reads, and out-of-bounds heap accesses in C programs?",
  "GDB",
  "Valgrind (Memcheck)",
  "GCC",
  "Make",
  "B", "Valgrind Memcheck dynamically detects heap memory leaks, invalid frees, and memory corruptions.", 2);

addQ(14, "What does the GCC flag '-Wall -Wextra -Werror' do during compilation?",
  "Disables all compiler warnings",
  "Enables all comprehensive warnings and treats all warnings as fatal errors, enforcing clean code standards",
  "Generates release binaries without debugging symbols",
  "Optimizes for minimal code size",
  "B", "Enabling strict warning flags catches subtle bugs, uninitialized variables, and type mismatches.", 2);

addQ(14, "What is a 'Makefile' in software engineering?",
  "A text file containing build targets, dependencies, and shell compiler rules executed by the 'make' automation utility",
  "A file containing raw machine code",
  "A list of software licenses",
  "An installation manual",
  "A", "Makefiles automate modular compilation based on file modification timestamps.", 2);

addQ(14, "What is the difference between static linking and dynamic linking in C?",
  "Static linking bundles library code directly into the executable binary; dynamic linking links shared libraries (.so/.dll) at runtime",
  "Static linking only works on Windows",
  "Dynamic linking is slower to write",
  "Static linking deletes source files",
  "A", "Static binaries are self-contained; dynamic binaries share library memory across running processes.", 2);

addQ(14, "What is the 'Stack' vs 'Heap' memory in C program architecture?",
  "Stack is automatically managed fast memory for local function variables; Heap is manually managed dynamic memory for lifetime-controlled allocations",
  "Stack is stored on disk; Heap is stored in CPU cache",
  "Stack is unlimited; Heap is 1 MB",
  "There is no difference in architecture",
  "A", "Stack frames are managed by function calls/returns; heap memory is allocated/freed manually via malloc/free.", 2);

addQ(14, "What does the 'volatile' type qualifier tell the C compiler?",
  "The variable can never be changed",
  "The variable may be modified unexpectedly by external hardware or concurrent threads, preventing compiler optimization caching",
  "The variable is stored on the GPU",
  "The variable is temporary",
  "B", "volatile forces direct memory reads/writes every time, bypassing register caching in memory-mapped I/O.", 3);

// -------------------------------------------------------------
// MODULE 15: C Mastery: Expert Diagnostics (+10 Questions)
// -------------------------------------------------------------
addQ(15, "What is 'Undefined Behavior' (UB) in the ISO C standard?",
  "A standard syntax error",
  "Code execution for which the C standard imposes no requirements; the program may crash, produce garbage output, or appear to work unpredictably",
  "A feature reserved for future C versions",
  "A cross-platform compatibility mode",
  "B", "UB allows compilers to assume illegal conditions never occur, leading to aggressive optimizations and unpredictable bugs.", 3);

addQ(15, "What is the 'Strict Aliasing Rule' in C?",
  "Pointers of different incompatible types cannot point to the same memory location, allowing compilers to assume their dereferences do not interfere",
  "Variables must have unique names",
  "Functions cannot have aliases",
  "Pointers cannot be cast to void *",
  "A", "Strict aliasing permits register caching by assuming different type pointers do not alias the same memory.", 3);

addQ(15, "What does AddressSanitizer (ASan) flag '-fsanitize=address' do when compiling with modern GCC/Clang?",
  "Encrypts memory addresses",
  "Instruments compiled code with fast memory error detection for out-of-bounds access, use-after-free, and stack bugs",
  "Compiles for 128-bit processors",
  "Removes all pointers from binary",
  "B", "ASan detects memory safety violations at runtime with minimal performance overhead.", 3);

addQ(15, "What is a 'Race Condition' in multi-threaded C programming using POSIX threads (pthread)?",
  "A competition between two CPU cores",
  "When two or more concurrent threads access shared memory simultaneously and at least one access is a write without synchronization (mutex)",
  "When a loop runs faster than expected",
  "A network transmission speed issue",
  "B", "Data races corrupt shared state; mutex locks or atomic operations are required to serialize access.", 3);

addQ(15, "What does the 'restrict' keyword (introduced in C99) signify when qualifying a pointer parameter?",
  "The pointer is read-only",
  "The pointer is the sole exclusive reference to the object it points to within that scope, enabling aggressive compiler vectorization",
  "The pointer cannot be passed to other functions",
  "The pointer is allocated on stack",
  "B", "restrict informs the optimizer that no other pointer will access the same memory block.", 3);

addQ(15, "What is an 'Atomic Operation' in concurrent C programming (stdatomic.h)?",
  "An operation that uses nuclear computing",
  "An indivisible memory read-modify-write operation that executes completely without possibility of interruption or data race from other threads",
  "An operation that destroys memory",
  "A floating point calculation",
  "B", "Atomic instructions execute as a single indivisible hardware step without mutex locking.", 3);

addQ(15, "Why is modifying a global variable inside an asynchronous Signal Handler considered hazardous in C?",
  "Signals can interrupt execution at any instruction; non-atomic signal modifications cause data corruption unless typed as 'volatile sig_atomic_t'",
  "Signal handlers cannot access memory",
  "It deletes the signal table",
  "It slows down internet speed",
  "A", "Only async-signal-safe functions and volatile sig_atomic_t variables can be safely modified in signal handlers.", 3);

addQ(15, "What is 'Memory Alignment' and why does unaligned memory access cause performance penalties or hardware faults on ARM/MIPS CPUs?",
  "CPUs fetch data in multi-byte word chunks; accessing data across word boundaries requires multiple memory bus cycles or triggers hardware alignment faults",
  "Memory must be arranged alphabetically",
  "Alignment is purely decorative",
  "Unaligned access causes hard drive fragmentation",
  "A", "CPUs access memory efficiently when addresses are multiples of natural data sizes (2, 4, 8 bytes).", 3);

addQ(15, "What is the purpose of the 'setjmp()' and 'longjmp()' functions in <setjmp.h>?",
  "To allocate jump tables in heap",
  "To perform non-local jumps (unwinding stack frames across functions) for low-level exception handling and error recovery",
  "To jump between different threads",
  "To reboot the processor",
  "B", "setjmp saves execution context and longjmp restores it, jumping across stack frames.", 3);

addQ(15, "What is a 'Zero-Day Vulnerability' frequently rooted in C memory unsafety?",
  "A bug that takes 0 days to fix",
  "A previously unknown software security flaw (such as a remote heap buffer overflow or use-after-free) exploited before developers release a patch",
  "A leap year calendar bug",
  "A compiler syntax error",
  "B", "C memory safety vulnerabilities are prime targets for zero-day remote code execution exploits.", 3);

pack.version = 4;
console.log("Total updated questions:", pack.questions.length);

fs.writeFileSync(packPath, JSON.stringify(pack, null, 2), 'utf8');
console.log("Updated pack_c_programming.json successfully!");
