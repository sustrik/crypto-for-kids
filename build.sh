#!/bin/sh

nodejs build.js

pandoc -f markdown_github body.md > body.tmp

cat header.html body.tmp footer.html > index.html

rm body.tmp
rm body.md
