export interface Card {
    imageUrl: string;
    name: string;
    id: string;
    types: Array<string>;
    hp: string;
    rarity: string;
    supertype: string;
    subtype: string;
}