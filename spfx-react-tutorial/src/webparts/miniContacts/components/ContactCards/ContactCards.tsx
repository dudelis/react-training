import * as React from "react";

import { IContact } from "../../models";
import ContactCard from "../ContactCard";

export interface IContactCardsProps {
  header: string;
  items: any;
}

export default function ContactCards(props: IContactCardsProps): JSX.Element {
  const items = (props.items) ? props.items : [];

  return (
    <div className="ms-Grid" dir="ltr">
      <h2>{props.header}</h2>
      <div className="ms-Grid-row">
        {items.map((item: IContact) => {
          return (
            <div className="ms-Grid-col ms-u-sm12 ms-u-md4">
              <ContactCard
                key={item.Contact.Id}
                text={item.Contact.Title}
                secondaryText={item.Contact.JobTitle}
                optionalText={item.Contact.WorkPhone}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
