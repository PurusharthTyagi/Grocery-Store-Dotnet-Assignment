export interface Category {
    id: number;
    category: string;
}

export interface NavigationItem {
    category: string
}

export interface Product {
    productId: string
    productName: string;
    productDescription: string;
    category: string;
    availableQuantity: number;
    price: number;
    discount: number;
    img: string;
    specification: string;
}