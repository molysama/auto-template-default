const hello = 'hello'

function show(world = ',world') {
    return hello + world
}

const result = show()

toastLog(result)

ui.layout(
    <vertical>
        <button id="btn1" text="{{result}}" />
        <button id="btn2" text="第二个按钮{{hello}}" />
    </vertical>
)

ui.btn1.on('click', () => {
    toastLog(show())
})
ui.btn2.on('click', () => {
    toast(hello)
})
