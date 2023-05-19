import React from "react";
import {
	FaBold,
	FaHeading,
	FaItalic,
	FaListOl,
	FaListUl,
	FaParagraph,
	FaQuoteLeft,
	FaStrikethrough,
	FaUnderline,
} from "react-icons/fa";
import { Editor } from "@tiptap/react";
import classNames from "classnames";

export const MenuBar = ({ editor }: { editor: Editor }) => {
	return (
		<div className="flex flex-wrap items-center space-x-1 border-b bg-transparent py-3 mx-auto">
			<button
				className={classNames(
					"p-2",
					{ "opacity-100": editor.isActive("paragraph") },
					{
						"text-gray-600 opacity-50":
							!editor.isActive("paragraph"),
					}
				)}
				onClick={() =>
					editor.chain().focus().setParagraph().run()
				}
				type="button">
				<FaParagraph />
			</button>
			<button
				className={classNames(
					"p-2",
					{ "opacity-100": editor.isActive("bold") },
					{
						"text-gray-600 opacity-50":
							!editor.isActive("bold"),
					}
				)}
				disabled={
					!editor.can().chain().focus().toggleBold().run()
				}
				onClick={() =>
					editor.chain().focus().toggleBold().run()
				}
				type="button">
				<FaBold />
			</button>
			<button
				className={classNames(
					"p-2",
					{ "opacity-100": editor.isActive("italic") },
					{
						"text-gray-600 opacity-50":
							!editor.isActive("italic"),
					}
				)}
				disabled={
					!editor.can().chain().focus().toggleItalic().run()
				}
				onClick={() =>
					editor.chain().focus().toggleItalic().run()
				}
				type="button">
				<FaItalic />
			</button>
			{/* {editor && (<button
				className={classNames(
					"p-2",
					{ "opacity-100": editor.isActive("underline") },
					{
						"text-gray-600 opacity-50":
							!editor.isActive("underline"),
					}
				)}
				disabled={
					!editor
						.can()
						.chain()
						.focus()
						.toggleUnderline()
						.run()
				}
				onClick={() =>
					editor.chain().focus().toggleUnderline().run()
				}
				type="button">
				<FaUnderline />
			</button>)} */}
			<button
				className={classNames(
					"p-2",
					{ "opacity-100": editor.isActive("strike") },
					{
						"text-gray-600 opacity-50":
							!editor.isActive("strike"),
					}
				)}
				disabled={
					!editor.can().chain().focus().toggleStrike().run()
				}
				onClick={() =>
					editor.chain().focus().toggleStrike().run()
				}
				type="button">
				<FaStrikethrough />
			</button>

			<button
				className={classNames(
					"p-2",
					{
						"opacity-100": editor.isActive("heading", {
							level: 1,
						}),
					},
					{
						"text-gray-600 opacity-50": !editor.isActive(
							"heading",
							{
								level: 1,
							}
						),
					}
				)}
				onClick={() =>
					editor
						.chain()
						.focus()
						.toggleHeading({ level: 1 })
						.run()
				}
				type="button">
				<FaHeading />
			</button>
			<button
				className={classNames(
					"p-2",
					{ "opacity-100": editor.isActive("bulletList") },
					{
						"text-gray-600 opacity-50":
							!editor.isActive("bulletList"),
					}
				)}
				onClick={() =>
					editor.chain().focus().toggleBulletList().run()
				}
				type="button">
				<FaListUl />
			</button>
			<button
				className={classNames(
					"p-2",
					{ "opacity-100": editor.isActive("orderedList") },
					{
						"text-gray-600 opacity-50":
							!editor.isActive("orderedList"),
					}
				)}
				onClick={() =>
					editor.chain().focus().toggleOrderedList().run()
				}
				type="button">
				<FaListOl />
			</button>
			<button
				className={classNames(
					"p-2",
					{ "opacity-100": editor.isActive("blockquote") },
					{
						"text-gray-600 opacity-50":
							!editor.isActive("blockquote"),
					}
				)}
				onClick={() =>
					editor.chain().focus().toggleBlockquote().run()
				}
				type="button">
				<FaQuoteLeft />
			</button>
		</div>
	);
};
