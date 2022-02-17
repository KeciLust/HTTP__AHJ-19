import addTicket from './addTicket';
import inquiry from './inquiryGet';
import inquiryPostForm from './inquiryPostForm';
import time from './time';

inquiry();

document.querySelector('.addTicket').addEventListener('click', (e) => {
  e.preventDefault();
  if (document.querySelector('.addTicketModul').style.display === 'block') {
    return;
  }
  document.querySelector('.addTicketModul').style.display = 'block';
});
[...document.querySelectorAll('.buttonTicketNo')].forEach((el) => el.addEventListener('click', (e) => {
  e.preventDefault();
  e.target.closest('div').style.display = 'none';
}));
[...document.querySelectorAll('.buttonTicketOk')].forEach((el) => el.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.closest('div').classList.contains('addTicketModul')) {
    if (e.target.closest('div').querySelector('.descriptionChortText').value) {
      const shortDescription = document.querySelector('.descriptionChortText').value;
      const fullDescription = document.querySelector('.descriptionFullText').value;
      const id = null;
      const status = false;
      const date = time();
      const params = addTicket(shortDescription, fullDescription, id, date, status);
      inquiryPostForm(params);

      e.target.closest('div').querySelector('.descriptionChortText').value = '';
      e.target.closest('div').querySelector('.descriptionFullText').value = '';
      e.target.closest('div').style.display = 'none';
    }
  }
}));
