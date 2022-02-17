export default function inquiryPostForm(params) {
  const xhr = new XMLHttpRequest();
  const url = 'http://localhost:7070/?method=createTicket';
  xhr.open('post', url);
  xhr.send(params);
  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const data = JSON.parse(xhr.response);
        const ticket = document.querySelector('.container').lastChild.closest('div');
        ticket.setAttribute('id', data.id);
      } catch (e) {
        console.log(e);
      }
    }
  });
}
