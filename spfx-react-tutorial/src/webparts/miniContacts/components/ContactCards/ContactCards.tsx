import * as React from "react";
import {
  IPersonaSharedProps,
  Persona
} from "office-ui-fabric-react/lib/Persona";

import ContactCard from "../ContactCard";

export interface IContactCardsProps {
  header: string;
  items: any;
}


export default function ContactCards(props: IContactCardsProps): JSX.Element {
  return (
    <div className="ms-Grid" dir="ltr">
        <h2>{props.header}</h2>
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-u-sm12 ms-u-md3">
          {props.items.map(item => {
            return (
              <ContactCard
                key={item.Contact.Id}
                text={item.Contact.Title}
                secondaryText={item.Contact.JobTitle}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}
