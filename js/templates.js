// Russian genealogy search document templates
const templates = {
    1: {
        title: "Запрос в ЗАГС о выдаче справки о рождении",
        description: "Для получения справки о рождении с иными сведениями (место работы, адрес, воспреемники и т.д.) за последние 100 лет.",
        rawText: `В орган ЗАГС [Название_ЗАГС]
Адрес: [Адрес_ЗАГС]

От заявителя: [ФИО_Заявителя]
Паспорт: серия [Серия] № [Номер], выдан [Кем_Выдан], дата выдачи: [Дата_Выдачи], код подразделения: [Код]
Адрес регистрации: [Адрес_Регистрации]
Почтовый адрес для ответа: [Почтовый_Адрес]
Телефон: [Телефон]
E-mail: [Email]

ЗАЯВЛЕНИЕ
о выдаче повторной справки о рождении с иными сведениями

Прошу выдать повторную справку о рождении с иными сведениями в отношении моего (моей) [Степень_Родства] (указать родство, например: дедушки):

1. Фамилия, имя, отчество разыскиваемого лица: [ФИО_Разыскиваемого]
2. Дата рождения: [Дата_Рождения] (если точная дата неизвестна, указать год)
3. Место рождения: [Место_Рождения]
4. Отец разыскиваемого лица (ФИО): [ФИО_Отца_Разыскиваемого]
5. Мать разыскиваемого лица (ФИО): [ФИО_Матери_Разыскиваемого]
6. Место государственной регистрации: [Место_Регистрации_ЗАГС]
7. Дата государственной регистрации: [Дата_Регистрации_Записи] (если известна)

Документ необходим для подтверждения родства и проведения генеалогического исследования семьи. 

На основании Порядка заполнения бланков справок и свидетельств, утвержденного Приказом Минюста России, прошу внести в графу «Иные сведения» выдаваемой справки все имеющиеся в архивной записи акта о рождении сведения, а именно:
- Точное время и место рождения;
- Сведения об объявлении ребенка рожденным в браке или вне брака;
- Сословие, род занятий, место работы и должность отца и матери;
- Национальность и гражданство родителей;
- Возраст родителей на момент рождения ребенка;
- Имена, отчества, фамилии и адреса лиц, сделавших заявление о рождении;
- Сведения о выданных ранее повторных свидетельствах;
- Особые отметки и примечания, внесенные в книгу регистрации актов гражданского состояния.

В соответствии со ст. 9 Федерального закона от 15.11.1997 № 143-ФЗ «Об актах гражданского состояния», документы, подтверждающие мою родственную связь с разыскиваемым лицом и факт его смерти, прилагаю к настоящему заявлению.

Прошу направить готовую справку в орган ЗАГС по адресу: [Название_и_Адрес_ЗАГС_для_Получения] для выдачи мне лично под роспись при предъявлении подлинников документов о родстве.

Приложения:
1. Копия паспорта заявителя.
2. Копия свидетельства о рождении заявителя.
3. Копия свидетельства о браке заявителя (при смене фамилии).
4. Копии документов, подтверждающих цепочку родства (свидетельства о рождении/браке родителей).
5. Копия свидетельства (справки) о смерти разыскиваемого лица.
6. Квитанция об уплате государственной пошлины (200 рублей).

Дата: [Дата_Подачи]                               Подпись: ________________ / [Инициалы_Фамилия]`
    },
    2: {
        title: "Запрос в архив о рождении (метрические книги)",
        description: "Для поиска записей о рождении и крещении в церковных метрических книгах до 1917–1920-х годов.",
        rawText: `В Дирекцию Государственного архива [Название_Архива]
Адрес: [Адрес_Архива]

От заявителя: [ФИО_Заявителя]
Адрес регистрации: [Адрес_Регистрации]
Почтовый адрес для ответа: [Почтовый_Адрес]
Телефон: [Телефон]
E-mail: [Email]

ЗАПРОС
о поиске записи о рождении в метрических книгах

Уважаемые сотрудники архива!

Прошу Вас провести поиск записи о рождении/крещении моего (моей) [Степень_Родства] (указать родство, например: прадеда) в метрических книгах церквей за [Искомый_Год] год (допустимый интервал поиска: [Интервал_Поиска_Годы]).

Сведения о разыскиваемом лице:
1. Фамилия, имя, отчество: [ФИО_Разыскиваемого] (для женщин укажите также девичью фамилию, если известна)
2. Дата и место рождения: [Дата_Рождения], [Место_Рождения] (указать губернию, уезд, волость, село/деревню)
3. Сословие: [Сословие] (например: крестьяне, мещане, купцы, духовенство, дворяне)
4. Вероисповедание: [Вероисповедание] (например: православное, старообрядческое, католическое)
5. Имена родителей (если известны): [ФИО_Родителей_Разыскиваемого]
6. Наименование приходской церкви (если известно): [Название_Церкви]

В случае обнаружения записи о рождении прошу Вас выдать архивную справку, содержащую все сведения из метрической книги (даты рождения и крещения, сословие, имена и отчества родителей, имена воспреемников/крестных, имя священника), а также архивную выписку и, по возможности, ксерокопию/скан-копию соответствующего листа метрической книги.

Если метрические книги за указанный период не сохранились, прошу сообщить, какими альтернативными источниками (исповедные ведомости, ревизские сказки, посемейные списки) по данному населенному пункту располагает архив.

Оплату гарантирую. Прошу направить в мой адрес счет на оплату услуг архива по проведению поиска и оформлению архивной справки. Ответ прошу выслать на указанный почтовый (или электронный) адрес.

Дата: [Дата_Подачи]                               Подпись: ________________ / [Инициалы_Фамилия]`
    },
    3: {
        title: "Запрос в ЦАМО РФ о судьбе военнослужащего",
        description: "Для поиска сведений о службе, наградах, ранениях и гибели солдат Красной Армии в период ВОВ.",
        rawText: `В Центральный архив Министерства обороны РФ (ЦАМО)
Адрес: 142100, Московская область, г. Подольск, ул. Кирова, д. 74

От заявителя: [ФИО_Заявителя]
Адрес регистрации: [Адрес_Регистрации]
Почтовый адрес для ответа: [Почтовый_Адрес]
Телефон: [Телефон]
E-mail: [Email]

ЗАПРОС
о поиске сведений о военнослужащем Великой Отечественной войны

Уважаемые сотрудники архива!

Прошу Вас предоставить сведения о прохождении военной службы, награждениях, ранениях и судьбе моего (моей) [Степень_Родства] (например: деда) — участника Великой Отечественной войны.

Сведения о военнослужащем:
1. Фамилия, имя, отчество: [ФИО_Военнослужащего]
2. Год и место рождения: [Год_Рождения], [Место_Рождения]
3. Место и дата призыва в РККА: [Дата_Призыва], [Название_РВК] (каким РВК призван)
4. Воинское звание (на момент последнего известия/демобилизации): [Воинское_Звание]
5. Воинская специальность/должность: [Должность_Специальность]
6. Номер воинской части, полевой почты (если известны): [Воинская_Часть_Полевая_Почта]
7. Партийность (член ВКП(б)/кандидат/комсомолец): [Партийность]
8. Дата и причина прекращения службы (погиб, пропал без вести, демобилизован по ранению): [Прекращение_Службы]
9. Имя жены/родителей, указанных в документах о призыве: [Имя_Родственника_в_Документах]
10. Дополнительные сведения (награды, ранения, нахождение в плену/госпитале): [Дополнительные_Сведения]

Прошу провести поиск по картотекам учета личного состава (УПК офицеров, картотека рядового и сержантского состава), наградным фондам, документам воинской части, а также по книгам учета безвозвратных потерь.

В случае нахождения сведений прошу Вас выдать:
- Архивную справку с подробным послужным списком военнослужащего;
- Копию учетно-послужной карты (УПК) (для офицерского состава);
- Сведения о наградах и ранениях.

Документы, подтверждающие мое родство с разыскиваемым лицом (в случае необходимости ознакомления с личным делом), прилагаю.

Ответ прошу направить на мой почтовый адрес.

Приложения:
1. Копии документов, подтверждающих цепочку родства (свидетельства о рождении, браке).
2. Распечатка карточки военнослужащего с портала «Память народа» (если есть).

Дата: [Дата_Подачи]                               Подпись: ________________ / [Инициалы_Фамилия]`
    },
    4: {
        title: "Запрос в архив по ревизским сказкам",
        description: "Для поиска информации о составе крестьянских или мещанских семей до 1858 года.",
        rawText: `В Дирекцию Государственного архива [Название_Архива]
Адрес: [Адрес_Архива]

От заявителя: [ФИО_Заявителя]
Адрес регистрации: [Адрес_Регистрации]
Почтовый адрес для ответа: [Почтовый_Адрес]
Телефон: [Телефон]
E-mail: [Email]

ЗАПРОС
на проведение генеалогического исследования (поиск по ревизским сказкам)

Уважаемые сотрудники архива!

Прошу Вас провести генеалогическое исследование и выявить состав семьи моих предков по фамилии [Искомая_Фамилия] (крестьян/мещан/купцов), проживавших в деревне/селе [Название_Села] [Название_Волости] волости [Название_Уезда] уезда [Название_Губернии] губернии.

Для исследования прошу использовать материалы ревизских сказок (РC) за период с 1858 г. (10-я ревизия) по 1811 г. (6-я ревизия) [или указать другой доступный интервал, например, до 1782 г. (4-я ревизия)].

Известные сведения о начальном предке (главе семьи), от которого необходимо вести поиск вглубь:
1. Фамилия, имя, отчество: [ФИО_Предка]
2. Примерный год рождения (или возраст по ревизии): [Год_Рождения_Возраст]
3. Состав его семьи по состоянию на середину XIX века (если известен): [Состав_Семьи]
4. Дата и место смерти (если известны): [Дата_Смерти], [Место_Смерти]

По результатам поиска прошу Вас составить архивную справку с поколенным перечнем членов семьи по ревизским сказкам, указанием их возраста по каждой ревизии, состава семей, дат и причин убытия (смерть, отдача в рекруты, переселение), а также предоставить ксерокопии или цифровые копии листов ревизских сказок с записями о моих предках.

Оплату гарантирую. Прошу направить мне на электронную почту договор и счет на предоплату поисковых работ в соответствии с действующим прейскурантом архива.

Дата: [Дата_Подачи]                               Подпись: ________________ / [Инициалы_Фамилия]`
    }
};

