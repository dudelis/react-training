import { SPHttpClient } from "@microsoft/sp-http";
export interface IMiniContactsProps {
  title: string;
  client: SPHttpClient;
  webUrl: string;
  itemCount: number;
  listName: string;
}
