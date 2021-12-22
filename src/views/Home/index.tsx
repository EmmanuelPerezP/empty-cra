/* eslint-disable */
import { ReactElement, useState } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';

import './styles.scss';

const gf = new GiphyFetch('V25U1mnY42PcyL1UoRUEHVXrxyzJsaUE');
/**
 * __Component__
 * @param {id} id - id of the component.
 * @param {idIntl} idIntl - idIntl of the text to display on the component. idIntl's are defined in the lang file.
 * @returns {ReactElement} - The Component component
 * @example
 * <Button
 *  id="button-id"
 *  idIntl="Start"
 *  onClick={() => {}}
 *  />
 *  */
const Component = (): ReactElement => {
  const classname = 'component-class-name';
  const [gifData, setGifData] = useState<any>(null);
  const [search, setSearch] = useState('');
  const [currentImage, setCurrentImage] = useState<any>(null);

  const callGifs = async (searchText: string) => {
    const { data: gifs } = await gf.search(searchText, { limit: 100 });
    setGifData(gifs);
  };

  return (
    <div className={`${classname}__container`}>
      <input
        className={`${classname}__input`}
        name="search"
        value={search}
        onChange={async (event) => {
          const text = event.target.value;
          setSearch(text);
          await callGifs(text);
        }}
      />
      <p className={`${classname}__title`}>{search}</p>
      {gifData?.map((value) => {
        return (
          <img
            loading="lazy"
            src={value.images.fixed_height_small.url}
            alt="..."
            className="img-thumbnail"
            onClick={() => {
              setCurrentImage(value);
            }}
          />
        );
      })}
      {/* {currentImage ? (
        <div className={`${classname}__modal`}>
          <div className={`${classname}__modal-content`}>
            <img
              loading="lazy"
              src={currentImage?.images.original.url}
              alt="..."
              className="img-thumbnail"
            />
            <button type="button" className="btn btn-dark">
              Dark
            </button>
          </div>
        </div>
      ) : null} */}
    </div>
  );
};

export default Component;