// Define fields configuration and their corresponding tokens and templates
const fieldsConfig = [
    // Recipient Info
    { id: 'recipient_name', label: 'Название архива / ЗАГС', type: 'text', placeholder: 'Напр., ГАСО или ЗАГС г. Екатеринбурга', templates: [1, 2, 4], tokens: ['[Название_ЗАГС]', '[Название_Архива]'] },
    { id: 'recipient_address', label: 'Адрес учреждения', type: 'text', placeholder: 'Напр., 620000, г. Екатеринбург, ул. Главная, 12', templates: [1, 2, 4], tokens: ['[Адрес_ЗАГС]', '[Адрес_Архива]'] },

    // Applicant Info
    { id: 'app_name', label: 'ФИО заявителя (полностью)', type: 'text', placeholder: 'Иванов Иван Иванович', templates: [1, 2, 3, 4], tokens: ['[ФИО_Заявителя]'] },
    { id: 'app_passport_seria', label: 'Серия паспорта', type: 'text', placeholder: '4510', templates: [1], tokens: ['[Серия]'] },
    { id: 'app_passport_number', label: 'Номер паспорта', type: 'text', placeholder: '123456', templates: [1], tokens: ['[Номер]'] },
    { id: 'app_passport_issuer', label: 'Кем выдан паспорт', type: 'text', placeholder: 'ТП №1 ОУФМС России', templates: [1], tokens: ['[Кем_Выдан]'] },
    { id: 'app_passport_date', label: 'Дата выдачи паспорта', type: 'text', placeholder: '10.05.2018', templates: [1], tokens: ['[Дата_Выдачи]'] },
    { id: 'app_passport_code', label: 'Код подразделения', type: 'text', placeholder: '770-001', templates: [1], tokens: ['[Код]'] },
    { id: 'app_address', label: 'Адрес регистрации', type: 'text', placeholder: 'г. Москва, ул. Ленина, д. 5, кв. 21', templates: [1, 2, 3, 4], tokens: ['[Адрес_Регистрации]'] },
    { id: 'app_mail_address', label: 'Почтовый адрес (для ответов)', type: 'text', placeholder: '101000, г. Москва, ул. Ленина, д. 5, кв. 21', templates: [1, 2, 3, 4], tokens: ['[Почтовый_Адрес]'] },
    { id: 'app_phone', label: 'Телефон', type: 'text', placeholder: '+7 (999) 123-4567', templates: [1, 2, 3, 4], tokens: ['[Телефон]'] },
    { id: 'app_email', label: 'E-mail', type: 'email', placeholder: 'ivanov@example.com', templates: [1, 2, 3, 4], tokens: ['[Email]'] },

    // Search subject info
    { id: 'rel_degree', label: 'Степень родства (кем приходится)', type: 'text', placeholder: 'дедушки / прадеда', templates: [1, 2, 3], tokens: ['[Степень_Родства]'] },
    
    // Names depending on templates (represented by target_name)
    { id: 'target_name', label: 'ФИО разыскиваемого лица', type: 'text', placeholder: 'Иванов Петр Сидорович', templates: [1, 2, 3, 4], tokens: ['[ФИО_Разыскиваемого]', '[ФИО_Военнослужащего]', '[ФИО_Предка]'] },
    { id: 'target_birth_date', label: 'Дата/Год рождения', type: 'text', placeholder: '12.05.1915 или 1915 г.', templates: [1, 2, 3, 4], tokens: ['[Дата_Рождения]', '[Год_Рождения]', '[Год_Рождения_Возраст]'] },
    { id: 'target_birth_place', label: 'Место рождения / жительства', type: 'text', placeholder: 'Пермская губ., Екатеринбургский уезд, с. Косулино', templates: [1, 2, 3, 4], tokens: ['[Место_Рождения]'] },

    // ZAGS specific details
    { id: 'target_father', label: 'ФИО отца разыскиваемого', type: 'text', placeholder: 'Иванов Сидор Петрович', templates: [1], tokens: ['[ФИО_Отца_Разыскиваемого]'] },
    { id: 'target_mother', label: 'ФИО матери разыскиваемого', type: 'text', placeholder: 'Иванова Мария Ивановна', templates: [1], tokens: ['[ФИО_Матери_Разыскиваемого]'] },
    { id: 'target_reg_place', label: 'Место гос. регистрации (ЗАГС)', type: 'text', placeholder: 'ЗАГС Белоярского района', templates: [1], tokens: ['[Место_Регистрации_ЗАГС]'] },
    { id: 'target_reg_date', label: 'Дата регистрации записи', type: 'text', placeholder: '15.05.1915 г. (если известна)', templates: [1], tokens: ['[Дата_Регистрации_Записи]'] },
    { id: 'target_zags_receive', label: 'Куда направить справку для получения', type: 'text', placeholder: 'ЗАГС Октябрьского района г. Екатеринбурга (ул. Луначарского, 4)', templates: [1], tokens: ['[Название_и_Адрес_ЗАГС_для_Получения]'] },

    // State Archive Birth specific details
    { id: 'search_year', label: 'Искомый год', type: 'text', placeholder: '1895', templates: [2], tokens: ['[Искомый_Год]'] },
    { id: 'search_range', label: 'Интервал поиска (лет)', type: 'text', placeholder: '1893–1897 гг.', templates: [2], tokens: ['[Интервал_Поиска_Годы]'] },
    { id: 'target_social', label: 'Сословие предка', type: 'text', placeholder: 'крестьяне / мещане / дворяне', templates: [2], tokens: ['[Сословие]'] },
    { id: 'target_religion', label: 'Вероисповедание предка', type: 'text', placeholder: 'православное / старообрядческое', templates: [2], tokens: ['[Вероисповедание]'] },
    { id: 'target_parents', label: 'Имена родителей предка', type: 'text', placeholder: 'Иванов Сидор Петрович и Иванова Мария Ивановна', templates: [2], tokens: ['[ФИО_Родителей_Разыскиваемого]'] },
    { id: 'target_church', label: 'Наименование приходской церкви', type: 'text', placeholder: 'Церковь Вознесения Господня с. Косулино', templates: [2], tokens: ['[Название_Церкви]'] },

    // Military Archive specific details
    { id: 'mil_call_date', label: 'Дата призыва', type: 'text', placeholder: 'октябрь 1941 г.', templates: [3], tokens: ['[Дата_Призыва]'] },
    { id: 'mil_call_rvk', label: 'Название РВК призыва', type: 'text', placeholder: 'Камышловский РВК Свердловской области', templates: [3], tokens: ['[Название_РВК]'] },
    { id: 'mil_rank', label: 'Воинское звание', type: 'text', placeholder: 'красноармеец / сержант / лейтенант', templates: [3], tokens: ['[Воинское_Звание]'] },
    { id: 'mil_role', label: 'Воинская специальность/должность', type: 'text', placeholder: 'стрелок / командир взвода', templates: [3], tokens: ['[Должность_Специальность]'] },
    { id: 'mil_unit', label: 'Номер части, полка или полевой почты', type: 'text', placeholder: '365 стрелковый полк / пп 12345', templates: [3], tokens: ['[Воинская_Часть_Полевая_Почта]'] },
    { id: 'mil_party', label: 'Партийность', type: 'text', placeholder: 'беспартийный / член ВКП(б)', templates: [3], tokens: ['[Партийность]'] },
    { id: 'mil_end_service', label: 'Причина прекращения службы', type: 'text', placeholder: 'пропал без вести в декабре 1942 г.', templates: [3], tokens: ['[Прекращение_Службы]'] },
    { id: 'mil_relative_name', label: 'Родственник, указанный в призыве', type: 'text', placeholder: 'жена Иванова Анна Петровна', templates: [3], tokens: ['[Имя_Родственника_в_Документах]'] },
    { id: 'mil_extra_info', label: 'Дополнительные сведения (награды, ранения)', type: 'textarea', placeholder: 'награжден медалью «За отвагу», лечился в госпитале 1234', templates: [3], tokens: ['[Дополнительные_Сведения]'] },

    // General Census / Revizskie Skazki details
    { id: 'search_family_name', label: 'Искомая фамилия семьи', type: 'text', placeholder: 'Ивановы', templates: [4], tokens: ['[Искомая_Фамилия]'] },
    { id: 'search_village', label: 'Название села/деревни', type: 'text', placeholder: 'Косулино', templates: [4], tokens: ['[Название_Села]'] },
    { id: 'search_volost', label: 'Название волости', type: 'text', placeholder: 'Белоярская', templates: [4], tokens: ['[Название_Волости]'] },
    { id: 'search_uezd', label: 'Название уезда', type: 'text', placeholder: 'Екатеринбургский', templates: [4], tokens: ['[Название_Уезда]'] },
    { id: 'search_gubernia', label: 'Название губернии', type: 'text', placeholder: 'Пермская', templates: [4], tokens: ['[Название_Губернии]'] },
    { id: 'search_family_members', label: 'Состав семьи предка', type: 'textarea', placeholder: 'Иванов Петр Сидорович (глава), жена Анна Петровна, сыновья Иван и Федор', templates: [4], tokens: ['[Состав_Семьи]'] },
    { id: 'search_death_date', label: 'Дата смерти предка', type: 'text', placeholder: '1865 г.', templates: [4], tokens: ['[Дата_Смерти]'] },
    { id: 'search_death_place', label: 'Место смерти предка', type: 'text', placeholder: 'с. Косулино', templates: [4], tokens: ['[Место_Смерти]'] },

    // Signoff
    { id: 'submission_date', label: 'Дата подачи запроса', type: 'text', placeholder: '07.06.2026', templates: [1, 2, 3, 4], tokens: ['[Дата_Подачи]'] },
    { id: 'signature_initials', label: 'Инициалы Фамилия', type: 'text', placeholder: 'И.И. Иванов', templates: [1, 2, 3, 4], tokens: ['[Инициалы_Фамилия]'] }
];

