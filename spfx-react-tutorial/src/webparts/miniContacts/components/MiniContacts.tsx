import * as React from "react";
import styles from "./MiniContacts.module.scss";
import { IMiniContactsProps } from "./IMiniContactsProps";
import ContactCards from './ContactCards';

import { escape } from "@microsoft/sp-lodash-subset";



export default class MiniContacts extends React.Component<
  IMiniContactsProps,
  {}
> {
  public render(): React.ReactElement<IMiniContactsProps> {
    return (
      <div>        
        <ContactCards header={this.props.title} />
      </div>      
    );
  }
}
