
function show(hello, world = 'world') {
    return `${hello},${world}!`
}

const hello = 'hello'
const result = show(hello)

ui.layout(`
    <vertical>
        <button id="btn1" text="${result}" />
        <button id="btn2" text="按钮${hello}" />
        <drawer id="drawer" ></drawer>
    </vertical>
`)

ui.btn1.on('click', () => {
    toastLog(result)
})

// ui.btn2.on('click', () => {
//     toast(hello)
// })
ui.btn2.on('touch', (e) => {
    log(e)
})
