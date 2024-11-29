import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  
  return NextResponse.json({
    ipv4: forwarded ? forwarded.split(',')[0] : realIp || 'Not available',
    ipv6: realIp || 'Not available',
  });
}
