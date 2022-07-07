let A = 1
let B = 1

const render = () => {
    let b = []
    let z = []
    A += 0.07
    B += 0.03
    let cA = Math.cos(A)
    let sA = Math.sin(A)
    let cB = Math.cos(B)
    let sB = Math.sin(B)

    for (let k = 0; k < 1760; k++) {
        b[k] = k % 80 === 79 ? '\n' : ' '
        z[k] = 0
    }

    for (let j = 0; j < 6.28; j += 0.07) {
        let ct = Math.cos(j)
        let st = Math.sin(j)

        for (let i = 0; i < 6.28; i += 0.02) {
            let sp = Math.sin(i)
            let cp = Math.cos(i)
            let h = ct + 2
            let D = 1 / (sp * h * sA + st * cA + 5)
            let t = sp * h * cA - st * sA
            let x = 0 | (40 + 30 * D * (cp * h * cB - t * sB))
            let y = 0 | (12 + 15 * D * (cp * h * sB + t * cB))
            let o = x + 80 * y
            let N = 0 | (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB))
            if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
                z[o] = D
                b[o] = '.,-~:;=!*#$@'[N > 0 ? N : 0]
            }
        }
    }
    console.clear()
    console.log(b.join(''))
}

setInterval(render, 50)

