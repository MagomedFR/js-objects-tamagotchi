const tamagotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
    getStatus: function() {
      if(this.meal <= 0 || this.energy < 3 || this.mood < 3){
        console.log(`${this.name} гарантия сгорела :(`)
      }
      
      let mealStatus = this.meal < 3 ? 'Я голоден' : 'Я не голоден';
      let energyStatus = this.energy < 3 ? 'Я хочу спать' : 'Я не хочу спать';
      let moodStatus = this.mood < 3 ? 'Мне скучно' : 'Мне весело';
  
      console.log(`Имя: ${this.name}, Еда: ${mealStatus} (${this.meal}), Энергия: ${energyStatus} (${this.energy}), Настроение: ${moodStatus} (${this.mood})`);
    },
    setName: function(name) {
      this.name = name;
    },
    eat: function() {
      if (this.meal < 5) {
        this.meal++;
        this.mood--;
      }
      this.getStatus();
    },
    sleep: function() {
      if (this.energy < 5) {
        this.energy++;
        this.meal--;
      }
      this.getStatus();
    },
    play: function() {
      if (this.mood < 5) {
        this.mood++;
        this.energy--;
      }
      this.getStatus();
    }
  };
  
  tamagotchi.setName('Jamic');
  tamagotchi.getStatus();
  
  tamagotchi.eat();
  tamagotchi.sleep();
  tamagotchi.play();
  