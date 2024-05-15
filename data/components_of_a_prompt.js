const componentsOfAPrompt = [
	{
		label: "Subject",
		name: "subject",
		definition: "The primary focus of the making (e.g., person, animal, object).",
		example: `"Renaissance noblewoman", "vampire queen"`,
	},
	{
		label: "Action",
		name: "action",
		definition:
			"Describes what the subject is doing, adding dynamism or narrative.",
		example: `"holding an ancient book"`,
	},
	{
		label: "Environment/Setting",
		name: "environment_setting",
		definition: "The background or scene surrounding the subject.",
		example: `"in a dimly lit Gothic castle"`,
	},
	{
		label: "Object",
		name: "object",
		definition: "Secondary items that enhance the subject or story.",
		example: `"wearing an intricate lace collar"`,
	},
	{
		label: "Color",
		name: "color",
		definition: "Dominant colors or color schemes.",
		example: `"shades of deep red and gold", "monochrome palette with stark contrasts"`,
	},
	{
		label: "Style",
		name: "style",
		definition: "The artistic style or method of rendering.",
		example: `"in the style reminiscent of Vermeer's lighting techniques", "emulating a noir film"`,
	},
	{
		label: "Mood/Atmosphere",
		name: "mood_atmosphere",
		definition: "The emotional or atmospheric quality.",
		example: `"atmosphere of mystery", "serene mood"`,
	},
	{
		label: "Lighting",
		name: "lighting",
		definition: "Specific lighting conditions or effects.",
		example: `"bathed in soft, natural window light", "dramatic shadows under a spotlight"`,
	},
	{
		label: "Perspective/Viewpoint",
		name: "perspective_viewpoint",
		definition: "The angle or perspective from which the scene is viewed.",
		example: `"bird’s eye view", "from a low angle"`,
	},
	{
		label: "Texture/Material",
		name: "texture_material",
		definition: "Prominent textures or materials visible in the image.",
		example: `"textures of rich velvet and rough stone"`,
	},
	{
		label: "Time Period",
		name: "time_period",
		definition: "A specific era or historical period.",
		example: `"Victorian Era", "futuristic 22nd century"`,
	},
	{
		label: "Cultural Elements",
		name: "cultural_elements",
		definition: "Elements that reflect specific cultures or traditions.",
		example: `"inspired by Norse mythology", "traditional Japanese setting"`,
	},
	{
		label: "Emotion",
		name: "emotion",
		definition: "The expressed emotion if the subject is sentient.",
		example: `"expression of deep contemplation", "joyful demeanor"`,
	},
	{
		label: "Medium",
		name: "medium",
		definition: "Specifies the artistic medium or level of detail.",
		example: `"resembling a watercolor painting", "crisp digital rendering"`,
	},
	{
		label: "Clothing",
		name: "clothing",
		guidance:
			"Ensure prompts clearly specify subjects are clothed by describing the types and styles of garments, particularly when avoiding inappropriate content.",
		example: `"clothed in a Victorian gown", "dressed in modern casual wear"`,
	},
];

export default componentsOfAPrompt;
