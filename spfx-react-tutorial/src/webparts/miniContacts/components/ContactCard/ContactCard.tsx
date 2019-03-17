import * as React from "react";
import styles from "./ContactCard.module.scss";
import {
  IPersonaSharedProps,
  Persona
} from "office-ui-fabric-react/lib/Persona";

export interface IContactCardProps {
  text: string;
  secondaryText: string;
  imageInitials?: string;
  optionalText?: string;
}

export default function ContactCard(props: IContactCardProps): JSX.Element {
  return (
    <div dir="ltr">
      <Persona
        {...props}
        // imageInitials = {props.imageInitials}
        // text= {props.text}
        // secondaryText= {props.secondaryText}
      />
    </div>
  );
}
