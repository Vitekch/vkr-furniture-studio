import { ICatalogItem } from "./../catalog/interfaces";

export interface IAlert {
  isVisible: boolean,
  status: string
}

export interface IState {
  isMobMenuVisible: boolean;
  isSetOrderModalVisible: boolean;
  isItemDescModalVisible: boolean;
  isLoading: boolean;
  describedItem: ICatalogItem | null;
  orderModel: ICatalogItem | null;
  alert: IAlert,
  adminData: any[],
}
