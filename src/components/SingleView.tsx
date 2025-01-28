import {MediaItem} from '../types';

const SingleView = (props: {
  item: MediaItem;
  setSelectedItem: (item: MediaItem | undefined) => void;
}) => {
  const {item, setSelectedItem} = props;
  return (
    <dialog open>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>{new Date(item.created_at).toLocaleString('fi-FI')}</p>
      <p>{item.filesize}</p>
      <p>{item.media_type}</p>
      <p>Jim on homo</p>
      {/* Media tyyppi checkki tähän! */}
      {item.media_type.includes('video') ? (
        <video controls width="800" crossOrigin="anonymous">
          {' '}
          <source src={item.filename} />{' '}
        </video>
      ) : (
        <img src={item.thumbnail || undefined} alt={item.title} />
      )}
      <button onClick={() => setSelectedItem(undefined)}>Close</button>
    </dialog>
  );
};

export default SingleView;
