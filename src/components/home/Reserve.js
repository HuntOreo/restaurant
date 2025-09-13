function Reserve() {
    const container = document.createElement('div');
    const header = document.createElement('h2');
    const form = document.createElement('form');
    const nameWrapper = document.createElement('div');
    const phoneWrapper = document.createElement('div');
    const nameLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    const phoneLabel = document.createElement('label');
    const phoneInput = document.createElement('input');
    const submitBtn = document.createElement('button');

    container.classList.add('reserve-container');
    form.id = 'reserve-form';
    nameWrapper.classList.add('wrapper');
    phoneWrapper.classList.add('wrapper');

    phoneInput.id = 'number';
    phoneLabel.setAttribute('for', 'number');
    phoneInput.setAttribute('placeholder', '555-555-5555');
    phoneInput.setAttribute('name', 'number');
    
    nameInput.id = 'name';
    nameLabel.setAttribute('for', 'name');
    nameInput.setAttribute('placeholder', 'John Smith');
    nameInput.setAttribute('name', 'name');

    header.textContent = 'Make a reservation.';
    nameLabel.textContent = 'Name:';
    phoneLabel.textContent = 'Phone Number:';
    submitBtn.textContent = 'Reserve';

    submitBtn.addEventListener('click', event => event.preventDefault());

    nameWrapper.append(nameLabel);
    nameWrapper.append(nameInput);
    phoneWrapper.append(phoneLabel);
    phoneWrapper.append(phoneInput);
    form.append(nameWrapper);
    form.append(phoneWrapper);
    form.append(submitBtn);
    container.append(header);
    container.append(form);

    return container;
}

export default Reserve;