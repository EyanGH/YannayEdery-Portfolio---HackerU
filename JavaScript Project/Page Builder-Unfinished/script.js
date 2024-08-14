function addElement(type) {
    const canvas = document.getElementById('canvas');
    let element;

    switch (type) {
        case 'text':
            element = document.createElement('div');
            element.classList.add('element', 'text-element');
            element.textContent = 'This is a text element';
            break;

        case 'image':
            element = document.createElement('div');
            element.classList.add('element', 'image-element');
            const img = document.createElement('img');
            img.src = 'https://via.placeholder.com/150';
            element.appendChild(img);
            break;

        case 'button':
            element = document.createElement('div');
            element.classList.add('element', 'button-element');
            const button = document.createElement('button');
            button.textContent = 'Click Me';
            element.appendChild(button);
            break;

        default:
            console.error('Unknown element type:', type);
            return;
    }

    canvas.appendChild(element);
}
