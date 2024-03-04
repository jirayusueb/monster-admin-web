'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function IndexPage() {
  const router = useRouter();

  React.useEffect(() => {
    router.push('/home');
  }, []);

  return <></>;
}
