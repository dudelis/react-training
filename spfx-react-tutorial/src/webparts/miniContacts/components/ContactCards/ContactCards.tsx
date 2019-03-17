import * as React from "react";
import {
  IPersonaSharedProps,
  Persona
} from "office-ui-fabric-react/lib/Persona";

import ContactCard from "../ContactCard";

interface IContactCardsProps {
  header: string;
}


export default function ContactCards(props: any): JSX.Element {
  return (
    <div className="ms-Grid" dir="ltr">
        <h2>{props.header}</h2>
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-u-sm12 ms-u-md3">
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </div>
      </div>
    </div>
  );
}
