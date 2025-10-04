import React, { useCallback } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { FiBold, FiItalic, FiCode, FiList, FiMinus, FiLink } from 'react-icons/fi';
import { FaStrikethrough } from 'react-icons/fa';

const ToolbarButton = ({ onClick, children, isActive }) => (
    <button type="button" onClick={onClick} className={`p-2 rounded-md transition-colors ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'}`} aria-label={String(children)}>
        {children}
    </button>
);

const Toolbar = ({ editor }) => {
  if (!editor) return null;

  const setLink = useCallback(() => {
    if (editor.state.selection.empty) {
      alert('Please select some text to apply a link.');
      return;
    }

    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  return (
    <div className="p-2 border-b-2 border-gray-300 flex items-center flex-wrap gap-1">
      <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')}><FiBold /></ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')}><FiItalic /></ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleStrike().run()} isActive={editor.isActive('strike')}><FaStrikethrough /></ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleCode().run()} isActive={editor.isActive('code')}><FiCode /></ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive('bulletList')}><FiList /></ToolbarButton>
      <ToolbarButton onClick={setLink} isActive={editor.isActive('link')}><FiLink /></ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().setHorizontalRule().run()}><FiMinus /></ToolbarButton>
    </div>
  );
};

const RichTextEditor = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        link: {
          openOnClick: false,
          autolink: true,
        },
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class: 'prose max-w-none p-4 min-h-[150px] focus:outline-none prose-a:text-blue-600 hover:prose-a:underline',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="bg-white border-2 border-gray-300 rounded-md">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;