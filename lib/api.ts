// lib/api.ts

import type { OrderFormValues } from '../types/note'
import type { Note, Notes, FetchProps } from '../types/note'
import axios from 'axios'

const dataURL = () => {
  return {
    token: process.env.NEXT_PUBLIC_NOTEHUB_TOKEN,
    URL: 'https://notehub-public.goit.study/api/notes'
  };
};

export async function fetchNotes({ page, searchQuery, tag }: FetchProps): Promise<Notes> {
  const { token, URL } = dataURL();
  const response = await axios.get<Notes>(`${URL}`, {
    params: {
      page,
      ...(searchQuery && { search: searchQuery }),
      ...(tag && { tag }),
      perPage: 12
    },
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  return response.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const { token, URL } = dataURL();
  const response = await axios.get<Note>(`${URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
}

export async function createNote(note: OrderFormValues) {
  const { token, URL } = dataURL();
  const response = await axios.post<Note>(`${URL}`, note, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  );
  return response.data;
}

export default async function deleteNote(id: string) {
  const { token, URL } = dataURL();
  const response = await axios.delete(
    `${URL}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}

export const getCategories = () => {
  return ["Todo", "Work", "Personal", "Meeting", "Shopping"];
}
