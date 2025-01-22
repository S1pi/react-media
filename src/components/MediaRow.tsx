import {MediaItem} from '../types';
import '../mediaRow.css';
import {Link} from 'react-router';

const MediaRow = (props: {
  item: MediaItem;
  setSelectedItem: (item: MediaItem | undefined) => void;
}) => {
  // const {item, setSelectedItem} = props;
  const {item} = props;
  return (
    <>
      <tr>
        <td>
          <img src={item.thumbnail || undefined} alt={item.title} />
        </td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
        <td>{item.filesize}</td>
        <td>{item.media_type}</td>
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
