import * as React from "react";
import {
  IPersonaSharedProps,
  Persona
} from "office-ui-fabric-react/lib/Persona";

import ContactCard from '../ContactCard';

export default function ContactCards(): JSX.Element {
  return (
    <div className="ms-Grid" dir="ltr">
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
