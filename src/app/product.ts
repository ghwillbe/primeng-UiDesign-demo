export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

export interface SignFlow {
  approvalStep?: number;
  approvalRole?: string;
  approver?: string;
  approvalResults?: string;
  comments?: string;
  approvalDate?: string;
}
