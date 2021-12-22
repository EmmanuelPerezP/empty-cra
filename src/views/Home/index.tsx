/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { ReactElement, useCallback, useState } from 'react';
import { GifsResult, GiphyFetch } from '@giphy/js-fetch-api';
import { IGif } from '@giphy/js-types';

import _ from 'lodash';

import './styles.scss';

const gf = new GiphyFetch('V25U1mnY42PcyL1UoRUEHVXrxyzJsaUE');
/**
 * __Component__
 * @returns {ReactElement} - The Component component
 * @example
 * <Component
 *  />
 *  */
const Component = (): ReactElement => {
  const classname = 'component-class-name';
  const [gifData, setGifData] = useState<IGif[]>([]);
  const [search, setSearch] = useState<string>('');
  const [currentImage, setCurrentImage] = useState<any>(null);

  // TODO: make this a custom hooko
  const callGifs = async (searchText: string) => {
    const { data: gifs }: GifsResult = await gf.search(searchText, {
      limit: 100,
    });
    setGifData(gifs);
  };

  const debounceCallGifs = useCallback(
    _.debounce(callGifs, 1000, { maxWait: 1000 }),
    [],
  );

  return (
    <div className={`${classname}__container`}>
      <input
        className={`${classname}__input`}
        name="search"
        value={search}
        onChange={async (event) => {
          const text = event.target.value;
          setSearch(text);
          await debounceCallGifs(text);
        }}
      />
      <p className={`${classname}__title`}>{search}</p>
      {gifData?.map((value) => {
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
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
      {/* TODO: make this a custom component */}
      {currentImage ? (
        <div className={`${classname}__modal`}>
          <div className={`${classname}__modal-content`}>
            <img
              loading="lazy"
              src={currentImage?.images.original.url}
              alt="..."
              className="img-thumbnail"
            />
            <button
              onClick={() => {
                setCurrentImage(null);
              }}
              type="button"
              className="btn btn-dark"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Component;
