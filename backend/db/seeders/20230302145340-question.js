'use strict';

const { Question } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Question.bulkCreate([
      {
        theme_id: 1,
        question: 'Как зовут тигра принцессы Жасмин из мультфильма «Аладдин»?',
        answer: 'Раджа',
        points: 100,
      },
      {
        theme_id: 1,
        question: 'Как называется успешная современная российская студия анимации, которая делает полнометражные мультфильмы?',
        answer: 'Мельница',
        points: 200,
      },
      {
        theme_id: 1,
        question: 'Каким животным является Тимон из мультфильма "Король-Лев"?',
        answer: 'Суррикат',
        points: 300,
      },
      {
        theme_id: 1,
        question: 'Что Осел из "Шрека" захотел приготовить на завтрак, когда Шрек разрешил ему переночевать у себя?',
        answer: 'Вафли',
        points: 400,
      },
      {
        theme_id: 1,
        question: 'Какой был любимый соус Рика из "Рика и Морти"?',
        answer: 'Сычуаньский',
        points: 500,
      },
      {
        theme_id: 2,
        question: 'Вспомните «Секретные материалы» с Фоксом Малдером и Даной Скалли и продолжите фразу: «Истина...»?',
        answer: 'Где-то рядом',
        points: 100,
      },
      {
        theme_id: 2,
        question: 'Из какого фильма цитата: "Что в коробке?"',
        answer: 'Семь',
        points: 200,
      },
      {
        theme_id: 2,
        question: 'Какие персонажи из "Звездных войн" появляются в "Индиане Джонсе"',
        answer: 'R2-D2 и C-3PO',
        points: 300,
      },
      {
        theme_id: 2,
        question: 'Звуки спаривания каких животных были звуком общения велоцерапторов в «Парке Юрского периода»?',
        answer: 'Черепах',
        points: 400,
      },
      {
        theme_id: 2,
        question: 'В каком фильме был впервые показан смыв унитаза?',
        answer: 'Психо',
        points: 500,
      },
      {
        theme_id: 3,
        question: 'Что означает фраза "Валар Моргулис" из "Игры Престолов"?',
        answer: 'Все мужи смертны',
        points: 100,
      },
      {
        theme_id: 3,
        question: 'В отечественном сериале  «Интерны», в отличии от многих ситкомов, нет одного элемента. Основатели решили, что не смеют указывать зрителям. Что там отсутствует?',
        answer: 'Закадровый смех',
        points: 200,
      },
      {
        theme_id: 3,
        question: 'В каком сериале главный герой Дьявол является владельцем роскошного ночного клуба Lux?',
        answer: 'Люцифер',
        points: 300,
      },
      {
        theme_id: 3,
        question: 'Что бросает на крышу Уолтер Уайт, разочарованный тем, что ему не удалось попасть в дом своей семьи с мирным подношением?',
        answer: 'Пиццу',
        points: 400,
      },
      {
        theme_id: 3,
        question: 'Сколько лет зрители ждали продолжения сериала "Твин Пикс"?',
        answer: '27 лет',
        points: 500,
      },
    ]);
  },

  async down() {
    await Question.destroy({ truncate: { cascade: true } });
  },
};
