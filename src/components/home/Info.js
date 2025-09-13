function Info() {
    const container = document.createElement('div');
    const header = document.createElement('h2');
    const desc = document.createElement('p');

    container.classList.add('desc-container');
    header.textContent = 'About Us';
    desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida convallis metus, vel suscipit risus viverra ut. Cras tristique felis eget odio congue, at rutrum libero volutpat. Phasellus accumsan vehicula quam, vel posuere tellus. Praesent varius, mauris quis placerat ultricies, eros libero lobortis ipsum, in feugiat erat augue vitae purus. Praesent tincidunt, felis facilisis iaculis dictum, risus odio imperdiet ex, sit amet tempor enim lectus non metus. Pellentesque et purus malesuada, egestas sem lobortis, tincidunt est. Sed erat eros, posuere quis mi a, hendrerit lacinia quam. In hac habitasse platea dictumst. Nulla pulvinar dolor sit amet dapibus dictum. Integer ultrices dictum nunc vel congue. Nunc id imperdiet massa, quis pharetra neque. Nulla sit amet lacus nec quam efficitur tincidunt eu sit amet orci. Aliquam ex nulla, consectetur eu sollicitudin eget, posuere eu sapien. Duis in urna libero.'

    container.append(header);
    container.append(desc);

    return container;
}

export default Info;