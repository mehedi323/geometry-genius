function pentagonAreaCalculate(){
    const base = getInputValueId('pentagon-base');
    const height = getInputValueId('pentagon-height');
    const area = base * height;
    setInnerTextById('pentagon-area', area);
}