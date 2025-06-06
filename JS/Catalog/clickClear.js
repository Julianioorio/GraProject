// Здесь очищаю фильры
document.querySelector('.clear').addEventListener('click',function(){
    document.querySelectorAll('.btnParameters input[type=checkbox]').forEach((input)=>{
        input.checked = false;
        document.getElementById('select').value = 'По умолчаний'
        document.getElementById("weight-slider").noUiSlider.set([40,750]);
        document.getElementById("height-slider").noUiSlider.set([10,84]);
        document.getElementById("height-slider-2").noUiSlider.set([50,169]);
    })
}) 