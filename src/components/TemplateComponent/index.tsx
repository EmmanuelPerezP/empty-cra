import { ReactElement } from 'react';

import './styles.scss';

interface ComponentProps {
  text: string;
}

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
const Component = ({
  text
}: ComponentProps): ReactElement<ComponentProps> => {
  const classname = 'component-class-name';
  return (
    <div className={`${classname}__container`}>
      <p className={`${classname}__title`}>{text}</p>
    </div>
  );
};

export default Component;
