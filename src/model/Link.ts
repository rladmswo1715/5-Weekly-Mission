export interface LinkItem {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export interface LinkParam {
  listInfo: LinkItem[];
  isSetting?: boolean;
}

export interface LinkItemParam {
  linkInfo: LinkItem;
  isSetting?: boolean;
}
