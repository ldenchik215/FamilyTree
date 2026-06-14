(function() {
  const make = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };

  window.FTInteractions = {
    initStages: function() {
      const card = document.querySelector('#stageCard');
      const buttons = [...document.querySelectorAll('.tab')];
      if (!card || buttons.length === 0) return;

      const render = (index = 0) => {
        const stage = window.FTData.stages[index];
        card.innerHTML = '';
        card.append(make('h3', '', stage.title));
        card.append(make('p', 'stage-goal', stage.goal));
        
        const listTitle = make('h4', 'stage-sources-title', 'Основные источники:');
        card.append(listTitle);
        
        const list = make('ul', 'stage-sources-list');
        stage.sources.forEach(item => list.append(make('li', '', item)));
        card.append(list);
        
        const criterion = make('div', 'callout');
        criterion.innerHTML = `<strong>Критерий перехода дальше:</strong> ${stage.criterion}`;
        card.append(criterion);
        
        buttons.forEach(button => button.classList.toggle('active', Number(button.dataset.stage) === index));
      };
      
      buttons.forEach(button => button.addEventListener('click', () => render(Number(button.dataset.stage))));
      render(0);
    },

    initSources: function() {
      const container = document.querySelector('#sourceCards');
      const input = document.querySelector('#sourceFilter');
      if (!container) return;

      const render = () => {
        const query = (input ? input.value : '').trim().toLowerCase();
        container.innerHTML = '';
        window.FTData.sourceTypes
          .filter(item => [item.category, item.title, item.gives, item.use].join(' ').toLowerCase().includes(query))
          .forEach(item => {
            const card = make('article', 'source-card');
            card.append(make('span', 'tag', item.category));
            card.append(make('h3', '', item.title));
            
            const givesDiv = make('div', 'source-gives');
            givesDiv.innerHTML = `<strong>Что дает:</strong> ${item.gives}`;
            card.append(givesDiv);
            
            const useDiv = make('div', 'source-use');
            useDiv.innerHTML = `<strong>Когда применять:</strong> ${item.use}`;
            card.append(useDiv);
            
            container.append(card);
          });
      };
      
      if (input) {
        input.addEventListener('input', render);
      }
      render();
    },

    initFileBuilder: function() {
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
          copyButton.classList.add('success');
          setTimeout(() => { 
            copyButton.textContent = 'Скопировать имя'; 
            copyButton.classList.remove('success');
          }, 1300);
        } catch {
          copyButton.textContent = 'Выделите вручную';
          setTimeout(() => { copyButton.textContent = 'Скопировать имя'; }, 1300);
        }
      });
      update();
    },

    initChecklist: function() {
      const container = document.querySelector('#proofChecklist');
      if (!container) return;
      const storageKey = 'genealogy-proof-checklist';
      const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
      container.innerHTML = '';
      
      window.FTData.proofChecklist.forEach((item, index) => {
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
    },

    initResources: function() {
      const body = document.querySelector('#resourceRows');
      const input = document.querySelector('#resourceFilter');
      if (!body) return;

      const render = () => {
        const query = (input ? input.value : '').trim().toLowerCase();
        body.innerHTML = '';
        window.FTData.resources
          .filter(row => row.join(' ').toLowerCase().includes(query))
          .forEach(([name, purpose, url]) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${name}</td><td>${purpose}</td><td><a href="${url}" target="_blank" rel="noreferrer noopener">${url} ↗</a></td>`;
            body.append(tr);
          });
      };
      
      if (input) {
        input.addEventListener('input', render);
      }
      render();
    },

    initAccordion: function() {
      const container = document.querySelector('#errorAccordion');
      if (!container) return;
      container.innerHTML = '';
      
      window.FTData.errors.forEach(([title, solution], index) => {
        const item = make('article', 'accordion-item');
        const button = make('button', 'accordion-button');
        button.type = 'button';
        button.setAttribute('aria-expanded', 'false');
        button.innerHTML = `<span>${title}</span><span class="icon" aria-hidden="true">+</span>`;
        
        const panel = make('div', 'accordion-panel');
        panel.textContent = solution;
        
        button.addEventListener('click', () => {
          const open = item.classList.toggle('open');
          button.setAttribute('aria-expanded', String(open));
          button.querySelector('.icon').textContent = open ? '−' : '+';
        });
        
        if (index === 0) {
          item.classList.add('open');
          button.setAttribute('aria-expanded', 'true');
          button.querySelector('.icon').textContent = '−';
        }
        
        item.append(button, panel);
        container.append(item);
      });
    }
  };
})();
