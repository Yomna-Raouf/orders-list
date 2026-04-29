import type { Order, StatusFilter } from '@/types/order'

export const orders: Order[] = [
  {
    id: 1012,
    customerName: 'Alice Johnson',
    status: 'New',
    items: ['Bananas', 'Oat Milk', 'Brown Bread'],
    createdAt: '2026-04-28T09:25:00Z',
  },
  {
    id: 1013,
    customerName: 'Omar Hassan',
    status: 'Picking',
    items: ['Greek Yogurt', 'Eggs'],
    createdAt: '2026-04-28T10:08:00Z',
  },
  {
    id: 1014,
    customerName: 'Maya Salem',
    status: 'Delivering',
    items: ['Apples', 'Cheddar Cheese', 'Sparkling Water'],
    createdAt: '2026-04-27T19:43:00Z',
  },
  {
    id: 1015,
    customerName: 'Khaled Nabil',
    status: 'Delivered',
    items: ['Chicken Breast', 'Rice', 'Olive Oil'],
    createdAt: '2026-04-26T14:22:00Z',
  },
  {
    id: 1016,
    customerName: 'Rana Adel',
    status: 'New',
    items: ['Tomatoes', 'Pasta'],
    createdAt: '2026-04-29T07:12:00Z',
  },
  {
    id: 1017,
    customerName: 'Youssef Ali',
    status: 'Picking',
    items: ['Cereal', 'Blueberries', 'Almonds'],
    createdAt: '2026-04-29T06:50:00Z',
  },
]

export const STATUS_OPTIONS: StatusFilter[] = [
  'All',
  'New',
  'Picking',
  'Delivering',
  'Delivered',
]
