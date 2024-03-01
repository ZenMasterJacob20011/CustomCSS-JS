const Input = Formio.Components.components.input;
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

    get inputInfo() {
        const info = super.inputInfo;
        return info;
    }

    render(content) {
        return super.render('<div ref="customRef">This is a custom component!</div>');
    }

    attach(element) {
        /**
         * This method will look for an element that has the 'ref="customRef"' as an
         * attribute (like <div ref="customRef"></div>) and then assign that DOM
         * element to the variable "this.refs". After this method is executed, the
         * following will point to the DOM element of that reference.
         *
         * this.refs.customRef
         *
         * For DOM elements that have multiple in the component, you would make this
         * say 'customRef: "multiple"' which would then turn "this.refs.customRef" into
         * an array of DOM elements.
         */
        this.loadRefs(element, {
          customRef: 'single',
        });
        
        /**
         * It is common to attach events to your "references" within your template.
         * This can be done with the "addEventListener" method and send the template
         * reference to that object.
         */
        this.addEventListener(this.refs.customRef, 'click', () => {
            console.log('Custom Ref has been clicked!!!');        
        });
        return super.attach(element);
    }
    detach() {
        return super.detach();
    }
 
    /**
     * Called when the component has been completely "destroyed" or removed form the
     * renderer.
     *
     * @return - A Promise that resolves when this component is done being destroyed.
     */
    destroy() {
        return super.destroy();
    }
 
    /**
     * A very useful method that will take the values being passed into this component
     * and convert them into the "standard" or normalized value. For exmample, this
     * could be used to convert a string into a boolean, or even a Date type.
     *
     * @param value - The value that is being passed into the "setValueAt" method to normalize.
     * @param flags - Change propogation flags that are being used to control behavior of the
     *                change proogation logic.
     *
     * @return - The "normalized" value of this component.
     */
    normalizeValue(value, flags = {}) {
        return super.normalizeValue(value, flags);
    }
    
    /**
     * Returns the value of the "view" data for this component.
     *
     * @return - The value for this whole component.
     */
    getValue() {
        return super.getValue();
    }
    
    /**
     * Much like "getValue", but this handles retrieving the value of a single index
     * when the "multiple" flag is used within the component (which allows them to add
     * multiple values). This turns a single value into an array of values, and this
     * method provides access to a certain index value.
     *
     * @param index - The index within the array of values (from the multiple flag) 
     *                that is getting fetched.
     *
     * @return - The view data of this index.
     */
    getValueAt(index) {
        return super.getValueAt(index);
    }
    
    /**
     * Sets the value of both the data and view of the component (such as setting the
     * <input> value to the correct value of the data. This is most commonly used
     * externally to set the value and also see that value show up in the view of the
     * component. If you wish to only set the data of the component, like when you are
     * responding to an HMTL input event, then updateValue should be used instead since
     * it only sets the data value of the component and not the view. 
     *
     * @param value - The value that is being set for this component's data and view.
     * @param flags - Change propogation flags that are being used to control behavior of the
     *                change proogation logic.
     *
     * @return - Boolean indicating if the setValue changed the value or not.
     */
    setValue(value, flags = {}) {
        return super.setValue(value, flags);
    }
    
    /**
     * Sets the value for only this index of the component. This is useful when you have
     * the "multiple" flag set for this component and only wish to tell this component
     * how the value should be set on a per-row basis.
     *
     * @param index - The index within the value array that is being set.
     * @param value - The value at this index that is being set.
     * @param flags - Change propogation flags that are being used to control behavior of the
     *                change proogation logic.
     *
     * @return - Boolean indiciating if the setValue at this index was changed.
     */
    setValueAt(index, value, flags = {}) {
        return super.setValueAt(index, value, flags);
    }
    
    /**
     * Similar to setValue, except this does NOT update the "view" but only updates
     * the data model of the component.
     *
     * @param value - The value of the component being set.
     * @param flags - Change propogation flags that are being used to control behavior of the
     *                change proogation logic.
     *
     * @return - Boolean indicating if the updateValue changed the value or not.
     */
    updateValue(value, flags = {}) {
        return super.updateValue(...args);
    }
}
