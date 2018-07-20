export class Ingredient {
  // public below acts as an accessor and allows to avoid having to declare public name: string and public amount: number separately
  constructor(public name: string, public amount: number) {}
}
