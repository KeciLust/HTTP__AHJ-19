import addTicket from './addTicket';

export default function inquiry() {
  const xhr = new XMLHttpRequest();
  const url = 'http://localhost:7070/?method=allTickets';
  xhr.open('GET', url);
  xhr.send();
  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const data = JSON.parse(xhr.response);
        if (data.length > 0) {
          data.forEach((e) => {
            const el = JSON.parse(e);
            addTicket(el.name, el.description, el.id, el.create, el.status);
          });
        }
      } catch (e) {
        console.error(e);
      }
    }
  });
}
