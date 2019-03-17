import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'MiniContactsWebPartStrings';
import MiniContacts from './components/MiniContacts';
import { IMiniContactsProps } from './components/IMiniContactsProps';

export interface IMiniContactsWebPartProps {
  title: string;

}

export default class MiniContactsWebPart extends BaseClientSideWebPart<IMiniContactsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMiniContactsProps > = React.createElement(
      MiniContacts,
      {
        title: this.properties.title,
        client: this.context.spHttpClient
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('title', {
                  label: strings.Title
                })
              ]
            }
          ]
        }
      ]
    };
  }
}