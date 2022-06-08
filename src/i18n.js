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
          'disclaimer title': {
            'full': 'ДИСКЛЕЙМЕР:',
            'first': 'ДИСКЛ-',
            'second': 'ЕЙМЕР:',
          },
          'disclaimer description': [
            'Этот сайт создан в свободное от работы время',
            'с целью попробовать новые технологии, отточить',
            'свои навыки и продемонстрировать стороннему',
            'зрителю. Здесь я пытаюсь рассказать немного',
            'о себе: о том кто я и откуда. Немного о своей',
            'работе и увлечениях. Приятного просмотра.',
          ],
          'about me:': 'обо мне:',
          'about me description': [
            'Привет, меня зовут Василий. Мне 22 года.',
            'Вырос в небольшой деревне Новоегорьевское,',
            'что в Алтайском крае, на задворках России.',
            'В вузе учился по специальности «Программная',
            'инженерия», но на третьем курсе бросил универ',
            'и переехал на запад Беларуси, в Гродно.',
          ],
          'about hobby:': 'хобби:',
          'what fascinates me': 'то что меня увлекает',
          'hobby description': [
            'Люблю проводить время с друзьями, летом',
            'выбираться на природу, а в прохладное время',
            'года по вечерам зависать в настолки или',
            'сидеть в баре. Люблю играть в видеоигры',
            'с атмосферным сюжетом. Люблю в перерывах',
            'на работе перекинуться партеечкой в нас-',
            'тольный теннис. Люблю покушать и поспать.',
          ],
          'about work:': 'о работе:',
          'about work description': [
            'Сейчас работаю фронтенд-разработчиком.',
            'Мне нравится создавать интерактивные веб-',
            'приложения с акцентом на анимированный',
            'контент, производительность и отзывчивость',
            'с помощью современных технологий.',
          ],
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
          'disclaimer title': {
            'full': 'DISCLAIMER:',
            'first': 'DISCL-',
            'second': 'AIMER',
          },
          'disclaimer description': [
            'This site was created in free time in order',
            'to try new technologies, hone show your skills',
            'and demonstrate to an outside viewer. Here I`m',
            'trying to tell you a little bit about myself:',
            'about who I am and where I come from. A little',
            'bit about my work and hobbies. Enjoy your viewing.',
          ],
          'about me:': 'about me:',
          'about me description': [
            'Hi, my name is Vasiliy. I am 22 years old.',
            'I grew up in the small village of Novoegoryevskoye,',
            'in the Altai Territory, on the outskirts of Russia.',
            'Studied at the university with a degree in Software',
            'Engineering, but in the third year dropped out ',
            'of university and moved to Grodno, Belarus',
          ],
          'about hobby:': 'hobby:',
          'what fascinates me': 'what fascinates me',
          'hobby description': [
            'I like to spend time with friends, get out ',
            'in nature in the summer, and in the cool time ',
            'years of hanging out in the evenings at ',
            'the board games or sitting in the bar. I like ',
            'to play video games with an atmospheric plot. ',
            'I like to play table tennis during breaks ',
            'at work. I like to eat and sleep.',
          ],
          'about work:': 'about work:',
          'about work description': [
            'I am currently working as a frontend ',
            'developer. I like to create interactive',
            'web applications with an emphasis ',
            'on animated content, performance and ',
            'responsiveness using modern technologies.',
          ],
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
