const hello = 'hello'

function show(world = ',world') {
    return hello + world
}

const result = show()

toastLog(result)

ui.layout(
    <vertical>
        <button text="{{result}}" />
        <button text="第二个按钮" />
    </vertical>
)
