export default function initModal(){

    const btnAbrir = document.querySelector('[data-modal="abrir"]')
    const btnFechar = document.querySelector('[data-modal="fechar"]')
    const btnContainer = document.querySelector('[data-modal="container"]')

    if(btnAbrir && btnFechar && btnContainer){

        function abrirModal(event){
            event.preventDefault();
            btnContainer.classList.add('ativo');
    
        }
    
        function fecharModal(event){
            event.preventDefault();
            btnContainer.classList.remove('ativo');
        }
    
        function clickForaModal(event){
            if(event.target === this){
                fecharModal(event);
            }
        }
    
        btnAbrir.addEventListener('click', abrirModal);
        btnFechar.addEventListener('click', fecharModal);
        btnContainer.addEventListener('click', clickForaModal);
    }


}