let activeTemplateId = 1;
const formValues = {};

document.addEventListener('DOMContentLoaded', () => {
    initSelectorCards();
    renderFormFields();
    updateLivePreview();
    initCopyButtons();
    initDownloadButtons();
});

// Initialize the 4 template selection cards
function initSelectorCards() {
    const cards = document.querySelectorAll('.template-selector-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            activeTemplateId = parseInt(card.getAttribute('data-id'), 10);
            renderFormFields();
            updateLivePreview();
        });
    });
}

// Render input fields for the active template
function renderFormFields() {
    const container = document.getElementById('form-fields-container');
    if (!container) return;

    container.innerHTML = '';
    
    // Filter fields applicable to active template
    const activeFields = fieldsConfig.filter(field => field.templates.includes(activeTemplateId));
    
    // Group fields logically: Applicant info vs Target/Search info
    const applicantHeader = document.createElement('h4');
    applicantHeader.textContent = 'Данные заявителя';
    applicantHeader.style.marginTop = '0';
    applicantHeader.style.marginBottom = '15px';
    applicantHeader.style.color = 'var(--primary-green)';
    container.appendChild(applicantHeader);

    let targetHeaderAdded = false;

    activeFields.forEach(field => {
        // Add divider when switching to target info
        if (!targetHeaderAdded && (
            field.id === 'rel_degree' || 
            field.id === 'target_name' || 
            field.id === 'search_year' || 
            field.id === 'search_family_name'
        )) {
            const targetHeader = document.createElement('h4');
            targetHeader.textContent = 'Сведения о поиске и разыскиваемом лице';
            targetHeader.style.marginTop = '25px';
            targetHeader.style.marginBottom = '15px';
            targetHeader.style.color = 'var(--primary-green)';
            container.appendChild(targetHeader);
            targetHeaderAdded = true;
        }

        const group = document.createElement('div');
        group.className = 'form-group';

        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;
        group.appendChild(label);

        let input;
        const savedValue = formValues[field.id] || '';

        if (field.type === 'textarea') {
            input = document.createElement('textarea');
            input.rows = 3;
        } else {
            input = document.createElement('input');
            input.type = field.type;
        }

        input.id = field.id;
        input.placeholder = field.placeholder;
        input.value = savedValue;

        // Auto-populate current date if it is submission_date
        if (field.id === 'submission_date' && !input.value) {
            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0');
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const year = today.getFullYear();
            input.value = `${day}.${month}.${year}`;
            formValues[field.id] = input.value;
        }

        input.addEventListener('input', (e) => {
            formValues[field.id] = e.target.value;
            updateLivePreview();
        });

        group.appendChild(input);
        container.appendChild(group);
    });
}

