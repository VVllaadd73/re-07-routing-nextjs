// app/notes/filter/[...slug]/page.tsx

import Notes from './Notes.client';
import type { DataTag } from '@/types/note';
import type { Props } from '@/types/note';

const NotesByCategory = async ({ params }: Props) => {
  const { slug } = await params;
  const tag: DataTag | undefined =
    slug[0] === 'all' ? undefined : (slug[0] as DataTag);

  return (
    <div>
      <Notes tag={tag} />
    </div>
  );
};

export default NotesByCategory;