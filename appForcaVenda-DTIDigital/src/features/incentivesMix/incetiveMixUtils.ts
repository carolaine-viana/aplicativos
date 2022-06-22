import { IMixCategory, IMixProduct, IMixResponse, IMixSupplier, IMixData } from 'shared/types';
import { isArrayEmpty } from 'shared/utils';

export type TMix = 'Fornecedores' | 'Categorias' | 'Produtos';

export const getChips = (data: IMixData, promiseDone: boolean) => [
  {
    text: 'Fornecedores',
    disabled: !data || (promiseDone && isArrayEmpty(data?.businessIncentiveSuppliers)),
  },
  {
    text: 'Categorias',
    disabled: !data || (promiseDone && isArrayEmpty(data?.businessIncentiveCategories)),
  },
  {
    text: 'Produtos',
    disabled: !data || (promiseDone && isArrayEmpty(data?.businessIncentiveProducts)),
  },
];

export const extractData = (selectedChip: TMix, data: IMixData) => {
  if (!data) {
    return [];
  }
  switch (selectedChip) {
    case 'Fornecedores':
      return data.businessIncentiveSuppliers;
    case 'Categorias':
      return data.businessIncentiveCategories;
    case 'Produtos':
      return data.businessIncentiveProducts;

    default:
      return [];
  }
};

function transformMixSuppliers(
  suppliers: IMixResponse['business_incentive_suppliers']
): IMixSupplier[] {
  return suppliers.map((sup) => ({
    businessGroupId: sup.business_group_id,
    businessGroupName: sup.business_group_name,
    supplierDivisionId: sup.supplier_division_id,
    supplierDivisionName: sup.supplier_division_name,
  }));
}

function transformMixCategories(
  categories: IMixResponse['business_incentive_categories']
): IMixCategory[] {
  return categories.map((cat) => ({
    productsGroup: cat.products_group,
    productsCategory: cat.products_category,
    productsSubcategory: cat.products_subcategory,
    operationType: cat.operation_type,
  }));
}

function transformMixProducts(
  products: IMixResponse['business_incentive_products']
): IMixProduct[] {
  return products.map((prod) => ({
    ...prod,
    operationType: prod.operation_type,
  }));
}

export const transformMixResponse = (data: IMixResponse): IMixData => ({
  businessIncentiveSuppliers: transformMixSuppliers(data.business_incentive_suppliers),
  businessIncentiveCategories: transformMixCategories(data.business_incentive_categories),
  businessIncentiveProducts: transformMixProducts(data.business_incentive_products),
});

export const isThereMix = (renderedChips: undefined | Array<{ text: string; disabled: boolean }>) =>
  renderedChips?.some((chip) => !chip.disabled);
