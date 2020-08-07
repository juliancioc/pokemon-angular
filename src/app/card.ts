export interface Card {
    imageUrl: string;
    name: string;
    id: string;
    types: Array<string>;
    attacks: Array<string>;
    hp: string;
    rarity: string;
    supertype: string;
    subtype: string;
    imageUrlHiRes: string;
}