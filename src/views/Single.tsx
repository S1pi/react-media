import {NavigateFunction, useLocation, useNavigate} from 'react-router';
import {MediaItem} from '../types';

const Single = () => {
  const {state} = useLocation();
  const navigate: NavigateFunction = useNavigate();
  const item: MediaItem = state.item;
  return (
    <>
      <h2>Single</h2>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>{new Date(item.created_at).toLocaleString('fi-FI')}</p>
      <p>{item.filesize}</p>
      {/* Media tyyppi checkki tähän! */}
      {item.media_type === 'video/mp4' ? (
        <video controls width="800">
          {' '}
          <source src={item.filename} type="video/mp4" />{' '}
        </video>
      ) : (
        <img src={item.thumbnail || undefined} alt={item.title} />
      )}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </>
  );
};

export default Single;
