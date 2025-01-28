import {useEffect, useState} from 'react';
import {MediaItem} from '../types';
import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {fetchData} from '../lib/functions';

const Home = () => {
  const [mediaArray, setMediaArray] = useState<MediaItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MediaItem | undefined>();

  console.log(mediaArray);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const json = await fetchData<MediaItem[]>(
          import.meta.env.VITE_MEDIA_API + '/media',
        );
        setMediaArray(json);
      } catch (error) {
        console.error((error as Error).message);
      }
    };
    getMedia();
  }, []);

  return (
    <>
      {selectedItem ? (
        <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
      ) : null}
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
