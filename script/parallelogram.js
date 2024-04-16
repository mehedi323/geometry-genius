function parallelogramCalculateArea(){
    const base = getInputValueId('parallelogram-base')
    const height = getInputValueId('parallelogram-height')
    const area = base * height;
    setInnerTextById('parallelogram-area', area);

}

function getInputValueId(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    return value;
}

function setInnerTextById(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}