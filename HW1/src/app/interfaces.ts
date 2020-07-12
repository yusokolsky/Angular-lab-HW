export class Pokemon {
  id: number | null;
  name: string;
  damage?: number;
  caught?: boolean;
}

export class PokemonAction {
  id: number;
  action: boolean;
}
