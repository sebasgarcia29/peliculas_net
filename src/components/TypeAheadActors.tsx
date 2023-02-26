import { ReactElement, useState } from 'react';
import { Typeahead } from "react-bootstrap-typeahead";
import { ActorMovieDTO } from "../models/modelsActors";

interface TypeAheadActorsProps {
    actors: ActorMovieDTO[];
    onAdd(actors: ActorMovieDTO[]): void;
    listUI(actor: ActorMovieDTO): ReactElement
    onRemove(actor: ActorMovieDTO): void;
}


const TypeAheadActors = (props: TypeAheadActorsProps) => {

    const { actors, onAdd, listUI, onRemove } = props;


    const actorsData: ActorMovieDTO[] = [
        { id: 1, name: "Danery Targaryen", picture: "https://pbs.twimg.com/profile_images/1243475459125456896/e-zIQiFY_400x400.jpg", character: "Daenerys Targaryen" },
        { id: 2, name: "Hodor", picture: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2016/05/23/5fa2cfdbc6c97.jpeg", character: "Daenerys Targaryen" },
        { id: 3, name: "Jaime Lannister", picture: "https://media.revistagq.com/photos/5cde6e0ecb3e97b1f35fa2b4/2:3/w_900,h_1350,c_limit/juego%20de%20tronos%20jaime%20lannister%20vivo.jpeg", character: "Daenerys Targaryen" },
    ]


    const selected: ActorMovieDTO[] = [];

    const [elementMoved, setElementMoved] = useState<ActorMovieDTO | undefined>(undefined);

    const manageDragStart = (actor: ActorMovieDTO) => {
        setElementMoved(actor)
    }
    const manageDragOver = (actor: ActorMovieDTO) => {
        if (!elementMoved) return;

        if (actor.id !== elementMoved.id) {
            const indexElementMoved = actors.findIndex(x => x.id === elementMoved.id);
            const indexActor = actors.findIndex(x => x.id === actor.id);
            const newActors = [...actors];
            newActors[indexActor] = elementMoved;
            newActors[indexElementMoved] = actor;
            onAdd(newActors);
        }
    }

    return (
        <>
            <label>Actors</label>
            <Typeahead
                id={"typeahead"}
                onChange={(actorsfind) => {
                    if (actors.find(x => x.id === actorsfind[0].id)) return;
                    onAdd([...actors, actorsfind[0]]);
                }}
                options={actorsData}
                labelKey={(actor: ActorMovieDTO) => actor.name}
                filterBy={['name']}
                placeholder="Search for an actor"
                minLength={2}
                flip={true}
                selected={selected}
                renderMenuItemChildren={(actor: ActorMovieDTO) => (
                    <>
                        <img
                            alt="actor"
                            src={actor.picture}
                            style={{ height: '64px', marginRight: '10px', width: '64px' }}
                        />
                        <span>{actor.name}</span>
                    </>
                )}
            />

            <ul className='list-group'>
                {actors.map((actor) =>
                (
                    <li
                        key={actor.id}
                        className='list-group-item list-group-item-action'
                        draggable
                        onDragStart={() => manageDragStart(actor)}
                        onDragOver={() => manageDragOver(actor)}
                    >
                        {listUI(actor)}
                        <span
                            className='badge badge-primary badge-pill pointer'
                            style={{ marginLeft: '0.5rem' }}
                            onClick={() => { onRemove(actor) }}
                        >
                            {'X'}
                        </span>
                    </li>
                ))
                }
            </ul>


        </>
    )
}

export default TypeAheadActors;
