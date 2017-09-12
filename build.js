var fs = require('fs');

sections = []

function processFile(filename, content) {
    var lines = content.split('\n')
    var inblock = false
    var props = {}
    var block = []
    for(var i = 0; i != lines.length; i++) {
        var line = lines[i]
        if(!inblock && line.substring(0, 3) == '[[[') {
            console.log('[[[')
            prs = line.substring(3).split(' ')
            for(var j = 0; j != prs.length; j++) {
                var pos = prs[j].indexOf(':')
                if(pos == -1) continue
                var name = prs[j].substring(0, pos)
                var value = prs[j].substring(pos+1)
                props[name] = value
                console.log(name + ':' + value)
            }
            inblock = true
            continue 
        }
        if(inblock && line.substring(0, 3) == ']]]') {
            console.log(']]]')
            inblock = false
            props['content'] = block.join('\n')
            sections[props.section] = props
            continue
        }
        if(inblock) block.push(line)
    }
}

var files = fs.readdirSync('.')
for(var i = 0; i < files.length; i++) {
    if(files[i].substring(files[i].length - 3) == '.md') {
        var content = fs.readFileSync(files[i], 'utf-8')
        console.log('Processing ' + files[i])
        processFile(files[i], content)
    }
}

result = ''

for(var i = 0; i != sections.length; i++) {
    if(typeof sections[i] === 'undefined') continue
    result += '#' + i.toString() + '.\n\n'
    result += sections[i].content
}

fs.writeFile('body.md', result)
