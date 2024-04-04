import './LinkList.css';
import Link from './Link.jsx';

const SharedList = ({listInfo}) => {

    return (
        <div className="content-list">
            {listInfo.map((link) => {
                return <Link key={link.id} linkInfo={link} />
            })}
        </div>
    )
}

export default SharedList;