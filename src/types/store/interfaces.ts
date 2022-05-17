import { ICatalogItem } from "./../catalog/interfaces";

export interface IState {
  isMobMenuVisible: boolean;
  isSetOrderModalVisible: boolean;
  isItemDescModalVisible: boolean;
  describedItem: ICatalogItem | null;
  orderModel: string;
}
