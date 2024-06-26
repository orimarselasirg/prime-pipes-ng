export enum Color {
  red = 'rojo', black = 'negro', blue = 'azul', green = 'verde'
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color
}
