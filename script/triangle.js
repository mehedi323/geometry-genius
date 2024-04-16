function triangleCalculatarea(){
    const triangleInputBase = document.getElementById('triangleBasaInput');
    const triangleBase = triangleInputBase.value;
    const base = parseFloat(triangleBase)
    
    const triangleHeightInput = document.getElementById('triangleHeightInput');
    const triangleHeight = triangleHeightInput.value;
    const height = parseFloat(triangleHeight);
    
    const area = base * height;

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
}
