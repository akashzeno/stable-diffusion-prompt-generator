"use client";

import componentsOfAPrompt from "@/data/components_of_a_prompt";
import { useState, useEffect } from "react";

interface FormValues {
	[key: string]: string; // This tells TypeScript that FormValues is an object with any number of properties, all of which are strings.
}

export default function Home() {
	// Create a single state object to hold all form values
	const [formValues, setFormValues] = useState<FormValues>({});
	const [generatedPrompt, setGeneratedPrompt] = useState("");

	// Update the generated prompt whenever formValues change
	useEffect(() => {
		const promptParts = componentsOfAPrompt
			.map(({ name }) => formValues[name])
			.filter(Boolean);
		setGeneratedPrompt(promptParts.join(", "));
	}, [formValues]);

	// Handle changes to any of the dynamically generated inputs
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues((prev) => ({ ...prev, [name]: value }));
	};

	const handleCopy = () => {
		navigator.clipboard
			.writeText(generatedPrompt)
			.then(() => {
				alert("Prompt copied to clipboard!");
			})
			.catch((err) => {
				console.error("Failed to copy text: ", err);
			});
	};

	return (
		<main className="p-4 flex flex-col gap-4 sm:p-24">
			<div>
				<label className="form-control w-full">
					<div className="label">
						<strong className="label-text">Generated Prompt:</strong>
					</div>
					<div className="join">
						<input
							readOnly
							id="generated_prompt"
							name="generated_prompt"
							type="text"
							placeholder="Type here"
							className="input join-item input-bordered w-full"
							value={generatedPrompt}
						/>
						<button
							type="button"
							title="Copy"
							aria-label="Copy"
							className="btn btn-square join-item !px-8"
							onClick={handleCopy}
						>
							Copy
						</button>
					</div>
				</label>
			</div>
			<div className="grid sm:grid-cols-2 gap-4">
				{componentsOfAPrompt.map(({ label, name, example, definition, guidance }) => (
					<div key={name}>
						<label className="form-control w-full">
							<div className="label">
								<strong className="label-text">{label}?</strong>
							</div>
							<input
								id={name}
								name={name}
								value={formValues[name] || ""}
								type="text"
								placeholder="Type here"
								className="input input-bordered w-full"
								onChange={handleChange}
							/>
						</label>
						<div className="label flex flex-col items-start gap-2">
							{definition && (
								<span className="label-text-alt">
									<strong>Definition:</strong> {definition}
								</span>
							)}
							{guidance && (
								<span className="label-text-alt">
									<strong>Guidance:</strong> {guidance}
								</span>
							)}
							{example && (
								<span className="label-text-alt">
									<strong>Example:</strong> {example}
								</span>
							)}
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
