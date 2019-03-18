import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider
} from '@microsoft/sp-webpart-base';

import * as strings from 'MiniContactsWebPartStrings';
import MiniContacts from './components/MiniContacts';
import { IMiniContactsProps } from './components/IMiniContactsProps';

export interface IMiniContactsWebPartProps {
  title: string;
  count: number;
  listName: string;

}

export default class MiniContactsWebPart extends BaseClientSideWebPart<IMiniContactsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMiniContactsProps > = React.createElement(
      MiniContacts,
      {
        title: this.properties.title,
        client: this.context.spHttpClient,
        webUrl: this.context.pageContext.web.absoluteUrl,
        itemCount: this.properties.count,
        listName: this.properties.listName
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get disableReactivePropertyChanges(){
    return true;
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
                  label: strings.Title,
                  description: "Web Part Title"
                }),
                PropertyPaneTextField('listName', {
                  label: strings.ListName,
                  description: "Name of the list with Contacts"
                }),
                PropertyPaneSlider('count', {
                  label: strings.Count,
                  min: 1,
                  max: 40
                })
                
              ]
            }
          ]
        }
      ]
    };
  }
}
