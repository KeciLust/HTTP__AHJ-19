/* eslint-disable no-param-reassign */
import time from './time';

export default function addTicket() {
  const date = time();
  const ticket = document.createElement('div');
  ticket.classList.add('ticket');
  const shortDescription = document.querySelector('.descriptionChortText').value;
  const fullDescription = document.querySelector('.descriptionFullText').value;
  ticket.innerHTML = `
  
    <input type="checkbox" class="result">
    <div class="ticketText">
    <div class="ticketShortText"> ${shortDescription}</div>
    <div class="ticketFullText">${fullDescription}</div></div>
    <span class="time">${date}</span>
    <button class="repear"></button>
    <button class="delete"></button>
  
  `;
  document.querySelector('.container').append(ticket);
  ticket.querySelector('.ticketText').addEventListener('click', (e) => {
    e.preventDefault();

    if (ticket.querySelector('.ticketFullText').style.display === 'none') {
      ticket.querySelector('.ticketFullText').style.display = 'flex';
    } else {
      ticket.querySelector('.ticketFullText').style.display = 'none';
    }
  });
  ticket.querySelector('.delete').addEventListener('click', (e) => {
    e.preventDefault();
    if (document.querySelector('.deleteTicketModul').style.display === 'block') {
      return;
    }
    document.querySelector('.deleteTicketModul').style.display = 'block';
    [...document.querySelectorAll('.buttonTicketOk')].forEach((el) => el.addEventListener('click', (ev) => {
      ev.preventDefault();
      if (ev.target.closest('div').classList.contains('deleteTicketModul')) {
        ev.target.closest('div').style.display = 'none';
        e.target.closest('div').remove();
      }
    }));
  });
  ticket.querySelector('.repear').addEventListener('click', (e) => {
    e.preventDefault();
    if (document.querySelector('.repearTicketModul').style.display === 'block') {
      return;
    }
    document.querySelector('.repearTicketModul').style.display = 'block';
    document.querySelector('.repearTicketModul').querySelector('.descriptionChortText').value = e.target.closest('div').querySelector('.ticketShortText').textContent;
    document.querySelector('.repearTicketModul').querySelector('.descriptionFullText').value = e.target.closest('div').querySelector('.ticketFullText').textContent;
    [...document.querySelectorAll('.buttonTicketOk')].forEach((el) => el.addEventListener('click', (ev) => {
      ev.preventDefault();
      if (ev.target.closest('div').classList.contains('repearTicketModul')) {
        ev.target.closest('div').style.display = 'none';
        e.target.closest('div').querySelector('.ticketShortText').textContent = document.querySelector('.repearTicketModul').querySelector('.descriptionChortText').value;
        e.target.closest('div').querySelector('.ticketFullText').textContent = document.querySelector('.repearTicketModul').querySelector('.descriptionFullText').value;
      }
    }));
  });
}
