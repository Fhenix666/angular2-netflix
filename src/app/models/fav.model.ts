interface data {
    query: string;
    favCount: number
}

export class Fav implements data {
    constructor (public query = null,
                 public favCount = null
    ) {}
}