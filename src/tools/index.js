import Core from '@auto.pro/core'

import Action, {click, swipe} from '@auto.pro/action'

const core = Core()

core.use(Action)

export {
    click,
    swipe
}