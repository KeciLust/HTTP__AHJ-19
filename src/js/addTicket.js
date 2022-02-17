/* eslint-disable no-param-reassign */

import inquiryPostRepear from './inquieyPostRepear';
import inquiryGetId from './inquiryGetId';
import time from './time';

export default function addTicket(shortDescription, fullDescription, id, date, status) {
  const ticket = document.createElement('div');
  ticket.classList.add('ticket');

  ticket.innerHTML = `
  
    <input type="checkbox" class="result">
    <div class="ticketText">
    <div class="ticketShortText">${shortDescription}</div>
    <div class="ticketFullText">${fullDescription}</div></div>
    <span class="time">${date}</span>
    <button class="repear"></button>
    <button class="delete"></button>
  
  `;
  document.querySelector('.container').append(ticket);
  ticket.setAttribute('id', id);
  const params = JSON.stringify({
    status: `${ticket.querySelector('.result').checked}`,
    name: `${shortDescription}`,
    create: `${date}`,
    description: `${fullDescription}`,
  });

  const check = ticket.querySelector('.result');
  if (status.value) {
    check.checked = true;
  } else { check.checked = false; }

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
      console.log(ticket.id);
      inquiryGetId(ticket.id);
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
        e.target.closest('div').querySelector('.time').textContent = time();
        const repearParams = JSON.stringify({
          status: `${ticket.querySelector('.result').checked}`,
          name: `${ticket.querySelector('.ticketShortText').textContent}`,
          create: `${ticket.querySelector('.time').textContent}`,
          description: `${ticket.querySelector('.ticketFullText').textContent}`,
          id: `${ticket.getAttribute('id')}`,
        });
        inquiryPostRepear(repearParams);
      }
    }));
  });
  return params;
}
