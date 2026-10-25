// app/@modal/(.)notes/[id]/page.tsx

"use client";

import { useRouter } from "next/navigation";
import { fetchNoteById } from '@/lib/api';
import { useQuery } from "@tanstack/react-query";
import Modal from '@/components/Modal/Modal';
import css from './NotePreview.module.css';

const NotePreview = ({ id }: { id: string }) => {
  const router = useRouter();

  const { data: note } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id)
  });

  const handleCloseModal = () => {
    router.back();
  };

  return (
    <Modal onClose={handleCloseModal}>
      {note ?
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>note title: {note.title}</h2>
            </div>
            <p className={css.tag}>{note.tag}</p>
            <p className={css.content}>Note content: {note.content}</p>
            <p className={css.date}>Created date: {note.createdAt}</p>
          </div>
        </div> : null}
    </Modal>
  );
};

export default NotePreview;