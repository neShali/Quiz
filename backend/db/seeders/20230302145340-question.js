'use strict';

const { Question } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Question.bulkCreate([
      {
        theme_id: 1,
        question: 'Фильм о бесценной передней конечности?',
        answer: 'Бриллиантовая рука',
        points: 100,
      },
      {
        theme_id: 1,
        question: 'Самый известный говорящий конь?',
        answer: 'Гай Юлий Цезарь',
        points: 200,
      },
      {
        theme_id: 1,
        question: 'Какой фильм стал самым кассовым в 2014 году?',
        answer: 'Стражи Галактики',
        points: 300,
      },
      {
        theme_id: 1,
        question: 'Сколько дней оставалось жить тем, кто смотрел проклятую видеокассету в «Звонке»?',
        answer: '7',
        points: 400,
      },
      {
        theme_id: 1,
        question: 'В каком фильме 2008 года с участием Кристиана Бэйла в главной роли есть такая цитата: «Я верю, что все, что тебя не убивает, просто делает тебя… незнакомцем»?',
        answer: 'Темный рыцарь',
        points: 500,
      },
      {
        theme_id: 2,
        question: 'Какая самая маленькая птица в мире?',
        answer: 'Колибри',
        points: 100,
      },
      {
        theme_id: 2,
        question: 'Какова продолжительность жизни стрекозы?',
        answer: '24 часа',
        points: 200,
      },
      {
        theme_id: 2,
        question: 'Что такое красное, твердое и вредное для зубов?',
        answer: 'Кирпич',
        points: 300,
      },
      {
        theme_id: 2,
        question: 'Кто изобрел консервную банку для консервирования в 1810 году?',
        answer: 'Питер Дюран',
        points: 400,
      },
      {
        theme_id: 2,
        question: 'Какую спортивную игру Джеймс Нейсмит изобрел в 1891 году?',
        answer: 'Баскетбол',
        points: 500,
      },
      {
        theme_id: 3,
        question: 'Что в огне не горит и в воде не тонет?',
        answer: 'Лёд',
        points: 100,
      },
      {
        theme_id: 3,
        question: 'Кто получает много вопросов, но не задает их?',
        answer: 'Google',
        points: 200,
      },
      {
        theme_id: 3,
        question: 'Над чем люди обычно смеются?',
        answer: 'Над шуткой',
        points: 300,
      },
      {
        theme_id: 3,
        question: 'Можно ли зажечь обычную спичку под водой, чтобы она догорела до конца(Да/Нет)? Обоснуй свой ответ устно.',
        answer: 'Да',
        points: 400,
      },
      {
        theme_id: 3,
        question: 'Что идет то в гору, то с горы, но остается на месте?',
        answer: 'Дорога',
        points: 500,
      },
      {
        theme_id: 4,
        question: 'В 1938 году журнал "Тайм" назвал Гитлера? Кем?',
        answer: 'Человеком Года',
        points: 500,
      },
      {
        theme_id: 4,
        question: 'Во время службы в КГБ Владимир Путин имел прозвище. Какое?',
        answer: 'Моль',
        points: 500,
      },
      {
        theme_id: 4,
        question: 'Этот премьер-министр Великобритании был рожден в женском туалете родового замка Бленгеймов',
        answer: 'Уинстон Черчилль',
        points: 500,
      },
      {
        theme_id: 4,
        question: 'Какой самый известный убийца 19 века, совершал свои преступления всегда по выходным?',
        answer: 'Джек-Потрошитель',
        points: 500,
      },
      {
        theme_id: 4,
        question: 'Что должно в течении 24 часов прийти, но не приходит?',
        answer: 'Завтра',
        points: 500,
      },
    ]);
  },

  async down() {
    await Question.destroy({ truncate: { cascade: true } });
  },
};
