import { Editor } from '@tinymce/tinymce-react'
import React from 'react'

const InputText = (props) => {
    const {
        label,
        id,
        height = 500,
        register,
        errors,
        validate,
        setValue,
        className,
        ...rest
    } = props

    return (
        <>
            <div {...rest} className={className}>
                <div className="input__text">
                    {label && <label htmlFor={id}>{label}</label>}
                    <Editor
                        {...register(id, validate)}
                        onChange={(e) => setValue(id, e.target.getContent())}
                        apiKey={process.env.REACT_TINY_CME_KEY}
                        // onInit={(evt, editor) => (editorRef.current = editor)}
                        // initialValue="<p>This is the initial content of the editor.</p>"
                        init={{
                            height: height,
                            menubar: true,
                            plugins: [
                                'advlist',
                                'autolink',
                                'lists',
                                'link',
                                'image',
                                'charmap',
                                'preview',
                                'anchor',
                                'searchreplace',
                                'visualblocks',
                                'code',
                                'fullscreen',
                                'insertdatetime',
                                'media',
                                'table',
                                'code',
                                'help',
                                'wordcount',
                            ],
                            toolbar:
                                'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style:
                                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                        }}
                    />
                    {errors && errors[id] && (
                        <small>{errors[id]?.message}</small>
                    )}
                </div>
            </div>
        </>
    )
}

export default InputText
