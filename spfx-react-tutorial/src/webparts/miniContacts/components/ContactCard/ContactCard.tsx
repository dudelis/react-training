import * as React from "react";
import styles from "./ContactCard.module.scss";
import {
  IPersonaSharedProps,
  Persona
} from "office-ui-fabric-react/lib/Persona";

export default function ContactCard(): JSX.Element {
  return (
    <div className={styles["contactCard"]} dir="ltr">
      <Persona
        imageUrl="./images/0.jpg"
        imageInitials="AL"
        text="Annie Lindqvist"
        secondaryText="Software Engineer"
        tertiaryText="In a meeting"
        optionalText="Available at 4:00pm"
        className = {styles["ms-Persona"]}
      />
    </div>
  );
}
