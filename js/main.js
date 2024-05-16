document.addEventListener('DOMContentLoaded', () => {
    //Dropdown
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            const target = e.target;
            const dropdownPlace = dropdown.querySelector('.dropdown__block'); // Находим dropdown__block внутри текущего dropdown

            // Убираем классы перед основной логикой
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('dropdown_show');
                    const otherDropdownPlace = otherDropdown.querySelector('.dropdown__block');
                    if (otherDropdownPlace) {
                        otherDropdownPlace.classList.add('dropdown__block_hide');
                    }
                }
            });

            if (e.target === target && !e.target.closest('.dropdown__link')) {
                e.preventDefault();
    
                dropdown.classList.toggle('dropdown_show');
                dropdownPlace.classList.toggle('dropdown__block_hide');
            }
        })
    })
})