import { GameCharacter } from './game-character'

export class GameCharactersFactory {
  public static getWarrior(): GameCharacter {
    return {
      strength: 10,
      dexterity: 7,
      health: 5,
      magic: 0,
    }
  }

  public static getMage(): GameCharacter {
    return {
      strength: 10,
      dexterity: 7,
      health: 5,
      magic: 0,
    }
  }
}
