import { stages, sourceTypes, proofChecklist, resources, errors } from './data.js';

const make = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
};

export function initStages() {
  const card = document.querySelector('#stageCard');
  const buttons = [...document.querySelectorAll('.tab')];
  const render = (index = 0) => {
    const stage = stages[index];
    card.innerHTML = '';
    card.append(make('h3', '', stage.title));
    card.append(make('p', '', stage.goal));
    const list = make('ul');
    stage.sources.forEach(item => list.append(make('li', '', item)));
    card.append(list);
    const criterion = make('div', 'callout');
    criterion.innerHTML = `<strong>Критерий перехода дальше:</strong> ${stage.criterion}`;
    card.append(criterion);
    buttons.forEach(button => button.classList.toggle('active', Number(button.dataset.stage) === index));
  };
  buttons.forEach(button => button.addEventListener('click', () => render(Number(button.dataset.stage))));
  render(0);
}

export function initSources() {
  const container = document.querySelector('#sourceCards');
  const input = document.querySelector('#sourceFilter');
  const render = () => {
    const query = (input.value || '').trim().toLowerCase();
    container.innerHTML = '';
    sourceTypes
      .filter(item => [item.category, item.title, item.gives, item.use].join(' ').toLowerCase().includes(query))
      .forEach(item => {
        const card = make('article', 'source-card');
        card.append(make('span', 'tag', item.category));
        card.append(make('h3', '', item.title));
        card.append(make('p', '', item.gives));
        const use = make('p');
        use.innerHTML = `<strong>Когда:</strong> ${item.use}`;
        card.append(use);
        container.append(card);
      });
  };
  input?.addEventListener('input', render);
  render();
}

export function initFileBuilder() {
  const form = document.querySelector('#fileBuilder');
  const output = document.querySelector('#fileNameResult');
  const copyButton = document.querySelector('#copyFileName');
  if (!form || !output) return;

  const clean = value => value
    .trim()
    .replace(/ё/g, 'е')
    .replace(/Ё/g, 'Е')
    .replace(/[\s,;:]+/g, '_')
    .replace(/[\\/"'<>|?*]+/g, '')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');

  const update = () => {
    const data = new FormData(form);
    const date = clean(data.get('date') || '0000-00-00');
    const person = clean(data.get('person') || 'Неизвестный');
    const type = clean(data.get('type') || 'Документ');
    const place = clean(data.get('place') || 'место-неизвестно');
    const ref = clean(data.get('ref') || 'источник-неизвестен');
    const ext = clean(data.get('ext') || 'jpg').replace(/^\./, '');
    output.value = `${date}__${person}__${type}__${place}__${ref}__v01.${ext}`;
    output.textContent = output.value;
  };

  form.addEventListener('input', update);
  copyButton?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(output.value || output.textContent);
      copyButton.textContent = 'Скопировано';
      setTimeout(() => { copyButton.textContent = 'Скопировать имя'; }, 1300);
    } catch {
      copyButton.textContent = 'Выделите вручную';
      setTimeout(() => { copyButton.textContent = 'Скопировать имя'; }, 1300);
    }
  });
  update();
}

export function initChecklist() {
  const container = document.querySelector('#proofChecklist');
  if (!container) return;
  const storageKey = 'genealogy-proof-checklist';
  const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
  proofChecklist.forEach((item, index) => {
    const id = `proof-${index}`;
    const label = make('label');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = id;
    input.checked = Boolean(saved[id]);
    input.addEventListener('change', () => {
      saved[id] = input.checked;
      localStorage.setItem(storageKey, JSON.stringify(saved));
    });
    label.append(input, make('span', '', item));
    container.append(label);
  });
}

export function initResources() {
  const body = document.querySelector('#resourceRows');
  const input = document.querySelector('#resourceFilter');
  const render = () => {
    const query = (input.value || '').trim().toLowerCase();
    body.innerHTML = '';
    resources
      .filter(row => row.join(' ').toLowerCase().includes(query))
      .forEach(([name, purpose, url]) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${name}</td><td>${purpose}</td><td><a href="${url}" target="_blank" rel="noreferrer noopener">${url}</a></td>`;
        body.append(tr);
      });
  };
  input?.addEventListener('input', render);
  render();
}

export function initAccordion() {
  const container = document.querySelector('#errorAccordion');
  if (!container) return;
  errors.forEach(([title, solution], index) => {
    const item = make('article', 'accordion-item');
    const button = make('button', 'accordion-button');
    button.type = 'button';
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML = `<span>${title}</span><span aria-hidden="true">+</span>`;
    const panel = make('div', 'accordion-panel', solution);
    button.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
      button.querySelector('[aria-hidden="true"]').textContent = open ? '−' : '+';
    });
    if (index === 0) {
      item.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
      button.querySelector('[aria-hidden="true"]').textContent = '−';
    }
    item.append(button, panel);
    container.append(item);
  });
}
