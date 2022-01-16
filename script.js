function calcularPeso() {
    //criar referência aos elementos manipulados pela function
    let inNome = document.querySelector('#inNome');
    let rbMasculino = document.querySelector('#rbMasculino');
    let rbFeminino = document.querySelector('#rbFeminino');
    let inAltura = document.querySelector('#inAltura');
    let outResposta = document.querySelector('#outResposta');

    //obtem ao conteúdo dos campos de edição da pagina 
    let nome = inNome.value;
    let masculino = rbMasculino.checked;
    let feminino = rbFeminino.checked;
    let altura = Number(inAltura.value);

    //verificar se o nome foi preenchido e sexo selecionado
    if (nome == "" || (masculino == false && feminino == false)) {
        alert("por favor, informe o nome e selecione o sexo...");
        inNome.focus(); //posição (joga o foco) no campo de edição inNome
        return;
    } //SE A ALTURA FOR VAZIA (0) OU NAN: Nnot-a-Number(um texto for informado , por exemplo)
    if (altura == 0 || isNaN(altura)) {
        alert('por favor, informe a altura corretamente...');
        inAltura.focus();
        return;
    }
    //se masculino (significa se masculino == true)
    if (masculino) {
        let peso = 22 * Math.pow(altura, 2); //Math.pow eleva ao quadrado
    outResposta.textContent = `${nome}: Seu peso ideal e ${peso.toFixed(3)}Kg`

    } else {
        let peso = 21 * Math.pow(altura, 2); //Math.pow eleva ao quadrado
    outResposta.textContent = `${nome}: Seu peso ideal e ${peso.toFixed(3)}Kg`

    }
    //apresenta a resposta (altera o conteudo da linha outResposta)
    document.querySelector('.resposta').style.display = 'block';
}
//cria referencia ao elemento btCalcular e registra evento associado a calcularPeso
let btResultado = document.querySelector('#btcalcular');

btResultado.addEventListener('click', calcularPeso);