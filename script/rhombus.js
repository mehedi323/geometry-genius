function rhombusCalculateArea(){
    const base = getInputValueId('rhombus-base');
    const height = getInputValueId('rhombus-height');
    const area = base * height;
    setInnerTextById('rhombus-area', area);
}