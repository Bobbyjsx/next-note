"use client"
import { Dispatch, SetStateAction } from "react";
import { InputValues } from "./page";

interface InputProps {
	input: InputValues;
	setInput: (value: InputValues) => void;
}

const Head = ({ input, setInput }: InputProps) => {

	 const updateNoteTitle = (
			event: React.ChangeEvent<HTMLInputElement>
		) => {
			setInput({
				...input,
				note_title: event.target.value,
			});
		};

	return (
		<div className="w-full">
			<input
				type="text"
				className="capitalize text-2xl font-semibold flex focus:outline-transparent h-16 w-full min-w-[100vw] bg-slate-700 text-gray-300 p-5 placeholder-slate-400 border-b-2"
				placeholder="HEAD..."
				value={input?.note_title}
				onChange={updateNoteTitle}
			/>
		</div>
	);
};

export default Head;
