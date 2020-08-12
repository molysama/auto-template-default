const a = 'a'
const b = 'b'

function show(x = 'x', y = 'y') {
    throw 'wrong'
    console.log(x + y + a + b)

}

show()
