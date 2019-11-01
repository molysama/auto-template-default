import Core, * as core from '@auto.pro/core'

import Action, * as action from '@auto.pro/action'

Core()
core.use(Action)

const cap = core.cap
const click = action.click
const swipe = action.swipe

export {
    cap,
    click,
    swipe
}