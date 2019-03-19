import * as React from "react";
import { escape } from "@microsoft/sp-lodash-subset";
import {
  SPHttpClient,
  SPHttpClientConfiguration,
  SPHttpClientResponse
} from "@microsoft/sp-http";

import styles from "./MiniContacts.module.scss";
import { IMiniContactsProps } from "./IMiniContactsProps";
import ContactCards from "./ContactCards";
import {IContact, IUser} from "../models";
require('./MiniContacts.override.css');


export default class MiniContacts extends React.Component<
  IMiniContactsProps,
  any
> {
  constructor(props: IMiniContactsProps) {
    super(props);

    this.state = {
      contacts: []
    };
  }

  public componentDidMount(): void {
    this._getContacts();
  }

  public componentDidUpdate(prevProps) {
    if (
      prevProps.listName !== this.props.listName ||
      prevProps.itemCount !== this.props.itemCount
    ) {
      this._getContacts();
    }
  }

  public render(): React.ReactElement<IMiniContactsProps> {
    return (
      <div className="MiniContactsOverrides">
        <ContactCards header={this.props.title} items={this.state.contacts} />
      </div>
    );
  }

  private _getContacts(): void {
    const { itemCount, webUrl, listName } = this.props;
    var uri = `${webUrl}/_api/web/lists/getbytitle('${listName}')/items?$top=${itemCount}&$expand=Contact/Id&$select=Title,Contact/Id,Contact/EMail,Contact/FirstName,Contact/LastName,Contact/Title,Contact/WorkPhone,Contact/Department,Contact/JobTitle`;
    this._getSPData(uri).then((data) => {
      const contacts = data as any as IContact[];
      this._getUserInfo().then(ui =>{
        const contactsNew = contacts.map((contact: IContact) => {
          const user = ui.find(item => item.Id === contact.Contact.Id);
          contact.Contact.PictureUrl = user.Picture ? user.Picture.Url : null;
          return contact;
        });
        console.log(JSON.stringify(contactsNew));
        this.setState({ contacts: contactsNew });
      });
    });
  }

  private _getUserInfo() : Promise<any>{
    const { webUrl } = this.props;
    var uri = `${webUrl}/_api/web/lists/getbytitle('User Information List')/items?$filter=UserName ne null&$select=Id,Picture,UserName`;
    return this._getSPData(uri).then(data => {
      return data;
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
