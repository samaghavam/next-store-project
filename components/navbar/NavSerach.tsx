'use client';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type ReusableSearchProps = {
  placeholder?: string;
  searchParam?: string;
  searchPath?: string;
};

function NavSearch({ placeholder = 'Search...', searchParam = 'search', searchPath = '/products' }: ReusableSearchProps) {
  const { replace } = useRouter();
  const [search, setSearch] = useState('');

  const handleSearch = (value: string) => {
    const searchQuery = value ? `?${searchParam}=${encodeURIComponent(value)}` : '';
    replace(`${searchPath}${searchQuery}`);
  };

  return (
    <Input
      type='search'
      placeholder={placeholder}
      className='max-w-xs dark:bg-muted '
      onChange={(e) => {
        const value = e.target.value;
        setSearch(value);
        handleSearch(value);
      }}
      value={search}
    />
  );
}

export default NavSearch;