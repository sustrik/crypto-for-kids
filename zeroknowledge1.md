**Goal: Explain zero-knowledge proofs in intuitive manner. No story yet. Just a list of possible approaches.**

### 1

Q: I have a deck of cards. I draw one of them and say it is black. Can I convince you about the fact without giving away any more details?

A: Yes. I can take all red cards from the deck and show them to you.

Pros: Simple. No other crypto primitives needed.

Cons: It's a non-interactive proofs, whereas your typical ZK proof is interactive.

### 2

Classic Alibaba's cave story. <https://en.wikipedia.org/wiki/Zero-knowledge_proof#Abstract_example>

Cons: Incentives are unclear. Why does prover want to prove that he has the key? Why can't he just show the verifier how he unlocks the door? Etc.

### 3

<https://blog.cryptographyengineering.com/2014/11/27/zero-knowledge-proofs-illustrated-primer/>

Pros: Exhaustive.

Cons: Needs esoteric knowledge, i.e. NP-completenes etc. On the other hand, the knowledge in not central to the explanation. Can be probably simplified.

### 4

X communicates with a person via encrypted email (assymetric encryption). Then he meets a person who claims they've been the one who X communicated with. X wants them to show him their secret key to prove it. The refuse - X could abuse the key if they did that. So, instead, X writes a message (e.g. "shuffle duffle muzzle muff"), hands it over, the prover encrypts it using their secret key, X decrypts it and voila - he's sure that he's speaking to the right person.

Pros: Nicely shows the "zero knowledge" property. At the beginning X sends "shuffle duffle muzzle muff" message. At the end he gets "shuffle duffle muzzle muff" message. It's clear that he learned absolutely nothing, except for the fact that the other party owns the secret key.

Cons: Dependent on understanding asymmetric encryption.

### 5

Alice and Bob are playing "Where is Waldo".

Alice says: I see Waldo!

Bob: You are lying!

Alice: I am  not.

Bob: Then show me.

Alice: No way. You have to find him yourself.

Bob: See. You are lying.

Alice: I am not. Let me prove it.

She takes a big pieco of cardboard, makes a small hole in the middle and puts it top of the book, so that picture of Waldo is seen threough the hole.


<http://www.wisdom.weizmann.ac.il/~naor/PAPERS/waldo.pdf>

Proc & cons: Same as 1.
