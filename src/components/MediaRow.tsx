import {MediaItemWithOwner} from '../types';
import '../mediaRow.css';
import {Link} from 'react-router';

const MediaRow = (props: {
  item: MediaItemWithOwner;
  setSelectedItem: (item: MediaItemWithOwner | undefined) => void;
}) => {
  // const {item, setSelectedItem} = props;
  const {item} = props;
  return (
    <>
      <tr>
        <td>
          <img
            src={
              item.thumbnail ||
              (item.screenshots && item.screenshots[2]) ||
              undefined
            }
            alt={item.title}
          />
        </td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
        <td>{item.filesize}</td>
        <td>{item.media_type}</td>
        <td>{item.username}</td>
      </tr>
      <td>
        <Link to="/single" state={{item}}>
          Show
        </Link>
      </td>
      {/* <button onClick={() => setSelectedItem(item)} style={{height: '100%'}}>
        NAPPI
      </button> */}
    </>
  );
};

export default MediaRow;
