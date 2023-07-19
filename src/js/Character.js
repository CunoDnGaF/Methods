export default class Character {
    constructor(name, type, attack, defence) {
        this.name = name;
        this.type = type;
        this.attack = attack;
        this.defence = defence;
        this.health = 100;
        this.level = 1;

        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        
        if (typeof name !== 'string') { 
            throw new Error('Передано некорректное значение имени');
        }

        if (name.length < 2) {
            throw new Error('Имя слишком короткое');
        }

        if (name.length > 10) {
            throw new Error('Имя слишком длинное');
        }

        if (!types.includes(type)) {
            throw new Error('Передан несуществующий класс');
        }
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Нельзя повысить левел умершего');
        }
        this.level += 1;
        this.attack += (this.attack*20/100);
        this.defence += (this.defence*20/100);
        this.health = 100;
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        
        if (this.health < 0) {
            this.health = 0;
        }
    }
}