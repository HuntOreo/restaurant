const contacts = [
  {
    name: 'Hunter',
    role: 'Owner',
    number: '555-555-5555',
    email: 'hunter@example.xyz',
  },
  {
    name: 'Karma',
    role: 'Manager',
    number: '555-555-5555',
    email: 'karma@example.xyz',
  },
  {
    name: 'Braden',
    role: 'Chef',
    number: '555-555-5555',
    email: 'braden@example.xyz',
  },
]

function Contact(anchor) {
  const container = document.createElement('div');
  const template = document.querySelector('#contact-template');

  for (const contact of contacts) {
    const clone = template.content.cloneNode(true);
    const nameHeader = clone.querySelector('h3');
    const list = clone.querySelector('ul');

    const role = document.createElement('li');
    const number = document.createElement('li');
    const email = document.createElement('li');

    nameHeader.textContent = contact.name;
    role.textContent = contact.role;
    number.textContent = contact.number;
    email.textContent = contact.email;

    list.append(role);
    list.append(number);
    list.append(email);

    container.append(clone);
  }

  anchor.append(container);

}

export default Contact;