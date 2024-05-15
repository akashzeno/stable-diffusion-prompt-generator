import componentsOfAPrompt from "@/data/components_of_a_prompt";
export default function Home() {
	return (
		<main className="p-4 flex flex-col gap-4 sm:p-24">
			<div>
				<label className="form-control w-full">
					<div className="label">
						<strong className="label-text">Generated Prompt:</strong>
					</div>
					<input
						id="generated_prompt"
						name="generated_prompt"
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full"
					/>
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
								type="text"
								placeholder="Type here"
								className="input input-bordered w-full"
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
