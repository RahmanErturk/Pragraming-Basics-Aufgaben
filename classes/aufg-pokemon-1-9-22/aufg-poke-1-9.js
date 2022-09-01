class Pokemon {
  constructor(name, health, magie) {
    this.name = name;
    this.health = health;
    this.magie = magie;
    this.skills = [];
  }

  learnAttackSkill(attackSkill) {
    const doesSkillAlreadyExist = this.skills.some(
      (skill) => skill.name === attackSkill.name
    );

    if (doesSkillAlreadyExist)
      return `${this.name} kann den Skill ${attackSkill.name} bereits.`;

    this.skills.push(attackSkill);
    return `${this.name} hat die Fähigkeit '${attackSkill.attackName}' erfolgreich eingesetzt!`;
  }

  showStatus() {
    console.log(`${this.name}-Status`);
    console.log(`Gesundheit: ${this.health}`);
    console.log(`Magie: ${this.magie}`);
  }

  attack(attack, pokemon) {
    let index = Math.floor(Math.random() * this.skills.length);
    this.skills[index].attackName = attack;
    this.pokemon = pokemon.name;
    // this.health = this.health - pokemon.skills[index].damage;
    if (this.health > 0) {
      if (this.magie > this.skills[index].magieConsume) {
        this.magie = this.magie - this.skills[index].magieConsume;
        if (pokemon.health - this.skills[index].damage > 0) {
          pokemon.health -= this.skills[index].damage;
          console.log(
            `${this.pokemon} hat ${this.skills[index].damage} Schaden erhalten.`
          );
        } else {
          pokemon.health = 0;
          console.log(`${pokemon.name} ist tot.`);
        }
      } else {
        console.log(`nicht genug Magie, kann keinen Angriff starten!`);
      }
    } else {
      console.log(`${this.name} ist bereits tot!`);
    }
  }
  getMagic(addMAg) {
    this.magie += 20;
    console.log(`${this.name} hat 20 Magie zurückbekommen`);
  }
}

class AttackSkill {
  constructor(attackName, damage, magieConsume) {
    this.attackName = attackName;
    this.damage = damage;
    this.magieConsume = magieConsume;
  }
}

let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

let lightning = new AttackSkill("lightning", 40, 30);
let poison = new AttackSkill("poison", 20, 20);

console.log(pikachu.learnAttackSkill(lightning));
console.log(bulbasaur.learnAttackSkill(poison));

pikachu.attack("lightning", bulbasaur);
bulbasaur.attack("poison", pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack("lightning", bulbasaur);
pikachu.attack("lightning", bulbasaur);
pikachu.getMagic();
pikachu.attack("lightning", bulbasaur);
bulbasaur.attack("poison", pikachu);
