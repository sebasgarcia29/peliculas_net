import { Loading } from '../../components/Loading';
import { InterfaceListGeneric } from '../../models/ListGeneric';

export const ListGeneric = (props: InterfaceListGeneric) => {

    const { list, loadingUI, children, listVoid } = props

    if (!list) {
        if (loadingUI) return loadingUI
        return <Loading />;
    } else if (list.length === 0) {
        if (listVoid) return listVoid
        return <div>List void</div>;
    } else return children

}
