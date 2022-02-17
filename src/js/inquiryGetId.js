export default function inquiryGetId(id) {
  const xhr = new XMLHttpRequest();
  const url = `http://localhost:7070/?method=ticketById&id=${id}`;
  xhr.open('GET', url);
  xhr.send();
  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const data = JSON.parse(xhr.response);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    }
  });
}
