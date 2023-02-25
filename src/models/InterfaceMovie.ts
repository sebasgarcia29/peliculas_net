export interface InterfaceMovie {
    id: number;
    title: string;
    poster: string;
}

export interface InterfaceMovieCreateDTO {
    title: string;
    inTheaters: boolean;
    trailer: string;
    dateLaunch?: Date;
    poster?: File;
    posterURL?: string;
    gendersIds?: number[];
}
