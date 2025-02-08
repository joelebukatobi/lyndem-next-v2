'use clinet';

// Components
import { Button } from '@/main/_components/atoms/Button';

export const SectionText = ({ caption, heading, text, button }) => {
  return (
    <div className="section-text">
      <div className="caption">
        <div>
          <p>{caption}</p>
          <hr />
        </div>
        <h3>{heading}</h3>
        <p>{text}</p>

        {button ? <Button type="button">{button}</Button> : null}
      </div>
    </div>
  );
};
