import * as React from "react";
import styles from "./MiniContacts.module.scss";
import { IMiniContactsProps } from "./IMiniContactsProps";
import ContactCards from "./ContactCards";

import { escape } from "@microsoft/sp-lodash-subset";
import {
  SPHttpClient,
  SPHttpClientConfiguration,
  SPHttpClientResponse
} from "@microsoft/sp-http";

export default class MiniContacts extends React.Component<
  IMiniContactsProps,
  any
> {
  constructor(props: IMiniContactsProps){
    super(props);

    this.state = {
      contacts: []
    }
  }

  public componentDidMount():void {
    this._getContacts();
  }

  public render(): React.ReactElement<IMiniContactsProps> {
    return (
      <div>
        <ContactCards header={this.props.title} items={this.state.contacts} />
      </div>
    );
  }

  private _getContacts(): void {
    var uri =
      "https://dudelisdev.sharepoint.com/sites/devsite01/_api/web/lists/getbytitle('keycontacts')/items?$expand=Contact/Id&$select=Title,Contact/Id,Contact/EMail,Contact/FirstName,Contact/LastName,Contact/Title,Contact/WorkPhone,Contact/Department,Contact/JobTitle";
    this._getSPData(uri).then(data => {
      console.log("some data " + data);
      this.setState({ contacts: data });
    });
  }

  private _getSPData(uri: string): Promise<string[]> {
    return this.props.client
      .get(uri, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response.json();
      })
      .then(data => {
        return data.value;
      });
  }
}
