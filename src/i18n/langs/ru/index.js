const translations = {
  stats: {
    humidity: 'влажность',
    visibility: 'видимость',
    dew: 'точка росы',
  },
  settingsForm: {
    title: 'настройки',
    labels: {
      addLocation: 'добавить место',
    },
    placeholders: {
      addLocation: 'ваш город',
    },
  },
  errors: {
    dataNotLoadedForCity: `произошла какая-то ошибка, данные не могут быть загружены для города`,
    locationsNotInitiated: `данные про местонахождения не могут быть получены, проверьте соединение с Интернетом и перезагрузите страницу`,
    cityNotIdentified: 'город не найден',
    duplicateCityRequested: 'город уже добавлен',
  },
  loadersText: {
    locations: 'местоположения загружаются',
  },
  words: {
    feelsLike: 'чувствуется как',
  },
  units: {
    'mile/h': 'миль/ч',
    'm/s': 'м/с',
    hPa: 'гПа',
    miles: 'миль',
    km: 'км',
  },
};

export default translations;
