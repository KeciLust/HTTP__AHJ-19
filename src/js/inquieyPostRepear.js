export default function inquiryPostRepear(params) {
  const xhr = new XMLHttpRequest();
  const url = 'http://localhost:7070/?method=repearTicket';
  xhr.open('post', url);
  xhr.send(params);
  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const data = JSON.parse(xhr.response);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
  });
}
