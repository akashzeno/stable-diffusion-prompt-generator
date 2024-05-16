"use client";

import { useState, useEffect } from "react";
import componentsOfAPrompt from "@/data/components_of_a_prompt";
import CreatableSelect from "react-select/creatable";
import { components } from "react-select";
import Image from "next/image";
import emotionOptions from "@/data/emotion_options";
interface FormValues {
	[key: string]: Array<{ label: string; value: string }>;
}

const customStyles = {
	control: (provided) => ({
		...provided,
		backgroundColor: "#333", // Dark background for the control
		borderColor: "#555", // Darker border for the control
		color: "white", // Text color
		boxShadow: "none", // Remove box-shadow
	}),
	menu: (provided) => ({
		...provided,
		backgroundColor: "#333", // Dark background for the dropdown menu
	}),
	option: (provided, state) => ({
		...provided,
		backgroundColor: state.isSelected ? "#555" : "#333", // Different background for selected and normal options
		color: "white", // Text color for options
		cursor: "pointer",
		"&:hover": {
			backgroundColor: "#555", // Background for hovering on options
		},
	}),
	multiValue: (provided) => ({
		...provided,
		backgroundColor: "#555", // Background for tags
	}),
	multiValueLabel: (provided) => ({
		...provided,
		color: "white", // Text color for tags
	}),
	multiValueRemove: (provided) => ({
		...provided,
		color: "white", // Text color for the remove icon in tags
		"&:hover": {
			backgroundColor: "#666", // Background color when hovering over the remove icon
			color: "red", // Text color when hovering over the remove icon
		},
	}),
	input: (provided) => ({
		...provided,
		color: "white", // Text color for input
	}),
	placeholder: (provided) => ({
		...provided,
		color: "#aaa", // Placeholder color
	}),
	singleValue: (provided) => ({
		...provided,
		color: "white", // Text color for selected value
	}),
};

const options = {
	emotion: emotionOptions,
};

// Custom Option component to render images alongside text
const Option = (props) => {
	const { data } = props;
	return (
		<components.Option {...props}>
			<div className="flex items-center justify-between">
				{props.data.label}
				{data?.image && (
					<Image
						src={data.image}
						alt={data.label}
						width={32}
						height={32}
						className="aspect-square object-cover"
					/>
				)}
			</div>
		</components.Option>
	);
};

export default function Home() {
	// Initialize state to hold all form values
	const [formValues, setFormValues] = useState<FormValues>({});
	const [generatedPrompt, setGeneratedPrompt] = useState("");

	// Update the generated prompt whenever formValues change
	useEffect(() => {
		const promptParts = componentsOfAPrompt
			.map(({ name }) => formValues[name]?.map((option) => option.value).join(", "))
			.filter(Boolean);
		setGeneratedPrompt(promptParts.join(", "));
	}, [formValues]);

	const handleChange = (newValue, actionMeta, name) => {
		setFormValues((prev) => ({ ...prev, [name]: newValue || [] }));
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
				{componentsOfAPrompt.map(({ label, name, definition, guidance, example }) => (
					<div key={name}>
						<label className="form-control w-full">
							<div className="label">
								<strong className="label-text">{label}?</strong>
							</div>
							<CreatableSelect
								isMulti
								styles={customStyles}
								options={options[name] || []}
								value={formValues[name] || []}
								placeholder="Type or select options"
								// className="input input-bordered w-full"
								components={{ Option }}
								onChange={(value, actionMeta) => handleChange(value, actionMeta, name)}
							/>
						</label>
						<div className="label flex flex-col items-start gap-2">
							<span className="label-text-alt">
								<strong>Definition:</strong> {definition}
							</span>
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
