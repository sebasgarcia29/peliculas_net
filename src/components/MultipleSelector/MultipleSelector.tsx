
import './style.css'

interface MultipleSelectorProps {
    selected: ModelselectorMultiple[];
    noSelected: ModelselectorMultiple[];
    onChange: (selected: ModelselectorMultiple[], noSelected: ModelselectorMultiple[]) => void;
}

export interface ModelselectorMultiple {
    key: number;
    value: string;
}


const MultipleSelector = (props: MultipleSelectorProps) => {

    const { selected, noSelected, onChange } = props;

    const selectItem = (item: ModelselectorMultiple) => {
        const newSelected = [...selected, item];
        const newNoSelected = noSelected.filter((i) => i !== item);
        onChange(newSelected, newNoSelected);
    }

    const unSelected = (item: ModelselectorMultiple) => {
        const selecteds = selected.filter((i) => i !== item);
        const notSelected = [...noSelected, item];
        onChange(selecteds, notSelected);
    }

    const selectAll = () => {
        const selecteds = [...selected, ...noSelected];
        const notSelecteds: ModelselectorMultiple[] = []
        onChange(selecteds, notSelecteds);
    }

    const deselectAll = () => {
        const notSelecteds = [...noSelected, ...selected];
        const selecteds: ModelselectorMultiple[] = []
        onChange(selecteds, notSelecteds);
    }




    return (
        <div className="selector-multiple">

            <ul>
                {noSelected.map((item) => (
                    <li key={item.key} onClick={() => selectItem(item)}>{item.value}</li>
                ))}
            </ul>
            <div className="selector-multiple-buttons">
                <button type="button" onClick={selectAll}>{'>>'}</button>
                <button type="button" onClick={deselectAll}>{'<<'}</button>
            </div>
            <ul>
                {selected.map((item) => (
                    <li key={item.key} onClick={() => { unSelected(item) }}>{item.value}</li>
                ))}
            </ul>


        </div>
    )
}

export default MultipleSelector;