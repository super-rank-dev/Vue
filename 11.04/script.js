const { createApp } = Vue

createApp({
  data() {
    return {
      name: 'Clown',
      surname: 'Clownich',
      text: 'Yandex',
      href: 'https://yandex.ru',
      num: 5,
      num1: 1,
      num2: 2,
      num3: 3,
      arr: ['m', 'e', 'f', 'i', 's'],
    }
  },
  methods: {
    show: function(){
      let numVal = this.cape(this.document.querySelector('.input').value)
    },
    cape: function(num){
      const days = [
        'Вс',
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб'  
      ]
      const output = document.querySelector('.output')
      for(num; num < days.length; num++){
        let day = days[num]
        output.innerHTML = day
      }
    }
  }
}).mount('#app')