export interface ActorCreateDTO {
    name: string;
    dateOfBirth?: Date;
    photo?: File;
    photoUrl?: string;
    biography?: string;
}

export interface ActorMovieDTO {
    id: number;
    name: string;
    character: string;
    picture: string;
}