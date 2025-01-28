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
      <p>Miika on työtön!!!</p>
      <p>{new Date(item.created_at).toLocaleString('fi-FI')}</p>
      {/* <p>{item.description}</p> */}
      <p>{Math.round(item.filesize / 1024)} kb</p>
      {/* Media tyyppi checkki tähän! */}
      {item.media_type.includes('video') ? (
        <video controls width="800">
          {' '}
          <source src={item.filename} />{' '}
        </video>
      ) : (
        <img src={item.thumbnail || undefined} alt={item.title} />
      )}
      <br />
      <p>{item.description}</p>
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
