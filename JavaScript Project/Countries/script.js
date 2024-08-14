document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const countriesTable = document.getElementById('countriesTable').getElementsByTagName('tbody')[0];

    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                const row = countriesTable.insertRow();
                const flagCell = row.insertCell(0);
                const countryName = row.insertCell(1);
                const population = row.insertCell(2);
                const founded = row.insertCell(3);

                const flagImg = document.createElement('img');
                flagImg.src = country.flags.png;
                flagImg.alt = `${country.name.common} Flag`;
                flagCell.appendChild(flagImg);

                countryName.textContent = country.name.common;
                population.textContent = country.population.toLocaleString();
                founded.textContent = country.independent ? country.indepYear || 'N/A' : 'N/A';
            });
        })
        .catch(error => console.error('Error fetching country data:', error));


    searchInput.addEventListener('keyup', function() {
        const filter = searchInput.value.toLowerCase();
        const rows = countriesTable.getElementsByTagName('tr');

        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName('td');
            const countryName = cells[1].textContent.toLowerCase();

            if (countryName.indexOf(filter) > -1) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    });
});
