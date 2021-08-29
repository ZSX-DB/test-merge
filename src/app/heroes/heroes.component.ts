import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []
  // selectedHero?: Hero

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
    ) {
    // 让构造函数保持简单，只做最小化的初始化操作，比如把构造函数的参数赋值给属性。 构造函数不应该做任何事
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes
    })
  }

  // onSelect(hero: Hero) {
  //   this.selectedHero = hero
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  add(name: string): void{

  }


}
