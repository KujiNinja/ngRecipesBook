export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name:string, description:string, imagePath:string){
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
//model variant 1. look variant 2 on ingredient.model.ts
