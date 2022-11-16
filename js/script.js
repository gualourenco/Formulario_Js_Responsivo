
    //variáveis locais
    let form = document.querySelector(".formulary");
    let deck = document.querySelector('#deck');
    let btnSubmit = document.querySelector('#submit');
    let formDiv = document.querySelector('#formdiv');
    let inputRequired = document.querySelectorAll('.input-required');
    let spanRequired= document.querySelectorAll('.span-required');
    let name = document.querySelector('#name');
    let image = document.querySelector('#image');
    let km = document.querySelector('#km');
    let hp = document.querySelector('#hp');
    let oHundred = document.querySelector('#o-hundred');
    let cc = document.querySelector('#cc');
    let ms = document.querySelector('#motor-spool');
    let kg = document.querySelector('#kg');
    let btnSH = document.querySelector('#show-menu');



//funcao de validacao de modelo
function setError(index){
    inputRequired[index].style.border = '2px solid #e63636';
    inputRequired[index].style.backgroundColor = " #FFCCCB";
    inputRequired[index].style.color = " #000";
    spanRequired[index].style.display = "block";
     btnSubmit.style.backgroundColor = "#6c6B6B";
     btnSubmit.setAttribute("disabled", true);

}

function removeError(index){
    spanRequired[index].style.display = 'none';
    inputRequired[index].style.border = "1px solid #000";
    inputRequired[index].style.backgroundColor = " #FFFF";
    inputRequired[index].style.color = " #000";
    btnSubmit.style.backgroundColor = "#279DF3";
    btnSubmit.removeAttribute("disabled");
    
}

//aplicando validacao
function nameValidate(){
    inputRequired[0].value.length < 3? (setError(0)):(removeError(0));
};
function imgValidate() {
  inputRequired[1].value.length < 7 ? setError(1) : removeError(1);
}

function kmValidate() {
  inputRequired[2].value.length < 2 ? setError(2) : removeError(2);
}
function hpValidate() {
  inputRequired[3].value.length < 3 ? setError(3) : removeError(3);
}
function ohValidate() {
  inputRequired[4].value.length < 3 ? setError(4) : removeError(4);
}
function ccValidate() {
  inputRequired[5].value.length < 3 ? setError(5) : removeError(5);
}
function msValidate(){
        inputRequired[1].value.length < 3? (setError(1)):(removeError(1));
}
function kgValidate() {
  inputRequired[7].value.length < 4 ? setError(7) : removeError(7);
}


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    nameValidate()
    imgValidate();
    kmValidate();
    hpValidate();
    ohValidate();
    ccValidate();
    msValidate()
    kgValidate();
    addCard();
    window.alert(`Parabéns! Você gerou uma carta nova!`);
});
    
    
    //Adcionando um card
    function addCard(){
        let card = document.createElement('div');
        card.classList.add('card')
        card.innerHTML = `
        <h1>${name.value}</h1>
        <img src = "${image.value}">
        <ul>
        <li><span>Km/h</span> <span>${km.value}</span></li>
        <li><span>Hp</span> <span>${hp.value}</span></li>
        <li><span>0-100 Km/h</span> <span>${oHundred.value} seg.</span></li>
        <li><span>cc</span> <span>${cc.value}</span></li>
        <li><span>cilindros</span> <span>${ms.value}</span></li>
        <li><span>kg</span> <span>${kg.value}</span></li>
        </ul>
        `;
        
        deck.appendChild(card)
        
        name.value ="";
        image.value ="";
        km.value ="";
        hp.value ="";
        oHundred.value = "";
        cc.value = "";
        ms.value = "";
        kg.value = "";
    };
