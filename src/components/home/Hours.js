const schedule = [
  { day: 'Monday', am: '6:00', pm: '6:00' },
  { day: 'Tuesday', am: '6:00', pm: '6:00' },
  { day: 'Wednesday', am: '6:00', pm: '6:00' },
  { day: 'Thursday', am: '6:00', pm: '6:00' },
  { day: 'Friday', am: '6:00', pm: '5:00' },
  { day: 'Saturday', am: '8:00', pm: '3:00' },
  { day: 'Sunday', am: '8:00', pm: '1:00' },
]

function Hours() {
  const container = document.createElement('div');
  const header = document.createElement('h1');
  const list = document.createElement('ul');

  container.classList.add('schedule');

  for (let day of schedule) {
    const item = document.createElement('li');
    item.textContent =
      `${day.day}: ${day.am}am - ${day.pm}pm`

    list.append(item);
  }

  header.textContent = 'Schedule';
  container.append(header);
  container.append(list);
  return container;
}

export default Hours;