// Generate the document text by replacing tokens with field values or highlighted placeholders
function getDocumentContent(isHtmlPreview = true) {
    const template = templates[activeTemplateId];
    if (!template) return '';

    let text = template.rawText;
    const activeFields = fieldsConfig.filter(field => field.templates.includes(activeTemplateId));

    activeFields.forEach(field => {
        const val = formValues[field.id];
        field.tokens.forEach(token => {
            if (val && val.trim() !== '') {
                // If text replacement is for HTML, we escape it first
                const escapedVal = isHtmlPreview ? escapeHtml(val) : val;
                text = text.replace(new RegExp(escapeRegExp(token), 'g'), escapedVal);
            } else {
                if (isHtmlPreview) {
                    text = text.replace(new RegExp(escapeRegExp(token), 'g'), `<span class="highlight-token">${token}</span>`);
                } else {
                    text = text.replace(new RegExp(escapeRegExp(token), 'g'), token);
                }
            }
        });
    });

    return text;
}

// Update the paper live preview panel
function updateLivePreview() {
    const preview = document.getElementById('document-preview');
    if (preview) {
        preview.innerHTML = getDocumentContent(true);
    }
}

// Utility to escape HTML to prevent XSS in preview rendering
function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Utility to escape RegExp characters
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Initialize clipboard copy buttons (both catalog copy and preview copy)
function initCopyButtons() {
    // Copy filled document in preview
    const copyPreviewBtn = document.getElementById('copy-preview-btn');
    if (copyPreviewBtn) {
        copyPreviewBtn.addEventListener('click', () => {
            const plainText = getDocumentContent(false);
            copyTextToClipboard(plainText, copyPreviewBtn, "Текст скопирован");
        });
    }

    // Direct copies from catalog
    const catalogCards = document.querySelectorAll('.template-selector-card');
    catalogCards.forEach(card => {
        const copyBtn = card.querySelector('.btn-copy-template');
        if (copyBtn) {
            copyBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Avoid triggering card selection
                const id = parseInt(card.getAttribute('data-id'), 10);
                const rawText = templates[id].rawText;
                copyTextToClipboard(rawText, copyBtn, "Шаблон скопирован");
            });
        }
    });
}

