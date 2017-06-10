# Crypto for Kids

![cryptotalk](cryptotalk.png)

This project is a dumping ground for texts that will one day form a cryptography book for kids.

The goal of the book is to avoid as much technical detail as possible and focus on basic principles and the kind of thinking needed for crypto. As such the book will also touch adjacent subjects such as game theory, psychology, maths, economics, history and so on.

The book itself is going to be a mystery, or a puzzle. It will be split into smaller pieces and the correct ordering of the pieces will be revealed only by solving small crypto puzzles. With this hyperlink structure (think cross between Khazar dictionary and Garden of Forking Paths) it is even possible to make the book non-linear. One option would be to add short side branches ("eater eggs") the other would be to create a full-scale labyrinth. In the latter case the only way to explore the book will be drawing a map as you do when playing D&D.

Individual pages will be either texts about cryptography or short stories.

The stories will be mostly structured like this: First, something impossible happens. Then the reader will be told: "How is that possible?" or "You now have enough information to solve the mystery yourself!" The final part of the story will resolve the mystery -- but there's a catch: It will be encrypted, obfuscated or otherwise (e.g. steganographically) hidden. If you want to know the solution you have to either solve it yourself or decipher the answer.

In short, the book itself will use crypto and game theory to make the reader do what it wants.

Rendered version of the text: <https://sustrik.github.io/crypto-for-kids/>

If you want to participate in writing the book, please drop me a note at sustrik@250bpm.com or simply open a pull request.

All the text is licensed under Creative Commons Attribution 4.0 International Public License.

### Notes

1. The book should not be mathy. The rationale is that the average reader is not likely to be involved in crypto primitive design, ever. As the primitives get better they become more like Lego blocks. You never make Lego blocks yourself. They are done by few experts in a Lego factory. It may be interesting to know how they are made but you don't have to to play with the bricks.
2. The book is actually a game. Thus, sound game design is needed. If there are any game designers reading this, please, do reach out.
3. The design can look like this: There are "puzzles" which are interactive and train you to acquire a particular skill. To prevent the reader from getting bored they are interleaved by "stories". Stories can be also thought of as rewards for solving the puzzles.
4. While the structure of the book is non-linear (printed hypertext if you will) in the end, learning crypto requires some kind of linear progression, starting with simple concepts and moving to more complex ones. In other words, the reader should be "tied" to a particular place in the book (current position). This is accomplished by two different mechanisms: First, moving backwards is prevented by the very nature of the book. It's like a trapdoor function. It's easy to move to next section, but finding the previous section means scanning through the entire book. Second, moving forward is prevented by the need to acquire skills. If the number of the next section is encoded by ROT13 and you don't know what ROT13 is, you won't get to the next section. Moreover if ROT13 was explained not in the section with puzzle, but rather in the previous section you can't just start with the puzzle section and move forward.
5. I definitely want the book to by printed in some XVII. century typeface. That seems to be a good compromise between keeping it readable while at the same time mysterious and weird. Also, the number of topics covered and unconnectedness of the different stories give it a distinct baroque feel (think Anatomy of Melancholy) so it kind of fits.
6. In such a convoluted book, pictures are natural focus points. This gives a possibility to attract attention of the reader to read particular sections in out-of-order manner. Which may be desirable in some cases. Where it is not, we can still put the picture in a separate section with no accompanying text. The section that references it will be super-hard to find, so such stand-alone pictures will make casual thumb-throughers only more confused.
7. We need some non-standard tools for the authors. Most importantly, a script that converts source texts, stored in structured manner, to the final, quasi-randomly-ordered version of the book. A tool that would print graph of links between sections would be useful for understanding the game design part.
8. One fun option: The story wanders of to the Internet at some point. Then returns back to the book after a while.
9. Another fun option. The epilogue will not be linked from anywhere. It will say: "Congratulations for finishing the book! But wait! You've cheated!" (But remember, cheating is a strategy!) There would have to be some clues to guide the reader to the epilogue. First section of the epilogue would be the last section of the book. Conspicious picture to mark it. Or something in that vein.
10. While the story of the book has to be rather tightly controlled, it should, at the edges, blend to the real world. Example: This is Voynich manuscript. It's scanned and posted online. Go and decypher it if you dare. Different example: This is history of cryptography. Btw there's such a thing as CCC. Go and attend if you will.
