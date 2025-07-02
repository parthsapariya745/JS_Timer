let count = 0

function print() {
    setTimeout(()=> {
        count++
        if (count <= 10) {
            console.log(count)
            print()
        }
    }, 1000)
}
print()