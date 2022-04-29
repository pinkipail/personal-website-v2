/* eslint-disable quote-props */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        translation: {
          'my name': 'ВАСИЛИЙ ФЕДОРОВ',
          "let's meet": '«давайте знакомиться • давайте знакомиться»',
          'about me:': 'обо мне:',
          'about me description': {
            0: 'Привет, меня зовут Василий. Мне 22 года.',
            1: 'Вырос в небольшой деревне Новоегорьевское,',
            2: 'что в Алтайском крае, на задворках России.',
            3: 'В вузе учился по специальности «Программная',
            4: 'инженерия», но на третьем курсе бросил универ',
            5: 'и переехал на запад Беларуси, в Гродно.',
          },
          'about hobby:': 'хобби:',
          'what fascinates me': 'то что меня увлекает',
          'hobby description': {
            0: 'Люблю проводить время с друзьями, летом',
            1: 'выбираться на природу, а в прохладное время',
            2: 'года по вечерам зависать в настолки или',
            3: 'сидеть в баре. Люблю играть в видеоигры',
            4: 'с атмосферным сюжетом. Люблю в перерывах',
            5: 'на работе перекинуться партеечкой в нас-',
            6: 'тольный теннис. Люблю покушать и поспать.',
          },
          'about work:': 'о работе:',
          'about work description': {
            0: 'Сейчас работаю фронтенд-разработчиком.',
            1: 'Мне нравится создавать интерактивные веб-',
            2: 'приложения с акцентом на анимированный',
            3: 'контент, производительность и отзывчивость',
            4: 'с помощью современных технологий.',
          },
          'about projects:': 'проекты:',
          'projects items': {
            0: {
              dateStart: '06.2021',
              dateEnd: 'по настоящее время',
              name: 'SENLA',
              description: 'Аутстаффинг. Разработка приложений на Angular и React.',
              location: 'гродно',
            },
            1: {
              dateStart: '06.2020',
              dateEnd: '05.2021',
              name: 'РТИ',
              description: 'Работа на аутсорс проектах. Разработка приложений на Angular.',
              location: 'калуга',
            },
            2: {
              dateStart: '12.2019',
              dateEnd: '05.2020',
              name: 'ФРИЛАНС',
              description: 'Дизайн и верстка лендингов, разработка приложений на React.',
              location: 'удаленка',
            },
          },
          'footer': {
            'contact': 'Связаться',
            'me': 'со мной:',
            'end': 'конец',
          },

        },
      },
      en: {
        translation: {
          'my name': 'VASILIY FEDOROV',
          "let's meet": "«let's meet • let's meet • let's meet»",
          'about me:': 'about me:',
          'about me description': {
            0: 'Hi, my name is Vasiliy. I am 22 years old.',
            1: 'I grew up in the small village of Novoegoryevskoye,',
            2: 'in the Altai Territory, on the outskirts of Russia.',
            3: 'Studied at the university with a degree in Software',
            4: 'Engineering, but in the third year dropped out ',
            5: 'of university and moved to Grodno, Belarus',
          },
          'about hobby:': 'hobby:',
          'what fascinates me': 'what fascinates me',
          'hobby description': {
            0: 'I like to spend time with friends, get out ',
            1: 'in nature in the summer, and in the cool time ',
            2: 'years of hanging out in the evenings at ',
            3: 'the board games or sitting in the bar. I like ',
            4: 'to play video games with an atmospheric plot. ',
            5: 'I like to throw a party at us during breaks ',
            6: 'at work- table tennis. I like to eat and sleep.',
          },
          'about work:': 'about work:',
          'about work description': {
            0: 'I am currently working as a frontend ',
            1: 'developer. I like to create interactive',
            2: 'web applications with an emphasis ',
            3: 'on animated content, performance and ',
            4: 'responsiveness using modern technologies.',
          },
          'about projects:': 'projects:',
          'projects items': {
            0: {
              dateStart: '06.2021',
              dateEnd: 'to the present',
              name: 'SENLA',
              description: 'Outstaffing. Application development in Angular and React.',
              location: 'Grodno',
            },
            1: {
              dateStart: '06.2020',
              dateEnd: '05.2021',
              name: 'RTI',
              description: 'Work on outsourcing projects. Application development in Angular.',
              location: 'Kaluga',
            },
            2: {
              dateStart: '12.2019',
              dateEnd: '05.2020',
              name: 'FREELANCE',
              description: 'Creating landing pages, application development on React.',
              location: 'remote',
            },
          },
          'footer': {
            'contact': 'Contact',
            'me': 'with me:',
            'end': 'the end',
          },

        },
      },
    },
    lng: 'ru',
    fallbackLng: 'ru',
  });

export default i18n;
