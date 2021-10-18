export class Movie {

    public constructor(
        public id?: number,
        public title?: string,
        public image?: string,
        public synopsis?: string,
        public rating?: number,
        public type?: string,
        public released?: number,
        public runtime?: string,
        public largeimage?: string,
        public unogsdate?: Date,
        public imdbid?: string,
        public download?: number
    ) { }
}