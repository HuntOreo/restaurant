function Reserve() {
    const container = document.createElement('div');
    const header = document.createElement('h2');
    const form = document.createElement('form');
    const wrapper = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const submitBtn = document.createElement('button');

    container.classList.add('reserve-container');
    form.id = 'reserve-form';
    wrapper.classList.add('wrapper');
    label.setAttribute('for', 'number');
    input.id = 'number';
    input.setAttribute('placeholder', '555-555-5555');
    input.setAttribute('name', 'number');

    header.textContent = 'Make a reservation.';
    label.textContent = 'Phone Number:';
    submitBtn.textContent = 'Reserve';

    submitBtn.addEventListener('click', event => event.preventDefault());

    wrapper.append(label);
    wrapper.append(input);
    form.append(wrapper);
    form.append(submitBtn);
    container.append(header);
    container.append(form);

    return container;
}

export default Reserve;