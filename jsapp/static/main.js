function selectBtn(){
    let selectElem = document.getElementById('mySelect')
    let imgElem = document.getElementById('myImg')
 
    imgElem.src = selectElem.value
    
}
function updateBtn(){
    fetch('http://127.0.0.1:8000/getAllStudents/')
        .then(response => response.json())
        .then(data => {
            let selectElem = document.getElementById('mySelect')
            
            while(selectElem.firstChild){
                selectElem.removeChild(selectElem.firstChild)
            }
 
            for(let i = 0; i < data.values.length ; i++){
                let optionElem = document.createElement('option')
                optionElem.value = data.values[i].image
                optionElem.text = data.values[i].name
                selectElem.add(optionElem)
            }
        })
        
}