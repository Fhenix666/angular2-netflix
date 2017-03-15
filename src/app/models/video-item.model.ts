interface data {
    category: string;
    director: string;
    mediaType: number;
    poster: string;
    rating: string;
    release_year: string;
    runtime: string;
    show_cast: string;
    show_id: number;
    summary: string;
    unit: number;
}

export class videoEntity implements data {
    constructor (public category = null,
                 public director = null,
                 public mediaType = null,
                 public poster = null,
                 public rating = null,
                 public release_year = null,
                 public runtime = null,
                 public show_cast = null,
                 public show_id = null,
                 public summary = null,
                 public unit = null
    ) {}
}