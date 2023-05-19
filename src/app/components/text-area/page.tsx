"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { MenuBar } from "./MenuBar";
import Head from "./Head";
import { useState, useEffect } from "react";
import { Editor } from "@tiptap/react";

export interface InputValues {
	note_title: string;
	note_content: string;
	form_errors: string[];
}
const Tiptap = () => {
	
	 const [inputValues, setInputValues] = useState<InputValues>({
			note_title: "",
			note_content: "",
			form_errors: [],
		});

		useEffect(() => {
			const storedForm = localStorage?.getItem("Form");
			if (storedForm) {
				const parsedForm = JSON.parse(storedForm);
				setInputValues(parsedForm);
			}
		}, []);

		useEffect(() => {
			localStorage?.setItem("Form", JSON.stringify(inputValues));
		}, [inputValues]);

	const editor = useEditor({
		extensions: [StarterKit, Underline],
		content: inputValues.note_content,
		editorProps: {
			attributes: {
				class: "flex focus:outline-gray-400 h-screen w-full min-w-[100vw] bg-slate-800 text-gray-300 p-5",
			},
		},
		onFocus: ({ event }) => {
			event.preventDefault();
			event.stopPropagation();
		},
		onUpdate: ({ editor }) => {
			const html = editor.getHTML();
			 setInputValues((prevInputValues) => ({
					...prevInputValues,
					note_content: html,
				}));
		},
	});
	 
	useEffect(() => {
		if (editor) {
			editor.commands.setContent(inputValues.note_content);
		}
	}, [inputValues.note_content]);
	

	return (
		<>
			{editor && <MenuBar editor={editor} />}
			<div className="flex w-full h-screen bg-gray-100">
				<div className="w-full max-w-3xl max-h-screen  ">
					<Head
						input={inputValues}
						setInput={setInputValues}
					/>
					<div className="h-full">
						<EditorContent
							editor={editor}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Tiptap;
