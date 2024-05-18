"use client";

import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { useState } from "react";
import { toast } from "sonner";

export default function CopyToClipboardButton({ text }: { text: string }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				setCopied(true);
				toast.success("Copied to clipboard", {
					icon: <LuCopyCheck />,
					position: "top-center",
				});
				setTimeout(() => setCopied(false), 2000);
			})
			.catch((err) => {
				console.error("Failed to copy text: ", err);
			});
	};

	if (!text) return null;

	return (
		<button type="button" title="Copy" aria-label="Copy" onClick={handleCopy}>
			{copied ? <LuCopyCheck /> : <LuCopy />}
		</button>
	);
}
