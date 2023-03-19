import { EditorState } from 'draft-js'
import dynamic from 'next/dynamic'
import React, { Dispatch, SetStateAction } from 'react'
import { EditorProps } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styled from 'styled-components'
import Button from './Button'

interface IEditor {
  editorState: EditorState
  readOnly?: boolean
  onSave?: () => void
  onEditorStateChange?: Dispatch<SetStateAction<EditorState | undefined>>
}

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  {
    ssr: false,
  }
)

function CustomEditor({
  editorState,
  readOnly = false,
  onSave,
  onEditorStateChange,
}: IEditor) {
  return (
    <Wrapper>
      <Editor
        readOnly={readOnly}
        toolbarHidden={readOnly}
        editorState={editorState}
        toolbarClassName="wrapper-class"
        wrapperClassName="editorToolbar-hidden"
        editorClassName="editor-class"
        toolbar={{
          options: ['inline', 'list', 'textAlign', 'link'],
        }}
        onEditorStateChange={onEditorStateChange}
      />

      {!readOnly && <Button onClick={onSave}>save</Button>}
    </Wrapper>
  )
}

export default CustomEditor

const Wrapper = styled.div`
  padding: 16px;
`
