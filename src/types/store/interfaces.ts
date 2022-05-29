import { ICatalogItem } from "./../catalog/interfaces";

export interface IAlert {
  isVisible: boolean,
  status: string
}

export interface IState {
  isMobMenuVisible: boolean;
  isSetOrderModalVisible: boolean;
  isItemDescModalVisible: boolean;
  describedItem: ICatalogItem | null;
  orderModel: string;
  alert: IAlert
}
