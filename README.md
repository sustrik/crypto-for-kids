# Crypto for Kids (Do suggest a better title!)

This project is a dumping ground for texts that will one day form a cryptography book for kids.

The target age group is 11+. According to Piaget, kids in concrete operational stage, aged 7-11, learn to understand a perspective other than one's own. Once they are done with that the door is open to understanding cryptography which, by it nature, is about conflicts between perspectives of different people.

The goal of the book is to avoid as much technical detail as possible and focus on basic principles and the kind of twisted thinking needed for cryptography. As such the book will also touch adjacent subjects such as game theory, psychology, maths, economics, history and so on.

The book itself is going to be a mystery, a puzzle, a labyrinth. It will be split into small pieces and the correct ordering of the pieces will be revealed only by solving little cryptographical puzzles.

![](paths1.png)

One story may look, for example, like this: First, something impossible happens. Then the reader will be told: "How is that possible?" or "You now have enough information to solve the mystery yourself!" The final part of the story will resolve the mystery, but there's a catch. The reference to the final part will be encrypted, obfuscated or maybe steganographically hidden. To give a trivial example: "Continue reading at section 54 mod 7!"

Structuring the stories like this has an educational value. Namely, if you want to teach something to someone, exercises are needed. But people tend to skip exercises. I, for one, do. However, this way the reader will be forced to do the exercise to be able to continue reading.

The system also enforces the rules of the game. The reader cannot skip stuff or start reading from the middle.

First, you cannot pick a chapter and find the previous one. Technically, this works like a one-way function. Given that the chapters are unordered and the only link between two subsequent chapters is a command at the end of the first chapter (e.g. "Go to section 135!") you would have to search through the entire book to find the previous chapter. But even if the book is digitalized and allows for automated searching, looking for "5" is not going to find anything if the command is "Go to section 54 mod 7!". 

Second, picking a chapter from the middle of the book and trying to move forward is not going to work. Specifically, if the puzzle at the end of the chapter requires a skill that wasn't taught in that chapter, there's no way to find the next chapter:

![](paths3.png)

As a side effect, this "hyperlink" structure makes it possible for the book to be non-linear. Think of the fictional book discussed in Borges' The Garden of Forking Paths. Or, to pick a real book, Pavić's Dictionary of the Khazars. If the idea is taken into extreme it won't be possible to read the book without drawing a map, as you do when playing Dungeons & Dragons.

![](paths2.png)

### Notes

1. The book should not be mathy. The rationale is that the average reader is not likely to be involved in crypto primitive design, ever. As the primitives get better they become more like Lego blocks. You never make Lego blocks yourself. They are done by few experts in a Lego factory. It may be interesting to know how they are made but you don't have to to play with the bricks.
2. The book is actually a game. Thus, sound game design is needed. If there are any game designers reading this, please, do reach out.
3. The design can look like this: There are "puzzles" which are interactive and train you to acquire a particular skill. To prevent the reader from getting bored they are interleaved by "stories". Stories can be also thought of as rewards for solving the puzzles.
4. While the structure of the book is non-linear (printed hypertext if you will) in the end, learning crypto requires some kind of linear progression, starting with simple concepts and moving to more complex ones. In other words, the reader should be "tied" to a particular place in the book (current position). This is accomplished by two different mechanisms: First, moving backwards is prevented by the very nature of the book. It's like a trapdoor function. It's easy to move to next section, but finding the previous section means scanning through the entire book. Second, moving forward is prevented by the need to acquire skills. If the number of the next section is encoded by ROT13 and you don't know what ROT13 is, you won't get to the next section. Moreover if ROT13 was explained not in the section with puzzle, but rather in the previous section you can't just start with the puzzle section and move forward.
5. I definitely want the book to by printed in some XVII. century typeface. That seems to be a good compromise between keeping it readable while at the same time mysterious and weird. Also, the number of topics covered and unconnectedness of the different stories give it a distinct baroque feel (think Anatomy of Melancholy) so it kind of fits.
6. In such a convoluted book, pictures are natural focus points. This gives a possibility to attract attention of the reader to read particular sections in out-of-order manner. Which may be desirable in some cases. Where it is not, we can still put the picture in a separate section with no accompanying text. The section that references it will be super-hard to find, so such stand-alone pictures will make casual thumb-throughers only more confused.
7. One fun option: The story wanders of to the Internet at some point. Then returns back to the book after a while.
8. Another fun option. The epilogue will not be linked from anywhere. It will say: "Congratulations for finishing the book! But wait! You've cheated!" (But remember, cheating is a strategy!) There would have to be some clues to guide the reader to the epilogue. First section of the epilogue would be the last section of the book. Conspicious picture to mark it. Or something in that vein.
9. The book is a game. However, there will be no sheet with the rules. Let kids experience the feeling of dealing with a mysterios artifact, devised by adversarial intelligence to confuse you.
10. While the story of the book has to be rather tightly controlled, it should, at the edges, blend to the real world. Example: This is Voynich manuscript. It's scanned and posted online. Go and decypher it if you dare. Different example: This is history of cryptography. Btw there's such a thing as CCC. Go and attend if you will. The thread that stretches from the dawn of time and passes through Caesar, Trithemius and Alan Turing ends in your hand today.
11. Unsolved problem: How to do references? It would be nice if, say, Messager's story had a reference to "perfect secrecy" and "Claude Shannon", so that interested readers have keywords to search for on Internet. On the other hand, providing references can make the book less mysterious and readers could cheat when solving the puzzles by looking at the reference material instead of thinking themselves.

Rendered version of the text: <https://sustrik.github.io/crypto-for-kids/>

If you want to participate in writing this book, please drop me a note at `sustrik@250bpm.com` or simply open a pull request.

**All the text is licensed under Creative Commons Attribution 4.0 International Public License.**
