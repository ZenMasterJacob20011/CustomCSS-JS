import {Input} from "@formio/js/types/components/_classes/input/input";
class myInputs extends Input{
    static schema(...extend){
        return Input.schema({
            type: 'mycomp',
            label: 'My Component',
            key: 'mycomp'
        });
    }

    static get builderInfo(){
        return {
            title: 'My Component',
            icon: 'terminal',
            group: 'basic',
            documentation: '/userguide/#textfield',
            weight: 0,
            schema: myInputs.schema()
        }
    }

    constructor(component, options, data) {
        super(component, options, data);
    }

    init(){
        super.init();
    }
}