// Clipboard copying wrapper
function copyTextToClipboard(text, btnElement, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showTemporaryTooltip(btnElement, successMsg);
        }).catch(err => {
            console.error("Clipboard copy failed:", err);
            fallbackCopy(text, btnElement, successMsg);
        });
    } else {
        fallbackCopy(text, btnElement, successMsg);
    }
}

// Fallback clipboard copying
function fallbackCopy(text, btnElement, successMsg) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";  // Avoid scrolling to bottom
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        showTemporaryTooltip(btnElement, successMsg);
    } catch (err) {
        console.error('Fallback copy failed', err);
        alert('Не удалось скопировать. Пожалуйста, скопируйте текст вручную.');
    }
    document.body.removeChild(textArea);
}

// Tooltip display
function showTemporaryTooltip(btn, message) {
    const originalText = btn.textContent;
    btn.textContent = message;
    btn.style.backgroundColor = "var(--primary-green-light)";
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = "";
    }, 2000);
}

// Export PDF and DOCX downloads
function initDownloadButtons() {
    const downloadPdfBtn = document.getElementById('download-pdf-btn');
    const downloadDocxBtn = document.getElementById('download-docx-btn');

    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener('click', () => {
            downloadPDF();
        });
    }

    if (downloadDocxBtn) {
        downloadDocxBtn.addEventListener('click', () => {
            downloadDOCX();
        });
    }
}

