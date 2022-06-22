export interface IMixResponse {
  business_incentive_suppliers: Array<{
    business_group_id: number;
    business_group_name: string;
    supplier_division_id: number;
    supplier_division_name: string;
  }>;

  business_incentive_categories: Array<{
    products_group: string;
    products_category: string;
    products_subcategory: string;
    operation_type: string;
  }>;

  business_incentive_products: Array<{
    id: number;
    name: string;
    operation_type: string;
  }>;
}
