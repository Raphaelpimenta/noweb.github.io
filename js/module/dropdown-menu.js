export default function initDropdownMenu(){

    const dropdownMenu = document.querySelectorAll('[data-dropdown]');

    dropdownMenu.forEach(menu => {{
        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick)
        })

        
    }})

    function handleClick(event){
        event.preventDefault()
        this.classList.toggle('ativaDropdown')
        outsideClick(this, () => {
            this.classList.remove('ativaDropdown')
        })
    }

    function outsideClick(element, callback){
        const html = document.documentElement;
        html.addEventListener('click', handleOutsideClick);
        function handleOutsideClick(event){
            if(!element.contains(event.target)){
                html.removeEventListener('click', handleOutsideClick);
                callback()
            }
        }
    }

}