// PDF Generation using html2pdf.js bundle
function downloadPDF() {
    if (typeof html2pdf === 'undefined') {
        alert('Библиотека html2pdf.js загружается. Пожалуйста, подождите или проверьте соединение с интернетом.');
        return;
    }

    // Get plain document text without highlighted tags (or clean version of elements)
    const previewDiv = document.getElementById('document-preview');
    if (!previewDiv) return;

    // Clone preview but strip highlight span classes for a clean document look
    const clone = previewDiv.cloneNode(true);
    clone.querySelectorAll('.highlight-token').forEach(span => {
        span.style.backgroundColor = 'transparent';
        span.style.border = 'none';
        span.style.color = '#000000';
        span.style.fontWeight = 'normal';
    });
    
    // Add page-like layout to the clone for PDF output (clean A4 structure)
    clone.style.padding = '0'; // Padding is handled by the PDF margin configuration
    clone.style.fontSize = '12pt';
    clone.style.fontFamily = 'Times New Roman, serif';
    clone.style.lineHeight = '1.5';
    clone.style.color = '#000000';
    clone.style.backgroundColor = '#ffffff';
    clone.style.width = '170mm'; // A4 width (210mm) - Left/Right margins (40mm)

    const filename = `genealog_query_template_${activeTemplateId}.pdf`;
    
    const opt = {
        margin: [20, 20, 20, 20], // Standard 20mm Russian margins (Top, Left, Bottom, Right)
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            useCORS: true, 
            letterRendering: true,
            scrollY: 0,
            scrollX: 0
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(clone).save();
}

// DOCX Generation using docx.js and FileSaver.js
function downloadDOCX() {
    if (typeof docx === 'undefined' || typeof saveAs === 'undefined') {
        alert('Библиотека docx.js/FileSaver.js загружается. Пожалуйста, подождите или проверьте соединение.');
        return;
    }

    try {
        const textContent = getDocumentContent(false);
        const lines = textContent.split('\n');

        // Build docx Paragraphs
        const paragraphs = lines.map(line => {
            // Check if line contains a tab-like formatting or is signature line
            // Align signatures right if they have many spaces, otherwise align left
            let alignment = docx.AlignmentType.LEFT;
            if (line.includes('Подпись:') || line.trim().startsWith('Дата:')) {
                // We keep it left or split if needed, let's keep left but allow standard formatting
            }
            
            return new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: line,
                        font: "Times New Roman",
                        size: 24, // 12pt (docx size is in half-points)
                        color: "000000"
                    })
                ],
                spacing: {
                    after: 100, // minor space after line
                    line: 360,  // 1.5 line spacing (docx line is in twentieths of a point, 240 is 1, 360 is 1.5)
                },
                alignment: alignment
            });
        });

        // Create the Document
        const doc = new docx.Document({
            sections: [{
                properties: {
                    page: {
                        margin: {
                            top: 1440,    // 1 inch in twentieths of a point
                            bottom: 1440,
                            left: 1440,
                            right: 1440
                        }
                    }
                },
                children: paragraphs
            }]
        });

        const filename = `genealog_query_template_${activeTemplateId}.docx`;

        docx.Packer.toBlob(doc).then(blob => {
            saveAs(blob, filename);
        }).catch(err => {
            console.error("docx Packing failed:", err);
            alert("Ошибка при сборке DOCX файла: " + err.message);
        });
    } catch (error) {
        console.error("DOCX generation error:", error);
        alert("Произошла ошибка при создании документа Word: " + error.message);
    }
}
