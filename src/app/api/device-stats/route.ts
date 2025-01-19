import { NextResponse } from 'next/server';

export async function GET() {
  // Replace this with your actual data fetching logic
  const deviceStats = {
    desktop: 65,
    tablet: 34,
    mobile: 12,
    unknown: 150
  };
  await new Promise(resolve => setTimeout(resolve, 2000));
  return NextResponse.json(deviceStats);
} 