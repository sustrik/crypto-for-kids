**Goal: Explain why randomness is important for crypto.**

### Randomness

This is a placeholder. No good ideas yet.

The thing is a natural follow-up to OTP (if the pad is not fully random, the encryption is weak), but that may be too complex.

Alternative: Rock-paper-scissors game. The game is perfectly fair as long as participants act randomly. If they do not, it's easy to win.

A trick: "Human randomness, such as moving the mouse is often used as source of randomness. Next section is section 273." However, there are two 273. sections in the book. The version of the story you read depends on whether you've happened to find the first or the second one.

Not sure this will be useful, but it's interesting:

"Some criminals also claim to be mentally retarded, especially in states where it’s illegal to execute retarded people. The process for catching these people is equally elegant. They are asked to take a multiple-choice vocabulary test with easy, medium, and difficult words. Real mentally retarded people will do okay on the easy words but perform at chance on the medium and difficult words. Fakers will also do okay on the easy words – they are smart enough to understand that even mentally retarded people know some things – but then they intentionally throw the medium words and do worse than chance. On the difficult words, the fakers honestly don’t know them and so they go back to performing at chance again. Computers can detect these patterns and easily and confidently point out a fake."

Imagine a story like this: A person is facing capital punishment. The last avenue of defense it is to claim they are mentally retarded. A friend, or maybe the lawyer, explains how the test works and suggests that the protagonist, when presented with a work mentally reatarded person wouldn't know doesn't give a false answer but rather chooses an answer randomly. The protagonist does exactly that. However, the psychologists conclude that they are cheating. What went wrong?

Now try how hard is it to be random. In this application you are supposed to press F or D key, on random. The application tries to predict your next move. If, after you pressed a key, the new line has white background the application succeeded in predicting your move. If the background is red it failed. Try to be truly random and make it fail as much as possible:

<http://people.ischool.berkeley.edu/~nick/aaronson-oracle/index.html>

After few rounds the application starts reporting its success as a percentage of correct guesses. 100% means that the application managed to guess your next choice every time. 0% means it was always wrong.

After you've played the game for some time you can see that behaving randomly is actually pretty hard.

But let's think about it for a second. If you are selecting your choices trully randomly the application will still be right sometimes, by sheer chance. In fact, given that there are only two possible choices, either F key or D key, it would guess correctly in 50% of cases even if it predicted your move on random.

And if you have the true hacker mindset you are now asking: Is it possible to beat the application completely? Can I drive the ratio of correct guesses down to 0%?

And, helpfully, there's a link to the source code of the application on the bottom of the screen. Study the code, find out how the application predicts the next move and always do the opposite of what it predicts.

Or, if you are not into programming, you can do the following: Before each move, open a new browser window, load the application and repeat the entire sequence of letters you've  typed so far. The press F to find out whether application believes that F will be the next choice you'll make. If the result appears in red press F also in the main application. Otherwise, press D in the main application. Repeat for each step.

So, congratulations, you've beaten the crap out of the application.

But did you?

Imagine a judge looking at the results. She says: "Well, if the defendant was trully random the result would be around 50%. If it's 0% then he must have cheated. Maybe they've figured out how the prediction algorithm works. Or maybe cheated in a way I can't currently think of. But in any case, they are definitely not mentally retarded. So, capital punishment it is."

