import { AddressType } from './address';

export interface SuppliersType {
  supplierID: number;
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: AddressType;
}
