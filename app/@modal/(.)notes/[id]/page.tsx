// app/@modal/(.)notes/[id]/page.tsx

import NotePreview from './NotePreviewClient';

type NotePreviewProps = {
  params: Promise<{ id: string }>;
};

const NotePreviewPage = async ({ params }: NotePreviewProps) => {
  const { id } = await params;
  

  return(
    <div >
      <NotePreview id={id} />
    </div>
  )
};

export default NotePreviewPage;