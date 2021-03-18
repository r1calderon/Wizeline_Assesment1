import {Selector} from 'testcafe'

class FinishPage{
    constructor(){
        this.finishTitle = Selector('.subheader').withText('Finish')
    }
}

export default new FinishPage()

