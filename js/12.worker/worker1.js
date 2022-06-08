console.log(self)
self.onmessage = e => {
    console.time('time')
    let res = 0
    for (let i = 0; i < 499999999; i++) {
        e = i;
    }
    res = e;
    console.timeEnd('time')

    postMessage(res)

}