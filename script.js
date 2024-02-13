// Definir el componente Card utilizando JavaScript estándar
function Card(props) {
    return React.createElement('div', { className: 'col' },
        React.createElement('div', { className: 'card h-100' },
            React.createElement('img', { src: props.image, className: 'card-img-top', alt: props.alt }),
            React.createElement('div', { className: 'card-body' },
                React.createElement('h5', { className: 'card-title custom-truncate' },
                    React.createElement('a', { href: props.link }, props.title) // Hacer que el título sea un enlace
                ),
                React.createElement('p', { className: 'card-text text-black fw-semibold' }, props.text)
            )
        )
    );
}

// Datos para las tarjetas
let cardsData = [
    { image: 'https://via.placeholder.com/300', alt: 'Imagen 1', title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero inventore odit ullam accusamus beatae quisquam laborum nesciunt eligendi. Dolore delectus nobis reiciendis explicabo sequi architecto accusamus neque nam obcaecati!', text: 'US$ 9.90', link: '#' },
    { image: 'https://via.placeholder.com/300', alt: 'Imagen 2', title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem neque eveniet repellat adipisci voluptatibus eos iure dolores quos possimus! Aspernatur ut voluptatum similique quasi numquam optio error accusamus placeat facilis.', text: 'US$ 15.50', link: '#' },
    { image: 'https://via.placeholder.com/300', alt: 'Imagen 3', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptates sapiente iure ipsa dolorum reiciendis laborum tempore perferendis, repellendus minus nobis deserunt. Cupiditate, vero vitae voluptatum voluptate quidem doloremque! Consectetur.', text: ' US$35.40', link: '#' },
    { image: 'https://via.placeholder.com/300', alt: 'Imagen 4', title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum corporis laudantium ipsa! Obcaecati, eligendi, earum optio suscipit et ipsum consequatur voluptate amet explicabo facilis, perspiciatis recusandae provident cupiditate soluta autem!', text: 'US$ 49.99', link: '#' },
    // Añadir más datos aquí para más tarjetas
];

// Función para renderizar todas las tarjetas
function renderCards() {
    return cardsData.map((cardData, index) => {
        return React.createElement('div', { className: 'col', key: index },
            React.createElement(Card, { ...cardData })
        );
    });
}

// Función para añadir una nueva tarjeta con título, texto y enlace personalizados
function addCard(title, text, link) {
    // Verificar si se proporcionó un título y texto antes de agregar la tarjeta
    if (title !== null && text !== null) {
        const newCard = {
            image: 'https://via.placeholder.com/300',
            alt: `Imagen ${cardsData.length + 1}`,
            title: title || `Card ${cardsData.length + 1}`, // Usar el título proporcionado o un título predeterminado
            text: text || `Texto de la Card ${cardsData.length + 1}`, // Usar el texto proporcionado o un texto predeterminado
            link: link || '#' // Usar el enlace proporcionado o un enlace predeterminado
        };

        cardsData = [...cardsData, newCard];

        ReactDOM.render(renderCards(), document.getElementById('root'));
    }
}

// Montar las tarjetas en el elemento con id "root"
ReactDOM.render(renderCards(), document.getElementById('root'));

// Agregar evento clic al botón "Agregar Tarjeta"
document.getElementById('addCardBtn').addEventListener('click', function() {
    addCard(prompt('Introduce el título del nuevo producto:'), prompt('Introduce el precio:'), '#');
});