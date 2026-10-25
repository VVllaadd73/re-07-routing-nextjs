// types/note.ts

export type DataTag =
  "Todo" |
  "Work" |
  "Personal" |
  "Meeting" |
  "Shopping";

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: DataTag;
}

export interface Notes {
  notes: Note[];
  totalPages: number;
}

export interface FetchProps {
  page: number;
  searchQuery: string;
  tag?: DataTag;
}

export interface OrderFormValues {
  title: string;
  content: string;
  tag: DataTag;
}

export type TagProps = {
  tag?: DataTag;
};

export type Props = {
  params: Promise<{ slug: string[] }>;
};