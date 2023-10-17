import { Todo } from "../models/todo";

export type TodoId = Todo[ 'id' ];

export const FILTER_TYPES = {
  ALL: 'all',
  COMPLETED: 'completed',
  ACTIVE: 'active'
} as const

export type FilterType = typeof FILTER_TYPES[ keyof typeof FILTER_TYPES ];