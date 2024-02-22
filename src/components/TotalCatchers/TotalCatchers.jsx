import {useSelector} from 'react-redux';


function TotalCatchers() {
    const catcherList = useSelector(store => store.catcherList)
    return (
        <div>Total Catchers: {catcherList.length}</div>
    )
}

export default TotalCatchers