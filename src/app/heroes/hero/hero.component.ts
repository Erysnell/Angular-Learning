import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    const newName = prompt('Introduce el nuevo nombre del héroe:');
    if (newName) {
      this.name = String(newName);
  }
}

  changeAge() {
    const newAge = prompt('Introduce la nueva edad del héroe:');
    if (newAge) {
      this.age = Number(newAge);
    }
  }
}
