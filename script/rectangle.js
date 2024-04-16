function rectangleAreaCalculate(){
     const rectangleWeightInput = document.getElementById('rectangle-weight');
     const rectangleWeight = rectangleWeightInput.value;
     const weight = parseFloat(rectangleWeight)

     const rectangleLengthInput= document.getElementById('rectangle-length')
     const rectangleLenght = rectangleLengthInput.value;
     const length = parseFloat(rectangleLenght);

     const area = weight * length;

     const rectangleArea = document.getElementById('rectangle-area');
     rectangleArea.innerText = area;
}

 