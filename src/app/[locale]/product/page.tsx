'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ArrowLeft,
  ArrowRight,
  ListFilter,
  PlusCircle,
  RefreshCw,
  SlidersHorizontal,
} from 'lucide-react';
import DataGrid from 'react-data-grid';
import 'react-data-grid/lib/styles.css';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
];

const rows = [
  { id: 0, title: 'Example' },
  { id: 1, title: 'Demo' },
];

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col divide-y">
      <div className="flex h-12 items-center justify-between px-2">
        <div className="flex gap-2">
          <Button size={'xs'} variant={'outline'}>
            <ListFilter size={14} className="mr-1" />
            ตัวกรอง
          </Button>
          <Button size={'xs'} variant={'outline'}>
            <SlidersHorizontal size={14} className="mr-1" />
            คอลัมน์
          </Button>
          <Button size={'xs'} variant={'outline'}>
            <PlusCircle size={14} className="mr-1" />
            สร้าง
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-8 items-center">
            <small>
              <span className="font-mono">2</span> รายการ
            </small>
          </div>
          <Button size={'xs'} variant={'ghost'}>
            <ArrowLeft size={14} />
          </Button>
          <div className="flex h-8 items-center justify-center gap-1.5">
            <Input
              type="number"
              className="h-8 w-14"
              min={1}
              defaultValue={1}
            />
            <small className="font-mono"> / 100</small>
          </div>
          <Button size={'xs'} variant={'ghost'}>
            <ArrowRight size={14} />
          </Button>
          <Button size={'xs'} variant={'outline'}>
            <RefreshCw size={14} />
          </Button>
        </div>
      </div>
      <DataGrid
        className="rdg-light box-border font-mono text-sm	"
        columns={columns}
        rows={rows}
      />
    </div>
  );
}
