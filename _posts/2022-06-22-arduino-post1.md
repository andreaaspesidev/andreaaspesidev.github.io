---
title: Programming Languages
author: andreaaspesi
date: 2022-06-22 12:41:00 +0100
categories: [Arduino, Tutorial]
tags: [arduino]
render_with_liquid: false

# Arduino Guide
image_url: /assets/img/arduino_guide/post_1.svg
description: >
  Let’s introduce programming languages, and their usage in the Arduino world, before moving on to the types of variables and memory management
order: 1
---

Many of you may have heard the term `programming languages` several times before.

As the word suggests, a programming language is a language – written – which is the expression of precise rules[^1]. It is a way that we have designed to communicate with the computer and explain what it has to do, and for this reason it is obviously characterized in a much more rigorous way than a language as we intend, suitable for human communication.

Even the smallest writing error (which we call `syntax error`) is not tolerable[^2]. However, we will see that we will not be allowed to generate programs with such errors, as they will be reported to us. *Don’t worry though, there are many other errors that will be left undetected!*

Each programming language identifies a different way to address the *machine* and tell it what to do. A curious reader might wonder why, then there are so many, and not just one.

Actually for each specific *machine* there is only one that hides behind them all[^3]. For the moment, we limit ourselves to observe that each programming language has a *power* and an *expressiveness* different from the others.

> We tend to make a distinction between `low-level` and `high-level` programming languages. As the *level* decreases, we have an increased complexity in explaining how to do a complex operation to the machine, but at the same time we have an increased control over hardware resources. This means we can perform the same operation using for example less memory, or do operations that are not directly possible in a *higher* language.
{: .prompt-tip}

[^1]: We call them `formal languages` for this reason.
[^2]: This is due to the fact that we usually transform more sophisticated languages into simpler ones via `compilation`, as we will see later on.
[^3]: We call it `ISA` (`Instruction Set Architecture`): for a specific processing unit it specifies the operation it understands, how to write them and the expected results.

## Arduino Resources
Arduino is mainly composed of:

- A `CPU`[^4], that is an integrated circuit capable of executing code (the *brain* of Arduino)
- `Analog and Digital I/O` pins, used by the cpu to interact with the external world
- Three types of memory:
  - `Flash memory`, like those of USB sticks, where our code is saved. 
  - `SRAM`, where the code *works* during its execution (a sort of spreadsheet)
  - `EEPROM`, where we can save information that will not be lost after we power off the board.

[^4]: Also called `GPP` (`General Purpose Processor`), it understands and executes instructions written according to its `ISA`.

## Programming language of Arduino
With Arduino, we’re going to learn and use the basics of a programming language based on `C++` (but mainly on its `C` part). 

These are two of the most famous programming languages, with which all the main Operative Systems (Windows, Linux, …) are written, precisely because – especially C – they allow excellent *low-level* management of resources. And with Arduino, as it’s reasonable to expect, resources are much more limited than those of a normal computer.

> From now on, we will only use the Arduino programming language in our codes. Many of the considerations we will make can be easily extended to most languages.
{: .prompt-info}

## How does a “code” work?
A code is a simple text file written following the rules of the corresponding programming language. To understand *how to write what*, we must first understand how what we write will be read and executed by the cpu.

Let’s image a code as a list of instructions (for example the steps of a recipe) – written in order to achieve a specific goal.

Any instruction can be:

- `Simple`: one of the elementary operations allowed in our language. For example, the operations of comparing (>, <, =, %), reading and writing in SRAM, …
- `Composite`, or a *sub-recipe*. For example, if we are going to make *pasta with tomato sauce*, the recipe will contain (at least) two sub-recipes (cook pasta, prepare the sauce), each composed of a sequence of elementary steps to achieve that specific goal.

> Note that actually some operations we are now considering simple could be actually executed in more instructions
{: .prompt-warning}

> This distinction is not academic, but it’s introduced as a simplification for the reader
{: .prompt-info }


## Variables: what are they and how to use them
Every operation, even an elementary one, needs to operate on some data. Let’s imagine the `variables` as *containers* for our data. These data boxes must have a *label* that gives clear information about their content.

The information on the label, as we will see in details shortly, is of two types. I anticipate that the first part will be linked to the content. Among the types of content allowed, we can find:

- `char`, i.d. variables that can only contain a single character (‘a’, ‘b’, …)
- `char[]`, an “array” (sequence) of characters called string (we will see it in details in a later article)
- `int`, integer numbers between -32768 and 32767
unsigned int, that is only positive integer numbers (between 0 and 65535)
- `long`, integer numbers between -2147483648 and 2147483647
- `float`, non-integer numbers from 3.4028235E+38 to -3.4028235E+38
- `bool`, variables that can be in two states: 1 or 0

The following questions might arise:

- *Why should I use a variable of type char to store a character, instead of a char[]?*
- *Why won’t we always use float, since integer numbers are just a “special case” of non-integer ones?*

To better answer these questions, and understand why we need so many types of variables, let’s go to the next episode.

<hr>