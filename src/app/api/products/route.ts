import { NextResponse } from 'next/server';
import { Product, sampleProducts } from '@/types/product';

export async function GET() {
  // This is example data - replace with your actual data source
  const products: Product[] = sampleProducts;

  return NextResponse.json(products);
} 